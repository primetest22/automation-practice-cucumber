Feature: Create Account Test
  As a user, I want to create account successfully on automation website.

@smoke @regression
Scenario: User can create account successfully.
  Given I am on homepage
  And I click on sign in link
  And I enter email to create account email field "abc00101010@yahoo.com"
  And I click on create an account button
  And I click on male radio button
  And I enter first name "Mahendra"
  And I enter last name "Dhoni"
  And I enter password name "password"
  And I select day for date of birth "1"
  And I select month for date of birth "3"
  And I select year for date of birth "2000"
  And I click on news letter checkbox
  And I click on special offer checkbox
  And I enter address "India"
  And I enter city "New York"
  And I select state "32"
  And I enter zip code "00000"
  And I enter mobile number "000000000"
  And I click on register button
  Then I see My account text




