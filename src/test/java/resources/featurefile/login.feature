Feature: Log In Test
  As a user, I want to log in on automation website

  #@smoke @regression
 Scenario: User should navigate to sign in page successfully
   Given I am on homepage
   And I click on sign in link
   Then I see authentication text

  #@sanity @regression
 Scenario Outline: Verify error messages with invalid credentials
   Given I am on homepage
   And I click on sign in link
   And I enter username "<username>"
   And I enter password "<password>"
   And I click on sign in button
   Then I should see error message "<message>"

   Examples:
     | username       | password | message                    |
     |                | 123456   | An email address required. |
     | abcd@gmail.com |          | Password is required.      |
     | adfdfgfg       | 123456   | Invalid email address.     |
     | abcd@gmail.com | 123456   | Authentication failed.     |

  #@regression
  Scenario Outline: User should log in successfully with valid credentials
    Given I am on homepage
    And I click on sign in link
    And I enter username "<username>"
    And I enter password "<password>"
    And I click on sign in button
    Then I should see sign out link is displayed
    Examples:
      | username           | password  |
      | abcxyz01@yahoo.com | primetest |

   #@regression
 Scenario: User should log out successfully
     Given I am on homepage
     And I click on sign in link
     And I enter username "abc0010@yahoo.com"
     And I enter password "password"
     And I click on sign in button
     And I click on sign out link
     Then I should see sign in link is displayed



