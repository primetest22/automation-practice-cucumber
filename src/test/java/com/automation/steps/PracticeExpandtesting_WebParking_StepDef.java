package com.automation.steps;

import com.automation.pages.PracticeExpandtesting_HomePage;
import com.automation.pages.PracticeExpandtesting_WebParking;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class PracticeExpandtesting_WebParking_StepDef {
    @And("^I click on try it out button from web parking$")
    public void iClickOnTryItOutButtonFromWebParking() {
        new PracticeExpandtesting_HomePage().clickWebParking();
    }

    @And("^I select  parking lot$")
        public void iSelectParkingLot() {
      //  new PracticeExpandtesting_WebParking().selectParkingLot();
    }

    @And("^I select entry date and time$")
    public void iSelectEntryDateAndTime() throws InterruptedException {
//        new PracticeExpandtesting_WebParking().entryDate();
//        new PracticeExpandtesting_WebParking().entryTime();
    }

    @And("^I select exit date and time$")
    public void iSelectExitDateAndTime() throws InterruptedException {
        //new PracticeExpandtesting_WebParking().exitDate();
        //new PracticeExpandtesting_WebParking().exitTime();
    }

    @Then("^I click on calculate cost button$")
    public void iClickOnCalculateCostButton() {
        new PracticeExpandtesting_WebParking().calculateBtn();
    }

    @And("^User get cost for parking$")
    public void iCostForParking() {
        new PracticeExpandtesting_WebParking().getEconomyParkingCharges();

    }

    @And("^I select \"([^\"]*)\" parking lot$")
    public void iSelectParkingLot(String text)  {
       new PracticeExpandtesting_WebParking().selectParkingLot(text);
    }

    @And("^I select \"([^\"]*)\" entry date and \"([^\"]*)\" entry time$")
    public void iSelectEntryDateAndEntryTime(String text1, String text2) throws InterruptedException {
         new PracticeExpandtesting_WebParking().entryDate(text1);
         new PracticeExpandtesting_WebParking().entryTime(text2);
    }

    @And("^I select \"([^\"]*)\" exit date and \"([^\"]*)\" exit time$")
    public void iSelectExitDateAndExitTime(String text1, String text2) throws InterruptedException {
         new PracticeExpandtesting_WebParking().exitDate(text1);
         new PracticeExpandtesting_WebParking().exitTime(text2);
    }

    @And("^I book parking for one hour$")
    public void iBookParkingForOneHour() {
        new PracticeExpandtesting_WebParking().clickOnBookNowBtn();
    }
}
