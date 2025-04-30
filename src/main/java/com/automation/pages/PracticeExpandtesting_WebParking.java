package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.util.List;

public class PracticeExpandtesting_WebParking extends Utility {

    private static final Logger log = LogManager.getLogger(PracticeExpandtesting_WebParking.class.getName());

    public PracticeExpandtesting_WebParking() {
        PageFactory.initElements(driver, this);
    }

    //parking lot
    @FindBy(id = "parkingLot")
    WebElement parkingLot;
    //entry date and time
    @FindBy(id = "entryDate")
    WebElement entryDate;
    @FindBy(id = "entryTime")
    WebElement entryTime;
    //exit date and time
    @FindBy(id = "exitDate")
    WebElement exitDate;
    @FindBy(id = "exitTime")
    WebElement exitTime;
    //calculate cost button
    @FindBy(id = "calculateCost")
    WebElement calculateCost;
    //Economic lot parking charges
    @FindBy(xpath = "//div//b[text()='Economy Lot Parking']")
    WebElement economyParking;
    @FindBy(xpath = "//div[@class='row']//div[2]//div[3]//div[2]//ul")
    List<WebElement> economyParkingCharges;

    //parking calculation
    @FindBy(id = "resultValue")
    WebElement result;
    @FindBy(id = "resultMessage")
    WebElement parkingDuration;

    //Book now
    @FindBy(id = "reserveOnline")
    WebElement bookNow;

    //book now
    public void clickOnBookNowBtn(){
        clickOnElement(bookNow);
    }

    //Economy lot parking charges
    public void getEconomyParkingCharges() {

        String parkingType = economyParking.getText();
        for (WebElement ele : economyParkingCharges) {
            String text = getTextFromElement(ele);
            System.out.println("Parking Type and charges: " + parkingType);
            System.out.println(getTextFromElement(ele));

            System.out.println("\n" + "Parking charges for selected type: " +
                    selectByValueFromDropDWon(parkingLot, "Economy Parking") + "\n" + getTextFromElement(result) + "\n" + getTextFromElement(parkingDuration));

            // fixed and user selected parking charge
            String calculatedCharge = getTextFromElement(result).trim();
            String fixedCharge = text.trim();
            System.out.println("text:" + text);
            System.out.println("fixedCharge:" + fixedCharge);

            // Split the extracted price string by spaces or newlines to get individual price values
            String[] extractedPrices = fixedCharge.split("[\\s\\n]+");
            System.out.println("extractedPrices" + extractedPrices[0]);

            for (String extractedPrice : extractedPrices) {
                // Now, we only need the first price in the array (index 0)
                if (extractedPrice.equalsIgnoreCase(calculatedCharge)) {

                    // print both value
                    System.out.println("\n" + "Displayed Charge: " + extractedPrice);
                    System.out.println("Calculated Charge: " + calculatedCharge);

                    Assert.assertEquals(calculatedCharge, extractedPrice);
                }
            }
        }
    }

    //calculate cost button
    public void calculateBtn() {
        clickOnElement(calculateCost);
    }

    //exit date and time
//    public void exitTime() throws InterruptedException {
//        exitTime.click();
//        exitTime.clear();
//        exitTime.sendKeys("21:30");
//        Thread.sleep(2000);
//    }
//    public void exitDate() throws InterruptedException {
//        exitDate.click();
//        exitDate.clear();
//        exitDate.sendKeys("2025-03-25");
//        Thread.sleep(2000);
//    }
    public void exitTime(String text) throws InterruptedException {
        clickOnElement(exitTime);
        clearTextFromField(exitTime);
        sendTextToElement(exitTime, text);
        Thread.sleep(2000);
    }

    public void exitDate(String text) throws InterruptedException {
        clickOnElement(exitDate);
        clearTextFromField(exitDate);
        sendTextToElement(exitDate, text);
        Thread.sleep(2000);
    }

    //entry date and time
//    public void entryTime() throws InterruptedException {
//        entryTime.click();
//        entryTime.clear();
//        entryTime.sendKeys("20:30");
//        Thread.sleep(2000);
//    }
//    public void entryDate() throws InterruptedException {
//        entryDate.click();
//        entryDate.clear();
//        entryDate.sendKeys("2025-03-25");
//        Thread.sleep(2000);
//    }
    public void entryTime(String text) throws InterruptedException {
        clickOnElement(entryTime);
        clearTextFromField(entryTime);
        sendTextToElement(entryTime, text);
        Thread.sleep(2000);
    }

    public void entryDate(String text) throws InterruptedException {
        clickOnElement(entryDate);
        clearTextFromField(entryDate);
        sendTextToElement(entryDate, text);
        Thread.sleep(2000);
    }

    //parking lot
//    public void selectParkingLot() {
//        selectByVisibleTextFromDropDown(parkingLot, "Economy Parking");
//    }

    public void selectParkingLot(String text) {
        selectByVisibleTextFromDropDown(parkingLot, text);
    }
}
