// This file contains the API interaction logic using Axios.

import axios, { AxiosResponse } from 'axios';

// Encapsulates all API interactions using Axios
export const httpClient = {
  /**
   * Fetches data from the specified API endpoint using a GET request.
   * 
   * @param url {string} The URL of the API endpoint.
   * @returns {Promise<AxiosResponse>} A promise that resolves to the Axios response object containing the data and other details.
   */
  async get(url: string): Promise<AxiosResponse> {
    return await axios.get(url);
  }
};