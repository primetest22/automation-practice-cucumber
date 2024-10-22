package com.automation.steps;

import com.automation.pages.CreateAccountPage;
import com.automation.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class CreateAccountTest {
    @And("^I enter email to create account email field \"([^\"]*)\"$")
    public void iEnterEmailToCreateAccountEmailField(String email) {
        new SignInPage().enterCreateActEmailId(email);
    }

    @And("^I click on create an account button$")
    public void iClickOnCreateAnAccountButton() {
        new SignInPage().clkOnCreatActBtn();
    }

    @And("^I click on male radio button$")
    public void iClickOnMaleRadioButton() {
        new CreateAccountPage().clkOnMaleRadio();
    }

    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String fstName) {
        new CreateAccountPage().enterFstName(fstName);
    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lstName) {
        new CreateAccountPage().enterLstName(lstName);
    }

    @And("^I enter password name \"([^\"]*)\"$")
    public void iEnterPasswordName(String password) {
        new CreateAccountPage().enterPassword(password);
    }

    @And("^I select day for date of birth \"([^\"]*)\"$")
    public void iSelectDayForDateOfBirth(String day) {
        new CreateAccountPage().selectDay(day);
    }

    @And("^I select month for date of birth \"([^\"]*)\"$")
    public void iSelectMonthForDateOfBirth(String month) {
        new CreateAccountPage().selectMonth(month);
    }

    @And("^I select year for date of birth \"([^\"]*)\"$")
    public void iSelectYearForDateOfBirth(String year) {
        new CreateAccountPage().selectYear(year);
    }

    @And("^I click on news letter checkbox$")
    public void iClickOnNewsLetterCheckbox() {
        new CreateAccountPage().clkOnNewsLetterCheckBox();
    }

    @And("^I click on special offer checkbox$")
    public void iClickOnSpecialOfferCheckbox() {
        new CreateAccountPage().clkOnSplOfferCheckBox();
    }

    @And("^I enter address \"([^\"]*)\"$")
    public void iEnterAddress(String address) {
        new CreateAccountPage().enterAddress(address);
    }

    @And("^I enter city \"([^\"]*)\"$")
    public void iEnterCity(String city) {
        new CreateAccountPage().enterCity(city);
    }

    @And("^I select state \"([^\"]*)\"$")
    public void iSelectState(String state) {
        new CreateAccountPage().selectState(state);
    }

    @And("^I enter zip code \"([^\"]*)\"$")
    public void iEnterZipCode(String zipCode) {
        new CreateAccountPage().enterZip(zipCode);
    }

    @And("^I enter mobile number \"([^\"]*)\"$")
    public void iEnterMobileNumber(String mobile) {
        new CreateAccountPage().enterMobile(mobile);
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new CreateAccountPage().clkOnRegBtn();
    }

    @Then("^I see My account text$")
    public void iSeeMyAccountText() {
        Assert.assertEquals("error", "My account", new CreateAccountPage().verifyMyAccText());
    }

}
