package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductPage extends Utility {

    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    public ProductPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement qnt;

    @CacheLookup
    @FindBy(css = "#group_1")
    WebElement size;

    @CacheLookup
    @FindBy(xpath = "//ul[@id='color_to_pick_list']//li")
    WebElement colour;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Add to cart')]")
    WebElement addCart;

    @CacheLookup
    @FindBy(xpath = "//div[@class='layer_cart_product col-xs-12 col-md-6']//h2")
    WebElement addedToCartText;

    public String verifyAddedToCart(){
        return getTextFromElement(addedToCartText);
    }

    public void clkOnQnt(String qnt1) throws InterruptedException {
      //  clickOnElement(qnt);
        clearTextFromField(qnt);
        Thread.sleep(1500);
        sendTextToElement(qnt, qnt1);
        log.info("Enter quantity : " + qnt.toString());
    }

    public void clkAddCart() {
        clickOnElement(addCart);
        log.info("Click on add cart : " + addCart.toString());
    }

    public void clkOnColoour(String clr) {
        clickOnElement(colour, clr);
        log.info("Click on colour : " + colour.toString());
    }

    public void clkOnSize(String size1) throws InterruptedException {
        clickOnElement(size);
        selectByVisibleTextFromDropDown(size, size1);
        log.info("Select size from dropdown : " + size.toString());
    }

}
