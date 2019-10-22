import utility from '../helpers/utility';
let util = new utility();

export default class loginApis {

    /**
     * This function can be used to make property search api requests
     * @param {json} userCredentials it must have authentication token key "remember_token" and the authentication token value
     * @param {json} testData it can have numOfBedroom, geography, listingType
     * This function returns json object with listings and details (number of bedrooms, bathrooms, etc.) of each listing
     */
    async postAptSearchRequest(userCredentials, testData) {
        let apiRequestData = {
            method: 'POST',
            uriName: 'uriPropertySearch',
            payload: {  
                "searchQuery":{
                    "bedrooms": 
                        testData && testData.numOfBedroom ? [testData.numOfBedroom] : [], 
                   "start":0,
                   "num":24,
                   "availability":0,
                   "maxOriginalsPerListing": 0,
                   "geography": testData && testData.geography ? testData.geography : 'dc',
                   "listingTypes":[  
                    testData && testData.listingType ? testData.listingType : 0
                   ],
                   "sortOrder":5,
                   "feedListingsSearch":false
                },
                "relationTypes":[  
                   0
                ]
            },
            cookie: {
                cookieName: userCredentials.rememberToken,
                cookieValue: userCredentials.authenticationToken
            }
        };
        return util.makeAPIRequest(apiRequestData);      
    }
}