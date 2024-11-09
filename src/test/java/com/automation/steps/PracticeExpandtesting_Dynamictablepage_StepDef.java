package com.automation.steps;

import com.automation.pages.PracticeExpandtesting_DynamicTablePage;
import cucumber.api.java.en.And;

public class PracticeExpandtesting_Dynamictablepage_StepDef {

    @And("^I get value of CPU load for chrome and verify it is matching to yellow lable$")
    public void iGetValueOfCPULoadForChromeAndVerifyItIsMatchingToYellowLable() throws InterruptedException {
            new PracticeExpandtesting_DynamicTablePage().cpuLoadMatching();
    }
}
