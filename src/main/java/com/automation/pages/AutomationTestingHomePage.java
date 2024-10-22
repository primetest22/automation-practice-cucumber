package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class AutomationTestingHomePage extends Utility {

    private static final Logger log = LogManager.getLogger(AutomationTestingHomePage.class.getName());

    public AutomationTestingHomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(css = ".close-cookie-warning > span")
    WebElement cookies;

    @FindBy(className = "toggle")
    WebElement clickMenuIcon;

    @CacheLookup
    @FindBy(xpath = "//a[text()='Buttons']")
    WebElement buttonsLink;

    @FindBy(xpath = "//button[text()='Button One']")
    WebElement buttonOne;

    @FindBy(linkText = "CONTACT US FORM TEST")
    WebElement contactUsFormLink;

    @FindBy(linkText = "TEST STORE")
    WebElement testStoreLink;

    @FindBy(linkText = "IFRAMES")
    WebElement iframeLink;

    @FindBy(linkText = "BROWSER TABS")
    WebElement browserTabLink;

    public void clickOnMenuIcon() {
        clickMenuIcon.click();
    }

    public void clickBrowserTabLink() {
        browserTabLink.click();
    }

    public void clickOnIframeLink() {
        iframeLink.click();
    }

    public void clickOnStoreLink() throws InterruptedException {
        //JavascriptExecutor js = (JavascriptExecutor) driver;
        //  js.executeScript("window.scrollBy(0,800)");
        // js.executeScript("arguments[0].click", testStoreLink);
        Thread.sleep(2000);
        testStoreLink.click();
    }


    public void verifyTitle() {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("Homepage", title);

    }

    public void clickContactUsForm() {
        contactUsFormLink.click();
    }

    public void clickButtonOne() throws InterruptedException {
        buttonOne.click();
        //  Thread.sleep(5000);
        //switchToAlert();
        acceptAlert();
    }

    public void clickOnCookies() {
        cookies.click();
    }

    public void clickOnButtonLink() {
        buttonsLink.click();
    }


}
