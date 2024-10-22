package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import gherkin.lexer.Th;
//import oracle.jrockit.jfr.ProducerDescriptor;
import org.junit.Assert;

public class WomenCategoryPageTest {
    @And("^I click on women tab link$")
    public void iClickOnWomenTabLink() {
        new HomePage().clickOnWomanTabLink();
    }

    @Then("^I see women text$")
    public void iSeeWomenText() {
        Assert.assertEquals("error","WOMEN",new WomenCategoryPage().verifyWomenText());
    }

    @And("^I click on product \"([^\"]*)\"$")
    public void iClickOnProduct(String product)  {
       new WomenCategoryPage().clkOnProductList(product);
    }

    @And("^I change quantity \"([^\"]*)\"$")
    public void iChangeQuantity(String qnt) throws InterruptedException {
       new ProductPage().clkOnQnt(qnt);
    }

    @And("^I select size \"([^\"]*)\"$")
    public void iSelectSize(String size) throws InterruptedException {
       new ProductPage().clkOnSize(size);
    }

    @And("^I select colour \"([^\"]*)\"$")
    public void iSelectColour(String colour) throws InterruptedException {
       new ProductPage().clkOnColoour(colour);
        Thread.sleep(3000);
    }

    @And("^I click on add to cart Button$")
    public void iClickOnAddToCartButton() throws InterruptedException {
        new ProductPage().clkAddCart();
        Thread.sleep(4000);
    }

    @And("^I see the message Product successfully added to your shopping cart$")
    public void iSeeTheMessageProductSuccessfullyAddedToYourShoppingCart() {
    Assert.assertEquals("error","Product successfully added to your shopping cart",
            new ProductPage().verifyAddedToCart());
    }

    @Then("^I click on X button and close the popup$")
    public void iClickOnXButtonAndCloseThePopup() {
        new WomenCategoryPage().clkPopUp();
    }
}
