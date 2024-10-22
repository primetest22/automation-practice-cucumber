package com.automation.steps;

import com.automation.pages.AutomationTestingHomePage;
import com.automation.pages.CreateAccountPage;
import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class LoginPageTest {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
        new AutomationTestingHomePage().clickOnCookies();
        new AutomationTestingHomePage().clickOnMenuIcon();
    }

    @And("^I click on sign in link$")
    public void iClickOnSignInLink() {
        new HomePage().clickOnSignInTabLink();
    }

    @Then("^I see authentication text$")
    public void iSeeAuthenticationText() {
        Assert.assertEquals("error","AUTHENTICATION",new SignInPage().verifyAuthenticationText());
    }


    @And("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username)  {
        new SignInPage().enterEmail(username);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new SignInPage().enterPassword(password);
    }

    @And("^I click on sign in button$")
    public void iClickOnSignInButton() {
        new SignInPage().clkOnLoginBtn();
    }

    @Then("^I should see error message \"([^\"]*)\"$")
    public void iShouldSeeErrorMessage(String message)  {
    Assert.assertEquals("error",message, new SignInPage().verifyErrorMessage());
    }

    @Then("^I should see sign out link is displayed$")
    public void iShouldSeeSignOutLinkIsDisplayed() {
        new CreateAccountPage().verifySignOutLink();
    }

    @And("^I click on sign out link$")
    public void iClickOnSignOutLink() {
        new CreateAccountPage().clkOnSignOutLink();
    }

    @Then("^I should see sign in link is displayed$")
    public void iShouldSeeSignInLinkIsDisplayed() {
        new HomePage().verifySignLinkText();
    }
}
