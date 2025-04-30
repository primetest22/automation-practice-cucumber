package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.util.List;

public class PracticeExpandtesting_WebParking_Booking extends Utility {

    private static final Logger log = LogManager.getLogger(PracticeExpandtesting_WebParking_Booking.class.getName());

    public PracticeExpandtesting_WebParking_Booking() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//strong")
    WebElement parkingChargeBooking;
    @FindBy(id = "firstName")
    WebElement firstname;
    @FindBy(id = "lastName")
    WebElement lastName;
    @FindBy(id = "email")
    WebElement email;
    @FindBy(id = "phone")
    WebElement phone;
    @FindBy(id = "vehicleSize")  //id="vehicleSize"
    WebElement vehicleSize;
    @FindBy(id = "lpNumber")
    WebElement license;
    @FindBy(xpath = "//button[text()='Continue']")
    WebElement continueBtn;

    public void enterPersonalDetails() {

        String extractedCharge = getTextFromElement(parkingChargeBooking);
        System.out.println(extractedCharge);
        if (extractedCharge.equalsIgnoreCase("2.00€") ||
            extractedCharge.equalsIgnoreCase("9.00€") ||
            extractedCharge.equalsIgnoreCase("54.00€")) {

            sendTextToElement(firstname, "Sachin");
            sendTextToElement(lastName, "Tendulkar");
            sendTextToElement(email, "sachin.tendulkar@cricket.com");
            sendTextToElement(phone, "12345");
            //clickOnElement(vehicleSize);
            javascriptClick(vehicleSize);
            selectByVisibleTextFromDropDown(vehicleSize, "Small car");
            sendTextToElement(license, "0123456");
            javascriptClick(continueBtn);

            System.out.println("matching");

        } else {
            System.out.println("not matching");
        }
    }
}
