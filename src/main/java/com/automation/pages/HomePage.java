package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(linkText = "Women")
    WebElement womenLink;

    @CacheLookup
    @FindBy(linkText = "Dresses")
    WebElement dressesLink;

    @CacheLookup
    @FindBy(linkText = "T-shirts")
    WebElement tshirsLink;

    @CacheLookup
    @FindBy(partialLinkText = "Sign")
    WebElement signLink;

    @CacheLookup
    @FindBy(tagName = "//img[@alt='My Store']")
    WebElement logoLink;

    public boolean verifySignLinkText() {
        log.info("Verify sign link is displayed : " + signLink.toString());
        return verifyThatElementIsDisplayed(signLink);
    }

    public void clickOnWomanTabLink() {
        clickOnElement(womenLink);
        log.info("Click on woman tab link : " + womenLink.toString());
    }

    public void clickOnDressesTabLink() {
        clickOnElement(dressesLink);
        log.info("Click on dresses tab link : " + dressesLink.toString());
    }

    public void clickOnTshirtTabLink() {
        clickOnElement(tshirsLink);
        log.info("Click on t-shirts tab link : " + tshirsLink.toString());
    }

    public void clickOnSignInTabLink() {
        clickOnElement(signLink);
        log.info("Click on sign link : " + signLink.toString());
    }

    public void clickOnLogoLink() {
        clickOnElement(logoLink);
        log.info("Click on logo link : " + logoLink.toString());
    }

}
