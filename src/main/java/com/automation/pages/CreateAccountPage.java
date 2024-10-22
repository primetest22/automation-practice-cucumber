package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(CreateAccountPage.class.getName());

    public CreateAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@id='uniform-id_gender1']")
    WebElement maleRadio;

    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_firstname']")
    WebElement firstName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_lastname']")
    WebElement lastName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement password;

    @CacheLookup
    @FindBy(xpath = "//select[@id='days']")
    WebElement days;

    @CacheLookup
    @FindBy(xpath = "//select[@id='months']")
    WebElement months;

    @CacheLookup
    @FindBy(xpath = "//select[@id='years']")
    WebElement years;

    @CacheLookup
    @FindBy(xpath = "//input[@id='newsletter']")
    WebElement newsletterCheckBox;

    @CacheLookup
    @FindBy(xpath = "//input[@id='optin']")
    WebElement splOfferCheckBox;

    @CacheLookup
    @FindBy(xpath = "//input[@id='firstname']")
    WebElement addFirstName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='lastname']")
    WebElement addLastName;

    @CacheLookup
    @FindBy(css = "#address1")
    WebElement address;

    @CacheLookup
    @FindBy(xpath = "//input[@id='city']")
    WebElement city;

    @CacheLookup
    @FindBy(xpath = "//select[@id='id_state']")
    WebElement state;

    @CacheLookup
    @FindBy(xpath = "//input[@id='postcode']")
    WebElement zip;

    @CacheLookup
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement mobile;

    @CacheLookup
    @FindBy(xpath = "//input[@id='alias']")
    WebElement futureRefAddress;

    @CacheLookup
    @FindBy(xpath = "//button[@id='submitAccount']")
    WebElement subBtn;

    @CacheLookup
    @FindBy(linkText = "Sign out")
    WebElement signOutLink;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'My account')]")
    WebElement myAccText;

    public String verifyMyAccText(){
        log.info("Verify my account text : " + myAccText.toString());
        return getTextFromElement(myAccText);
    }
    public boolean verifySignOutLink() {
        log.info("Verify my sign out link is displayed : " + signOutLink.toString());
        return verifyThatElementIsDisplayed(signOutLink);
    }
    public void clkOnSignOutLink(){
        clickOnElement(signOutLink);
        log.info("Click on sign out link " + signOutLink.toString());
    }

    public void clkOnRegBtn() {
        clickOnElement(subBtn);
        log.info("Click on register button : " + subBtn.toString());
    }

    public void enterRefAddress(String refAdd) {
        sendTextToElement(futureRefAddress, refAdd);
        log.info("Enter reference address : " + futureRefAddress.toString());
    }

    public void enterMobile(String mbl) {
        sendTextToElement(mobile, mbl);
        log.info("Enter mobile number : " + mobile.toString());
    }

    public void enterZip(String zp) {
        sendTextToElement(zip, zp);
        log.info("Enter zipcode : " + zip.toString());
    }

    public void selectState(String stat) {
        clickOnElement(state);
        selectByValueFromDropDown(state, stat);
        log.info("Select state : " + state.toString());
    }

    public void enterCity(String cit) {
        sendTextToElement(city, cit);
        log.info("Enter city name : " + city.toString());
    }

    public void enterAddress(String adrs) {
        sendTextToElement(address, adrs);
        log.info("Enter address : " + address.toString());
    }

    public void enterAddLstName(String addLstName) {
        sendTextToElement(addLastName, addLstName);
        log.info("Enter last name : " + addLastName.toString());
    }

    public void enterAddFstName(String addFstName) {
        sendTextToElement(addFirstName, addFstName);
        log.info("Enter first name : " + addFirstName.toString());
    }

    public void clkOnSplOfferCheckBox() {
        clickOnElement(splOfferCheckBox);
        log.info("Click on special offer check box : " + splOfferCheckBox.toString());
    }

    public void clkOnNewsLetterCheckBox() {
        clickOnElement(newsletterCheckBox);
        log.info("Click on news letter check box : " + newsletterCheckBox.toString());
    }

    public void selectMonth(String mnth) {
        clickOnElement(months);
        selectByValueFromDropDown(months, mnth);
        log.info("Select month from dropdown : " + months.toString());
    }

    public void selectYear(String yr) {
        clickOnElement(years);
        selectByValueFromDropDown(years, yr);
        log.info("Select year from dropdown : " + years.toString());
    }

    public void selectDay(String dy) {
        clickOnElement(days);
        selectByValueFromDropDown(days, dy);
        log.info("Select day from dropdown : " + days.toString());
    }

    public void enterPassword(String pswd) {
        sendTextToElement(password, pswd);
        log.info("Enter password : " + password.toString());
    }

    public void enterLstName(String lstName) {
        sendTextToElement(lastName, lstName);
        log.info("Enter lastname : " + lastName.toString());
    }

    public void enterFstName(String fstName) {
        sendTextToElement(firstName, fstName);
        log.info("Enter first name : " + firstName.toString());
    }

    public void clkOnMaleRadio() {
        clickOnElement(maleRadio);
        log.info("Click on male radio button : " + maleRadio.toString());

    }

}
