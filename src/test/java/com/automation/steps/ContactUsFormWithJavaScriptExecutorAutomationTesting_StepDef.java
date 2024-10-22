package com.automation.steps;

import com.automation.pages.ContactUsFormWithJavaScriptExecutor_automationtesting;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class ContactUsFormWithJavaScriptExecutorAutomationTesting_StepDef {
    @And("^I fill all details and click on submit button$")
    public void iFillAllDetailsAndClickOnSubmitButton() {
        new ContactUsFormWithJavaScriptExecutor_automationtesting().summitForm();
    }

    @Then("^Form should be submitted successfully$")
    public void formShouldBeSubmittedSuccessfully() {
    }
}
