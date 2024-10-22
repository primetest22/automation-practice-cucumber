package com.automation.steps;

import com.automation.pages.EasyJet_HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class EasyJethomepage_StepDef {
    @Given("^I am on easy jet homepage$")
    public void iAmOnEasyJetHomepage() {
        //  new EasyJet_HomePage().clickOnCookies();
    }

    @And("^I click on cookies$")
    public void iClickOnCookies() {
        new EasyJet_HomePage().clickOnCookies();
    }

    @And("^I get all the departure lists$")
    public void iGetAllTheDepartureLists() {
        new EasyJet_HomePage().departureText();
        new EasyJet_HomePage().allDeparture();
    }

    @And("^I get all the arrival lists$")
    public void iGetAllTheArrivalLists() {
        new EasyJet_HomePage().arrivalText();
        new EasyJet_HomePage().allArrival();
    }
}
