Feature: practice expandtesting.com site test
  As a user, I want test different functionality for this site

  #@smoke
  #Dynamic Table
  Scenario: I want to verify values from dynamic table
    Given I am on practice expand testing homepage
    And I click on dynamic tables link
    And I get value of CPU load for chrome and verify it is matching to yellow lable

  #Web inputs with date picker
  Scenario: User enter valid data in text field and select date from date picker
    Given I am on practice expand testing homepage
    And I click on web input link
    And I enter valid data in text field
    And I select date
    And I click on display inputs
    And I verify entered values
    And I click clear inputs to clear entered data





