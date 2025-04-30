package com.automation.steps;

import com.automation.pages.PracticeExpandtesting_WebParking_Confirmation;
import cucumber.api.java.en.Then;

public class PracticeExpandtesting_Webparking_confirmation_stepdef {
    @Then("^I get parking confirmation$")
    public void iGetParkingConfirmation() {
        new PracticeExpandtesting_WebParking_Confirmation().parkingConfirmation();
    }
}
