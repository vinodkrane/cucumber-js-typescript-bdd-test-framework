Feature: Verify transmission start and end dates

  Scenario: Verify that the transmission_start date value is before transmission_end
    Given a GET request is made to "/api/RMSTest/ibltest"
    Then the "transmission_start" date value is before the "transmission_end" date for each element