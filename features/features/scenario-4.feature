Feature: Validate 'live' field in response

  Scenario: Verify that only one episode in the list has 'live' field as true
    Given I execute a GET request to "/api/RMSTest/ibltest"
    Then only one episode in the list should have the 'live' field set to true