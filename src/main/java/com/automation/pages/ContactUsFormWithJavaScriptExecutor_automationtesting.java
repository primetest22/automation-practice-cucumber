package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ContactUsFormWithJavaScriptExecutor_automationtesting extends Utility {

    private static final Logger log = LogManager.getLogger(AutomationTestingHomePage.class.getName());

    public ContactUsFormWithJavaScriptExecutor_automationtesting() {
        PageFactory.initElements(driver, this);
    }

    //Submit form elements
    @FindBy(name = "first_name")
    WebElement firstName;
    @FindBy(name = "last_name")
    WebElement lastName;
    @FindBy(name = "email")
    WebElement email;
    @FindBy(name = "message")
    WebElement message;
    @FindBy(xpath = "//div[@id='form_buttons']//input[@value='SUBMIT']")
    WebElement submitBtn;
    @FindBy(xpath = "//div[@id='form_buttons']//input[@value='RESET']")
    WebElement resetBtn;

    public void summitForm() {
        firstName.sendKeys("first name");
        lastName.sendKeys("last name");
        email.sendKeys("eamil@yahoo.com");
        message.sendKeys("Please submit form");
        //Without javascript
        //resetBtn.click();
        // submitBtn.click();
        //With javascript
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click,arguments[1].click", resetBtn, submitBtn);
    }
}
