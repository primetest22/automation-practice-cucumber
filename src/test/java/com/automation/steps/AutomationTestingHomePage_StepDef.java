package com.automation.steps;

import com.automation.pages.AutomationTestingHomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class AutomationTestingHomePage_StepDef {
    @And("^I click on buttons link$")
    public void iClickOnButtonsLink()  {
       // new AutomationTestingHomePage().clickOnCookies();
        new AutomationTestingHomePage().clickOnButtonLink();
    }

    @Then("^I click on button one$")
    public void iClickOnButtonOne() throws InterruptedException {
        new AutomationTestingHomePage().clickButtonOne();
    }

    @And("^I click on contact us form test$")
    public void iClickOnContactUsFormTest() {
        new AutomationTestingHomePage().clickContactUsForm();
    }

    @Then("^I verify title of the webpage$")
    public void iVerifyTitleOfTheWebpage() {
        new AutomationTestingHomePage().verifyTitle();
    }

    @And("^I click on iframe link$")
    public void iClickOnIframeLink() {
        new AutomationTestingHomePage().clickOnIframeLink();
    }

    @And("^I click on browser tab link$")
    public void iClickOnBrowserTabLink() {
        new AutomationTestingHomePage().clickBrowserTabLink();
    }
}
