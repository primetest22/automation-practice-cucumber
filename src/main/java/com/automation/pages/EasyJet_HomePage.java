package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.time.Duration;
import java.util.List;

public class EasyJet_HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(EasyJet_HomePage.class.getName());

    public EasyJet_HomePage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//button[text()='Accept all cookies']")
    WebElement cookies;
    @FindBy(className = "origin")
    WebElement departureEle;
    @FindBy(xpath = "//ul[@id='ui-id-1']//li//a//span")
    List<WebElement> allDepartureList;

    @FindBy(className = "destination")
    WebElement arrivalEle;
    @FindBy(xpath = "//ul[@id='ui-id-2']//li//a//span")
    List<WebElement> allArrivalList;

    public void allDeparture() {
        waitUntilVisibilityOfElementLocated(allDepartureList, 2000);
        for (WebElement departure : allDepartureList) {
            System.out.println(departure.getText());
            if (departure.getText().contains("Gatwick")) {
                departure.click();
            }
        }
    }

    public void allArrival() {
        waitUntilVisibilityOfElementLocated(allArrivalList, 2000);
        for (WebElement arrival : allArrivalList) {
            System.out.println(arrival.getText());
            if (arrival.getText().contains("Venice")) {
                arrival.click();
            }
        }
    }

    public void arrivalText() {
        arrivalEle.clear();
        arrivalEle.sendKeys("italy");
    }

    public void departureText() {
        departureEle.clear();
        departureEle.sendKeys("london");
    }

    public void clickOnCookies() {
        // Thread.sleep(2000);
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(2000));
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[text()='Accept all cookies']")));
        driver.findElement(By.xpath("//button[text()='Accept all cookies']")).click();
    }


}
