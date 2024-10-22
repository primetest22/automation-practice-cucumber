package com.automation.steps;

import com.automation.pages.HiddenElement_automationtesting;
import cucumber.api.java.en.And;

public class HiddenElement_StepDef {
    @And("^I click on hidden link$")
    public void iClickOnHiddenLink() {
        new HiddenElement_automationtesting().clickHiddenEleLink();
    }

    @And("^I can interact to hidden elements from webpage$")
    public void iCanInteractToHiddenElementsFromWebpage() {
       // new HiddenElement_automationtesting().clickToggleBtn();
        new HiddenElement_automationtesting().getHiddenTxt();
    }
}
