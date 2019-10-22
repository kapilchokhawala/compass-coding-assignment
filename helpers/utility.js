const request = require('request-promise');
const tough = require('tough-cookie');
const assert = require('assert');

const uris = require('../configs/uris.json');

// The utility file can be used to implement 3rd party tools interfaces
export default class utility {

    /**
     * This is the abstracted function to make API call by 3rd party tool/module "request-promise"
     * It can have cookie (cookieName, cookieValue), method, uriName and payload (json body for POST and PUT)
     * @param {json} apiRequestData 
     * The function returns JSON object either error or the parsed response body
     */
    async makeAPIRequest(apiRequestData) {
        var options = {
            method: apiRequestData.method,
            uri: uris['baseUrl'] + uris['apiServiceRoute'] + uris[apiRequestData.uriName],
            json: true
        };

        options.body = apiRequestData.payload ? apiRequestData.payload : '';
        
        // setting cookie if cookie was passed; won't be necessary for login API call, etc.
        if(apiRequestData.cookie) {
            let cookie = new tough.Cookie({
                domain: '.compass.com',
                name: apiRequestData.cookie.cookieName,
                value: apiRequestData.cookie.cookieValue,
                httpOnly: false,
                path: '/',
                secure: false
            });
        
            let cookieJar = request.jar();
            cookieJar.setCookie(cookie, 'https://www.compass.com');
            options.jar = cookieJar;
        }

        return await request(options)
            .then(function(parsedBody) {
                return parsedBody;
            })
            .catch(function(error) {
                let errorMessage = error.message.split(' - ');
                errorMessage = JSON.parse(errorMessage[1]);
                assert.notEqual(errorMessage.code, 400, errorMessage.error);
            });
    }
}