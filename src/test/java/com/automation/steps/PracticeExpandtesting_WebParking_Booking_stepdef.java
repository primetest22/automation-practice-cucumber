package com.automation.steps;

import com.automation.pages.PracticeExpandtesting_WebParking_Booking;
import cucumber.api.java.en.And;

public class PracticeExpandtesting_WebParking_Booking_stepdef {
    @And("^I enter personal details$")
    public void iEnterPersonalDetails() {
        new PracticeExpandtesting_WebParking_Booking().enterPersonalDetails();
    }
}
