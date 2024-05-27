Feature: Validate response header

  Scenario: Verify the "Date" value in the response headers
    Given a GET request is executed "/api/RMSTest/ibltest"
    Then the response header "Date" should have a valid date