package com.automation.steps;

import com.automation.pages.AutomationTestingHomePage;
import com.automation.pages.AutomationTestingTablePage;
import cucumber.api.java.en.And;

public class AutomationTestingTablePage_StepDef {
    @And("^I click on tables link from menu$")
    public void iClickOnTablesLinkFromMenu() {
        new AutomationTestingHomePage().clickTableLink();
    }

    @And("^I verify values from tables$")
    public void iVerifyValuesFromTables() throws InterruptedException {
        new AutomationTestingTablePage().verifyTableHeading();
       // Thread.sleep(1000);
        new AutomationTestingTablePage().verityTableVales();

    }
}
