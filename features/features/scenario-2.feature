Feature: Validate the 'id' and 'type' fields in response data

  @regression
  Scenario: Confirm the content of response data
    Given a GET request is sent to "/api/RMSTest/ibltest"
    Then the "id" field within the data array should never be null or empty
    And every item in the data array should have the "type" field as "episode"
