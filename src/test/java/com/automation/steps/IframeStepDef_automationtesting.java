package com.automation.steps;

import com.automation.pages.Iframe_automationtesting;
import cucumber.api.java.en.And;

public class IframeStepDef_automationtesting {
    @And("^I want to interact to iframe on webpage$")
    public void iWantToInteractToIframeOnWebpage() {
        new Iframe_automationtesting().interactIframe();
    }
}
