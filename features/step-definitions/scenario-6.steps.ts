// Import statements
import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { httpClient } from '../api/httpClient';
import { testConfig } from '../../config/testconfig';

// Step to make a GET request to the given URL
Given('a GET request is executed {string}', async function (url: string) {
  this.response = await httpClient.get(testConfig.testApiBaseUrl + url);
  this.responseHeaders = this.response.headers; 
  
  console.log('Response Headers:', this.responseHeaders);
});

Then('the response header {string} should have a valid date', function (headerName) {
  const lowerCaseHeaderName = headerName.toLowerCase();

  const headerValue = this.responseHeaders[lowerCaseHeaderName];
  console.log(`Header ${headerName}: ${headerValue}`);

  // assertion to check if date is not null
  expect(headerValue).to.not.be.null;

  // assertion to check if date matches the format
  const dateFormatRegex = /^[a-zA-Z]{3}, \d{2} [a-zA-Z]{3} \d{4} \d{2}:\d{2}:\d{2} GMT$/;
  expect(headerValue).to.match(dateFormatRegex, `The "${headerName}" header should be match with date format`);
});