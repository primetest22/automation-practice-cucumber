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

  #Calculate parking charges
  #Scenario: User get parking charge upon selecting parking lot
  #  Given I am on practice expand testing homepage
  #  And I click on try it out button from web parking
  #  And I select  parking lot
  #  And I select entry date and time
  #  And I select exit date and time
  #  Then I click on calculate cost button
  #  And User get cost for parking

  #calculate parking charges using scenario outline
  #@smoke
     Scenario Outline: User get parking charge upon selecting parking lot
      Given I am on practice expand testing homepage
       And I click on try it out button from web parking
       And I select "<PARKING LOT>" parking lot
       And I select "<ENTRY DATE>" entry date and "<ENTRY TIME>" entry time
       And I select "<EXIT DATE>" exit date and "<EXIT TIME>" exit time
       Then I click on calculate cost button
       And User get cost for parking
       And I book parking for one hour
       And I enter personal details
       And I enter payment details
       Then I get parking confirmation

      Examples:
        |      PARKING LOT       |   ENTRY DATE    | ENTRY TIME |   EXIT DATE   |  EXIT TIME  |
        |   Economy Parking      |   2025-05-25    |    20:30   |   2025-05-25  |    21:30    |
        |   Economy Parking      |   2025-05-25    |    20:30   |   2025-05-26  |    20:30    |
        |   Economy Parking      |   2025-05-25    |    20:30   |   2025-06-01  |    20:30    |









