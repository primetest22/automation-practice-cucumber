package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Iframe_automationtesting extends Utility {

    private static final Logger log = LogManager.getLogger(Iframe_automationtesting.class.getName());

    public Iframe_automationtesting() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(css = ".toggle")
    WebElement iframeMenuIcon;
    @FindBy(css = "[aria-label='Play']")
    WebElement playBtn;

    public void interactIframe() {
        driver.switchTo().frame(0);
        iframeMenuIcon.click();
        driver.switchTo().parentFrame();
        waitUntilVisibilityOfElementLocated(iframeMenuIcon, 30);
        iframeMenuIcon.click();
        driver.switchTo().frame(1);
        waitUntilVisibilityOfElementLocated(playBtn, 30);
        playBtn.click();
    }
}
