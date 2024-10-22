package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.util.Iterator;
import java.util.Set;

public class PopUpAndAlerts_automationtesting extends Utility {

    private static final Logger log = LogManager.getLogger(PopUpAndAlerts_automationtesting.class.getName());

    public PopUpAndAlerts_automationtesting() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(linkText = "POP UPS & ALERTS")
    WebElement popupAlertLink;
    @FindBy(xpath = "//div[@class='row']//button[text()='Trigger Pop-up']")
    WebElement triggerPopupBtn;
    @FindBy(xpath = "//button[text()='Trigger Alert']")
    WebElement triggerAlertBtn;

    public void clickPopupAlertLink() {
        popupAlertLink.click();
    }

    public void clickTriggerPopupBtn() {
        triggerPopupBtn.click();
    }

    public void switchToWindow() throws InterruptedException {
        String mainWindow = driver.getWindowHandle();

        Set<String> handles = driver.getWindowHandles();
        Iterator<String> iterator = handles.iterator();

        while (iterator.hasNext()) {
            String child = iterator.next();

            if (!mainWindow.equalsIgnoreCase(child)) {
                driver.switchTo().window(child);
                Thread.sleep(4000);
                driver.close();
            }
        }
        driver.switchTo().window(mainWindow);
        triggerAlertBtn.click();
        Thread.sleep(3000);
        driver.switchTo().alert().accept();
    }
}
