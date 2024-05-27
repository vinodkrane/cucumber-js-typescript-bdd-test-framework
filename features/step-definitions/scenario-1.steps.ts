import { Given, Then } from '@cucumber/cucumber';
import { httpClient } from '../api/httpClient';
import { expect } from 'chai';
import { testConfig } from '../../config/testconfig';

// variable for recording response time.
let elapsedTime: number;

Given('I make a GET request to {string}', async function (url: string) {
    // recording the request's starting time.
    const startTime = Date.now();

    // sending the GET request and generate the response.
    this.response = await httpClient.get(testConfig.testApiBaseUrl + url);

    // recording the request's end time.
    const endTime = Date.now();

    // Calculating the elapsed time
    elapsedTime = endTime - startTime;
    console.log('Elapsed time: ', elapsedTime, ' milliseconds');
});

Then('the status code should be {int}', function (responseCode: number) {
    expect(this.response.status).to.equal(responseCode);
});

Then('the response time should be less than {int} milliseconds', function (maxResponseTime: number) {
    expect(elapsedTime).to.be.lessThan(maxResponseTime);
});