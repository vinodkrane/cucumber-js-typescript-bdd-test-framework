Feature: Verify that the title field in episode is not null or not empty

  @regression
  Scenario: Verify that the 'title' in the 'episode' is never null or empty
    Given I perform a GET request to "/api/RMSTest/ibltest"
    Then the 'title' in 'episode' is never null or empty for any schedule item