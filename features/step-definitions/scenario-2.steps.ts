import { Given, Then } from '@cucumber/cucumber';
import { httpClient } from '../api/httpClient';
import { expect } from 'chai';
import { testConfig } from '../../config/testconfig';

// Step to make a GET request to a given URL
Given('a GET request is sent to {string}', async function (this: any,url: string) {
  this.response = await httpClient.get(testConfig.testApiBaseUrl + url);
  this.elements = this.response.data.schedule.elements; 
});

// Step to check that the field within data array is not empty or null
Then('the {string} field within the data array should never be null or empty', function (field: string) { 
  // Iterating over each element in the elements array
  this.elements.forEach((element: any) => {
    expect(element[field], `Episode, ${field} should not be null`).to.not.be.null;
    expect(element[field], `Episode ${field} should not be empty`).to.not.be.empty;
  });
});

// Step to ensure that the value in the "episode" field of each element matches the specified value
Then('every item in the data array should have the {string} field as {string}', function (fieldName: string, expectedValue: string) {
  // Iterating over each element in the elements array  
  this.elements.forEach((element: any) => {
    expect(element.episode[fieldName], `Episode ${fieldName} should be ${expectedValue}`).to.equal(expectedValue);
  });
});