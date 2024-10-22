package com.automation.steps;

import com.automation.pages.AutomationTestingHomePage;
import com.automation.pages.TestStorePage_automationtesting;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import org.openqa.selenium.WebElement;

public class TestStoreAutomationTesting_StepDef {


    @And("^I click on test store$")
    public void iClickOnTestStore() throws InterruptedException {
    new AutomationTestingHomePage().clickOnStoreLink();
    }

    @And("^I add Hummingbird Printed T-Shirt to cart$")
    public void iAddHummingbirdPrintedTShirtToCart() {
        new TestStorePage_automationtesting().selectItem();
        //new TestStorePage_automationtesting().addItemToCart();
    }

    @And("^I can verify total is correct$")
    public void iCanVerifyTotalIsCorrect() throws InterruptedException {
        new TestStorePage_automationtesting().verifyTotal();
    }

    @And("^I select shirt size \"([^\"]*)\"$")
    public void iSelectShirtSize(String text) throws InterruptedException {
        new TestStorePage_automationtesting().selectSize(text);
    }

    @And("^I enter quantity \"([^\"]*)\"$")
    public void iEnterQuantity(String qnt) throws InterruptedException {
         new TestStorePage_automationtesting().enterQuantity(qnt);
    }
}
