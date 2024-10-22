package com.automation.steps;

import com.automation.pages.AutomationTestingHomePage;
import com.automation.pages.DropDownMenu_automationtesting;
import cucumber.api.java.en.And;

public class DropDownMenuAutomationTesting_StepDef {

    @And("^I click on dropdown checkbox radio link$")
    public void iClickOnDropdownCheckboxRadioLink()  {
        new DropDownMenu_automationtesting().clickOnDropdownCheckboxRadioBtnLink();
    }

    @And("^I select option from drop down menu$")
    public void iSelectOptionFromDropDownMenu() {
        new DropDownMenu_automationtesting().selectOptionDropDown();
    }
}
