package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class WomenCategoryPage extends Utility {

    private static final Logger log = LogManager.getLogger(WomenCategoryPage.class.getName());

    public WomenCategoryPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Women')]")
    WebElement womenText;

    @CacheLookup
    @FindBy(xpath = "//div[@class='subcategory-image']//a[@title='Tops']")
    WebElement topsLink;

    @CacheLookup
    @FindBy(xpath = "//div[@class='subcategory-image']//a[@title='Dresses']")
    WebElement dressesLink;

    @CacheLookup
    @FindBy(xpath = "//select[@id='selectProductSort']")
    WebElement sortBy;

    @CacheLookup
    @FindBy(xpath = "//a[@class='product-name']")
     List<WebElement> productList;
   // WebElement productList;

    @CacheLookup
    @FindBy(xpath = "//span[@title='Close window']")
    WebElement closeWindow;

    public void clkPopUp() {
        clickOnElement(closeWindow);
        log.info("Close the pop up window : " + closeWindow.toString());
    }

    public void clkOnProductList(String text) {
        for (WebElement list : productList) {
            if (list.getText().equalsIgnoreCase(text) || (list.getText() == "Printed Summer Dress")) {
                clickOnElement(list);
                log.info("Click on product : " + productList.toString());
                break;
            }
        }
    }
//      public void clkOnProductList(String text){
//        clickOnElement(productList,text);
//      }

    public void clkOnSortBy(String Atoz) {
        selectByVisibleTextFromDropDown(sortBy, Atoz);
        log.info("Sort products alphabetically : " + sortBy.toString());
    }

    public void clkOnDressesLink() {
        clickOnElement(dressesLink);
        log.info("Click on dresses link : " + dressesLink.toString());
    }

    public void clkOnTopsLink() {
        clickOnElement(topsLink);
        log.info("Click on tops link : " + topsLink.toString());
    }

    public String verifyWomenText() {
        log.info("Verify women text : " + womenText.toString());
        return getTextFromElement(womenText);
    }

}
