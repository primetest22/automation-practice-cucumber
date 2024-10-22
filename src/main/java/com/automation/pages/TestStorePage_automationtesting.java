package com.automation.pages;

import com.automation.utility.Utility;
import gherkin.lexer.Th;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

public class TestStorePage_automationtesting extends Utility {

    private static final Logger log = LogManager.getLogger(AutomationTestingHomePage.class.getName());

    public TestStorePage_automationtesting() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "group_1")
    WebElement size;
    @FindBy(xpath = "//div[@class='products row']//a[text()='Hummingbird printed t-shirt']")
    WebElement addItem;
    @FindBy(xpath = "//div[@class='add']")
    WebElement addToCart;
    @FindBy(xpath = "//p[@class='product-total']//span[@class='value']")
    WebElement total;
    @FindBy(id="quantity_wanted")
    WebElement quantity;

    public void enterQuantity(String qnt) throws InterruptedException {

        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollIntoView();",quantity);
//Thread.sleep(2000);
        quantity.click();
      // waitUntilVisibilityOfElementLocated(quantity,2000);

        quantity.clear();
        waitUntilVisibilityOfElementLocated(quantity,1000);
        quantity.sendKeys(qnt);
    }

    public void selectSize(String shirtSize) throws InterruptedException {
        Thread.sleep(2000);
        selectByVisibleTextFromDropDown(size,shirtSize);
    }

    public void verifyTotal() throws InterruptedException {
        Thread.sleep(2000);
        String getTotal = total.getText();
        System.out.println(getTotal);
        Assert.assertEquals("$26.12", getTotal);
    }

    public void addItemToCart() {
        addToCart.click();
    }

    public void selectItem() {
        addItem.click();
    }

}
