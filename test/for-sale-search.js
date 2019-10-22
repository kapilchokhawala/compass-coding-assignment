import login from '../apis/login-apis';
const loginApis = new login();

import propertySearch from '../apis/property-search-apis';
const propertySearchApis = new propertySearch();

const assert = require('assert');
const _ = require('lodash');

const testUser2 = require('../configs/test-users.json').testUser2;
var userCredentials;

describe('test specs for "for-sale" property search', function() {

    before('login', async function() {
        userCredentials = await loginApis.postLoginRequest(testUser2.emailId, testUser2.password);
    });

    it('search 2BD "for-sale" property', async function() {
        let testData = {
            numOfBedroom: 2,
            listingType: 2,
            geography: 'santa_barbara_montecito'
        };
        let listingList = await propertySearchApis.postAptSearchRequest(userCredentials, testData);
        let isAllProperty2BedroomAndForSale = _.every(listingList.listingRelations, 
            {
                listing: {
                    listingType: 2,
                    size: {
                        bedrooms: 2
                    }
                }
            }
        );
        assert(isAllProperty2BedroomAndForSale, 'Not all properties retieved in this test have 2 Bedrooms and/or are for Sale');    
    });

});