Feature: API response status code and response time

  @smoke
  Scenario: Verify response status code and response time
    Given I make a GET request to "/api/RMSTest/ibltest"
    Then the status code should be <statuscode>
    And the response time should be less than <milliseconds> milliseconds

    Examples:
    | milliseconds | statuscode |
    |      1000    |    200     |