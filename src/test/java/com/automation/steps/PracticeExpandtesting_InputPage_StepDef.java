package com.automation.steps;

import com.automation.pages.PracticeExpandtesting_InputPage;
import cucumber.api.java.en.And;

public class PracticeExpandtesting_InputPage_StepDef {
    @And("^I enter valid data in text field$")
    public void iEnterValidDataInTextField() {
        new PracticeExpandtesting_InputPage().enterAndVerifyDetails();
    }

    @And("^I select date$")
    public void iSelectDate() {
        new PracticeExpandtesting_InputPage().selectDate();
    }

    @And("^I click on display inputs$")
    public void iClickOnDisplayInputs() {
    }

    @And("^I verify entered values$")
    public void iVerifyEnteredValues() {
    }

    @And("^I click clear inputs to clear entered data$")
    public void iClickClearInputsToClearEnteredData() {
    }
}
