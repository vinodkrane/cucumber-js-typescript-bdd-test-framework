import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { httpClient } from '../api/httpClient';
import { testConfig } from '../../config/testconfig';

// Step to make a GET request to a given URL
Given('I perform a GET request to {string}', async function (url: string) {
  this.response = await httpClient.get(testConfig.testApiBaseUrl + url);
  this.elements = this.response.data.schedule.elements; 
});

// Step to check if the response status code is 200
Then('the {string} in {string} is never null or empty for any schedule item', function (title, episode) {
  // Iterating over each item in the elements array
  this.elements.forEach((item: any) => {
    expect(item[episode][title], `${title} field should not be null`).to.not.be.null;
    expect(item[episode][title], `${title} field should not be empty`).to.not.be.empty;
  });
});