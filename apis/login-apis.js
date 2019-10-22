import utility from '../helpers/utility';
let util = new utility();

export default class loginApis {

    /**
     * This function is used to perform login using the api. 
     * @param {string} emailId 
     * @param {string} password 
     * It's return object contains Authentication Token that can be used to make other API calls.
     */
    async postLoginRequest(emailId, password) {
        let data = {
            method: 'POST',
            uriName: 'uriAuthentication',
            payload: {
                email: emailId,
                password: password
            }
        };
        return util.makeAPIRequest(data);
    }
}