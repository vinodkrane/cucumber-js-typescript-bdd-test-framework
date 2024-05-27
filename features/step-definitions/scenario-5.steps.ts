// Import statements
import { Given, Then } from '@cucumber/cucumber';
import { testConfig } from '../../config/testconfig';
import { expect } from 'chai';
import { httpClient } from '../api/httpClient';

// Step to make a GET request to the given URL
Given('a GET request is made to {string}', async function (url: string) {
  this.response = await httpClient.get(testConfig.testApiBaseUrl + url);
  this.elements = this.response.data.schedule.elements; 
});

// Validate that the transmission start date value is before the transmission end date for each element
Then('the {string} date value is before the {string} date for each element', function (transmission_start: string,transmission_end: string) {
  
  // Iterating through each entry in the elements array.
  this.elements.forEach((element: any) => {

    // Extracting the start and end dates from the element
    const start = new Date(element[transmission_start]);
    const end = new Date(element[transmission_end]);
    console.log('Start date:', start.toISOString(), 'End date:', end.toISOString());
    expect(start).to.be.below(end, `The ${transmission_start} needs to occur earlier than ${transmission_end}`);
  });
});