package com.automation.steps;

import com.automation.pages.PracticeExpandtesting_WebParking_Payment;
import cucumber.api.java.en.And;

public class PracticeExpandtesting_WebParking_Payment_stepdef {
    @And("^I enter payment details$")
    public void iEnterPaymentDetails() {
                new PracticeExpandtesting_WebParking_Payment().enterPaymentDetails();
    }
}
