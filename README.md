# Cucumber-js Typescript BDD test framework

This project contains BDD tests written in TypeScript for testing the GET endpoints of the API hosted at `https://testapi.io/api/RMSTest/ibltest`.

# Technologies Used
- **Typescript**: A programming language provides type safety and modern JavaScript features.
- **Cucumber-js**: A testing framework for Behavior-Driven Development (BDD).
- **Chai**: An assertion library used with Cucumber-js.
- **Axios**: A promise-based HTTP client for making requests.
- **cucumber-html-reporter**: Generates HTML reports from Cucumber-js test results.

# Prerequisites

Ensure you have Node.js installed. You can download it from [Node.js official website](https://nodejs.org/).

# Installation

To install the necessary dependencies, run the following command in your terminal:

```sh
npm install
npm install cucumber-html-reporter
```

# Running Tests
## Run Tests Locally
To execute the test suite locally, use following command:

Run all tests:

```sh
npm test
```

Run individual test:

```sh
npm run testScenario1
```

Run smoke tests:

```sh
npm run smokeTest
```

## Run Tests Locally and Generate HTML Report
To execute the test suite and generate an HTML report, follow these steps:

Run tests:

```sh
npm test
```

Generate the HTML report:

```sh
npm run generate:report
```

Reports will be created in the reports directory.

# Docker
## Build docker image
To build the Docker image, run the following command:

```sh
docker build --tag bbc -f docker/Dockerfile .
```

## To run the tests within a docker container, use the following command:
Run Tests in Docker, run following command:
```sh
docker run --name bbc -it bbc:latest npm test
```

# Project structure
```sh
bbc
├─ config
│  └─ testconfig.ts
├─ cucumber.js
├─ docker
│  └─ Dockerfile
├─ features
│  ├─ api
│  │  └─ httpClient.ts
│  ├─ features
│  │  ├─ scenario-1.feature
│  │  ├─ scenario-2.feature
│  │  ├─ scenario-3.feature
│  │  ├─ scenario-4.feature
│  │  ├─ scenario-5.feature
│  │  ├─ scenario-6.feature
│  │  └─ scenario-7.feature
│  └─ step-definitions
│     ├─ scenario-1.steps.ts
│     ├─ scenario-2.steps.ts
│     ├─ scenario-3.steps.ts
│     ├─ scenario-4.steps.ts
│     ├─ scenario-5.steps.ts
│     ├─ scenario-6.steps.ts
│     └─ scenario-7.steps.ts
├─ jenkins
│  └─ jenkinsfile
├─ package.json
├─ README.md
├─ reports
│  ├─ cucumber_report.html
│  └─ cucumber_report.json
├─ tsconfig.json
└─ utils
   └─ report.ts
```

# Configuration
- **package.json**: Contains the project dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file.
- **cucumber.js**: Cucumber configuration file.
- **docker**: Contains the Dockerfile for the project.

# Manual tests

## Test Case 1: Scenario: Verify required fields and the structure of the API response.
GIVEN: The request is sent to https://testapi.io/api/RMSTest/ibltest endpoint.
THEN: channel should have non-null and non-empty 'id', 'type' and 'title' fields.
THEN: there should be five scheduled programmes in the response.
THEN: Each programme should have non-null and non-empty 'id' and 'title' fields.
THEN: Each programme should have 'transmission_start' and 'transmission_end' fields in valid date format.

## Scenario 2: Verify schedule duration-text
- GIVEN: a successful GET request is made to https://testapi.io/api/RMSTest/ibltest endpoint.
- THEN: difference of scheduled_start and scheduled_end times matches the duration-text.

## Test Case 3: Verify episode details
- GIVEN: The API endpoint is set to "https://testapi.io/api/RMSTest/ibltest"
- THEN: The response should contain only one episod marked as "live"
