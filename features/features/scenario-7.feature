Feature: Validate response for the resource which does not exist

  Scenario: Verify that if resource does not exist should returns a 404 status code
    Given An API call is made using the GET method to "/api/RMSTest/ibltest/2023-09-11"
    Then the response status code should be <statuscode>
    And the response should have an error object with properties 'details' and 'http_response_code'

    Examples:
    | statuscode |
    |     404    |