package com.automation.steps;

import com.automation.pages.BrowserTab_automationtesting;
import cucumber.api.java.en.And;

public class BrowserTabStepDef_automationtesting {
    @And("^I want to interact with different browser tab$")
    public void iWantToInteractWithDifferentBrowserTab() throws InterruptedException {
        new BrowserTab_automationtesting().clickOpenTabBtn();

    }
}
