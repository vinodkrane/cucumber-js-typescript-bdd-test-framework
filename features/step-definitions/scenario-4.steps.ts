// Import statements
import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { httpClient } from '../api/httpClient';
import { testConfig } from '../../config/testconfig';

// Step to make a GET request to the given URL
Given('I execute a GET request to {string}', async function (url: string) {
  this.response = await httpClient.get(testConfig.testApiBaseUrl + url);
  this.elements = this.response.data.schedule.elements; 
});

// Verify that only one episode in the list has "live" field in "episode" as true
Then('only one episode in the list should have the {string} field set to true', function (field) {
  let liveEpisodeCount = 0;

  // Iterating over each item in the elements array
  for (const element of this.elements) {
    // Checking if the episode exists and whether the specified field is true.
    if (element.episode && element.episode[field] === true) {
      liveEpisodeCount++;
    }
  }
  expect(liveEpisodeCount, `only one episode in the list with the ${field} field as true`).to.equal(1);
});