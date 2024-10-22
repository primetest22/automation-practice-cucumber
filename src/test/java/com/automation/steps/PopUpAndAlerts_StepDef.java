package com.automation.steps;

import com.automation.pages.PopUpAndAlerts_automationtesting;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class PopUpAndAlerts_StepDef {
    @And("^I click on popup and alerts link$")
    public void iClickOnPopupAndAlertsLink() {
        new PopUpAndAlerts_automationtesting().clickPopupAlertLink();
    }

    @And("^I click on TRIGGER POP UP button$")
    public void iClickOnTRIGGERPOPUPButton() {
        new PopUpAndAlerts_automationtesting().clickTriggerPopupBtn();
    }

    @Then("^New window will open$")
    public void newWindowWillOpen() throws InterruptedException {
        new PopUpAndAlerts_automationtesting().switchToWindow();
    }

    @And("^I interact to elements on new opened popup window$")
    public void iInteractToElementsOnNewOpenedPopupWindow() {
    }
}
