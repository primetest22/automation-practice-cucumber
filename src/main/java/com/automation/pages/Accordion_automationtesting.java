package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class Accordion_automationtesting extends Utility {

    private static final Logger log = LogManager.getLogger(Accordion_automationtesting.class.getName());

    public Accordion_automationtesting() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(linkText = "ACCORDION")
    WebElement accordionLink;
    @FindBy(xpath = "//div[text()='Platform Portability']")
    WebElement platformPort;
    @FindBy(xpath = "//div[text()='Language Support']")
    WebElement languageSupp;
    @FindBy(xpath = "//div[text()='Selenium Grid']")
    WebElement seleniumGrid;

    public void testAccordion() throws InterruptedException {
//        platformPort.click();
//        Thread.sleep(2000);
//        languageSupp.click();
//        seleniumGrid.click();

        WebElement[] elements = {platformPort, languageSupp, seleniumGrid}; // Array of elements to click

        for (WebElement element : elements) {
            for (int i = 0; i < 2; i++) { // Click twice on each element
                element.click();
                Thread.sleep(1000); // Wait for any animations or transitions to complete
            }
            Thread.sleep(2000); // Waiting for the next element to appear
        }
    }
    public void clickAccordionLink(){
        accordionLink.click();
    }



}
