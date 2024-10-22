package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage extends Utility {

    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());

    public SignInPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath = "//i[@class='icon-lock left']")
    WebElement logInBtn;

    @CacheLookup
    @FindBy(xpath = "//button[@id='SubmitCreate']")
    WebElement creatActBtn;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Authentication')]")
    WebElement authenticationText;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Create an account')]")
    WebElement creatActText;

    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement createActEmailId;

    @CacheLookup
    @FindBy(xpath = "//div[@class='alert alert-danger']//li")
    WebElement errorMessage;

    public String verifyErrorMessage(){
        log.info("Verify error message : " + errorMessage.toString());
        return getTextFromElement(errorMessage);
    }

    public void enterCreateActEmailId(String crtActEmail) {
        sendTextToElement(createActEmailId, crtActEmail);
        log.info("Enter email to create an account email field : " + createActEmailId.toString());
    }

    public void enterEmail(String email) {
        sendTextToElement(emailField, email);
        log.info("Enter email : " + emailField.toString());
    }

    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
        log.info("Enter password : " + passwordField.toString());
    }

    public void clkOnLoginBtn() {
        clickOnElement(logInBtn);
        log.info("Click on  log in button : " + logInBtn.toString());
    }

    public void clkOnCreatActBtn() {
        clickOnElement(creatActBtn);
        log.info("Click on create account button : " + creatActBtn.toString());
    }

    public String verifyAuthenticationText() {
        log.info("Verify authentication text : " + authenticationText.toString());
        return getTextFromElement(authenticationText);
    }

    public String verifyCreateActText() {
        log.info("Verify create account text : " + creatActText.toString());
        return getTextFromElement(creatActText);
    }

}
