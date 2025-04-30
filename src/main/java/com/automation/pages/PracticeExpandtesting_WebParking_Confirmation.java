package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class PracticeExpandtesting_WebParking_Confirmation extends Utility {

    private static final Logger log = LogManager.getLogger(PracticeExpandtesting_WebParking_Confirmation.class.getName());

    public PracticeExpandtesting_WebParking_Confirmation() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//h1[text()='Booking Confirmation page for Automation Testing Practice']")
    WebElement bookingConfirmation;
    @FindBy(xpath = "//div[@id='reservationDetails']//li//span//following-sibling::strong")
    WebElement extractBookingAmount;

    public void parkingConfirmation() {
        String text = getTextFromElement(bookingConfirmation);
        String amount = getTextFromElement(extractBookingAmount);
        String[] parkingCharges = {"2.00€", "9.00€", "54.00€"};

        for (String parkingCharge : parkingCharges) {
            if (text.equalsIgnoreCase("Booking Confirmation page for Automation Testing Practice")
                    && amount.equalsIgnoreCase(parkingCharge)) {
                Assert.assertEquals(text, "Booking Confirmation Page For Automation Testing Practice");
                Assert.assertEquals(amount, parkingCharge);
                System.out.println("Confirm booking");
                break;
            }
        }
    }
}
