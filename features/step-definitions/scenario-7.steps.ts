// Import statements
import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { httpClient } from '../api/httpClient';
import { testConfig } from '../../config/testconfig';
import { AxiosInstance } from 'axios';

Given('An API call is made using the GET method to {string}', async function (url: string) {
  try {
    this.response = await httpClient.get(testConfig.testApiBaseUrl + url);
  } catch (error) {
    // Check if it's an AxiosError
    if (error.isAxiosError) {
      // Handle Axios errors
      this.response = error.response;
    } else {
      // Handle other errors
      throw error;
    }
  }
});

//step to check if response code is 404
Then('the response status code should be {int}', function (this: any,responseCode: number) {
  expect(this.response.status).to.equal(responseCode);
});

// step checking if the error object has the attributes given 
Then('the response should have an error object with properties {string} and {string}', function (property1, property2) {
    expect(this.response.data.error).to.have.property(property1);
    expect(this.response.data.error).to.have.property(property2);
  });