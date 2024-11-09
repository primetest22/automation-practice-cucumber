Feature: Automationtesting.co.uk site test
  As a user, I want test different actions on automation testing webpage

  #@smoke
  Scenario: User can click on buttons link from homepage.
    Given I am on homepage
    And I click on buttons link
    Then I click on button one
  #@smoke
  Scenario: User can submit contact us form
    Given I am on homepage
    And I click on contact us form test
    And I fill all details and click on submit button
    Then Form should be submitted successfully
  #@smoke
  Scenario: User can select option from drop down menu
    Given I am on homepage
    And I click on dropdown checkbox radio link
    And I select option from drop down menu
  #@smoke
  Scenario: I want to verify title of the webpage
    Given I am on homepage
    Then I verify title of the webpage
  #@smoke
  Scenario: I can verify total
    Given I am on homepage
    And I click on test store
    And I add Hummingbird Printed T-Shirt to cart
    And I select shirt size "M"
    And I enter quantity "2"
    And I can verify total is correct
  #@regression
  Scenario: Verify i can interact on popup windows
    Given I am on homepage
    And I click on popup and alerts link
    And I click on TRIGGER POP UP button
    Then New window will open
    And I interact to elements on new opened popup window
  #@smoke
  Scenario: I want to do accordion test
    Given I am on homepage
    And I click on accordion link
    And I do accordion test on accordion page
  #@smoke
  Scenario: I want to test hidden elements on web page
    Given I am on homepage
    And I click on hidden link
    And I can interact to hidden elements from webpage
  #@smoke
  Scenario: I want to test iframe on webpage
    Given I am on homepage
    And I click on iframe link
    And I want to interact to iframe on webpage
  #@smoke
  Scenario: I want to test browser tab on webpage
    Given I am on homepage
    And I click on browser tab link
    And I want to interact with different browser tab
  #@smoke
  Scenario: I want to verify values from table
    Given I am on homepage
    And I click on tables link from menu
    And I verify values from tables





