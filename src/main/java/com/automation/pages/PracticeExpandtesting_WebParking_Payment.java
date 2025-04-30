package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PracticeExpandtesting_WebParking_Payment extends Utility {

    private static final Logger log = LogManager.getLogger(PracticeExpandtesting_WebParking_Payment.class.getName());

    public PracticeExpandtesting_WebParking_Payment() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(id="cardNumber")
    WebElement cardNumber;
    @FindBy(id="expirationDate")
    WebElement expiryDate;
    @FindBy(id="securityCode")
    WebElement cvv;
    @FindBy(id="completeReservation")
    WebElement completeReservationBtn;

    public void enterPaymentDetails(){
        sendTextToElement(cardNumber,"5200828282828223");
        sendTextToElement(expiryDate,"1027");
        sendTextToElement(cvv,"123");
        waitUntilVisibilityOfElementLocated(completeReservationBtn,20);
        javascriptClick(completeReservationBtn);
    }
}
