import login from '../apis/login-apis';
const loginApis = new login();

import propertySearch from '../apis/property-search-apis';
const propertySearchApis = new propertySearch();

const assert = require('assert');
const _ = require('lodash');

const testUser1 = require('../configs/test-users.json').testUser1;
var userCredentials;

describe('test specs for "rental" property search', function() {

    before('login', async function() {
        userCredentials = await loginApis.postLoginRequest(testUser1.emailId, testUser1.password);
    });

    it('search 2BD "rental" property', async function() {        
        let testData = {
            listingType: 0,
            geography: 'nyc'
        };
        let listingList = await propertySearchApis.postAptSearchRequest(userCredentials, testData);
        let isAllProperty2BedroomAndForRent = _.every(listingList.listingRelations, 
            {
                listing: {
                    listingType: 2,
                    size: {
                        bedrooms: 2
                    }
                }
            }
        );
        assert(isAllProperty2BedroomAndForRent, 'Not all properties retieved in this test have 2 Bedrooms and/or are for Rent');    
    });
    
});