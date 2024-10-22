package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.ArrayList;

public class BrowserTab_automationtesting extends Utility {

    private static final Logger log = LogManager.getLogger(BrowserTab_automationtesting.class.getName());

    public BrowserTab_automationtesting() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//input[@value='Open Tab']")
    WebElement openTabBtn;

    public void clickOpenTabBtn() throws InterruptedException {
        for (int i = 0; i <= 2; i++) {
            Thread.sleep(1500);
            openTabBtn.click();
        }
        ArrayList<String> windowHandles = new ArrayList<>(driver.getWindowHandles());
        System.out.println("Number of window tabs opened:" + windowHandles.size());

        for (String windowHandle : windowHandles) {
            driver.switchTo().window(windowHandle);
        }
        Thread.sleep(3000);
        driver.switchTo().window(windowHandles.get(0));
    }

}
