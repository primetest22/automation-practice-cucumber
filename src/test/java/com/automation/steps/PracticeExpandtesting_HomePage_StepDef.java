package com.automation.steps;

import com.automation.pages.PracticeExpandtesting_DynamicTablePage;
import com.automation.pages.PracticeExpandtesting_HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class PracticeExpandtesting_HomePage_StepDef {

    @Given("^I am on practice expand testing homepage$")
    public void iAmOnPracticeExpandTestingHomepage() {

    }

    @And("^I click on dynamic tables link$")
    public void iClickOnDynamicTablesLink() throws InterruptedException {
        Thread.sleep(5000);
        new PracticeExpandtesting_HomePage().clickDynamicTableLink();

    }
    @And("^I click on web input link$")
    public void iClickOnWebInputLink() {
        new PracticeExpandtesting_HomePage().clickWebInputLink();
    }
}
