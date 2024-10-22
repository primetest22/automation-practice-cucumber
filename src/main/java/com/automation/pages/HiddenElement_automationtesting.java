package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HiddenElement_automationtesting extends Utility {

    private static final Logger log = LogManager.getLogger(HiddenElement_automationtesting.class.getName());

    public HiddenElement_automationtesting() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(linkText = "HIDDEN ELEMENTS")
    WebElement hiddenEle;
    @FindBy(xpath = "//button[text()='Toggle']")
    WebElement toggleBtn;
    @FindBy(xpath = "//h3/following-sibling::p[text()='This paragraph should be hidden.']")
    WebElement hiddenText;
    @FindBy(xpath = "//p[text()='This is a visible paragraph.']")
    WebElement visibleText;

    public void getHiddenTxt(){
        System.out.println(hiddenText.isDisplayed());
        System.out.println(visibleText.isDisplayed());
    }
    public void clickToggleBtn(){
        toggleBtn.click();
    }
    public void clickHiddenEleLink(){
        hiddenEle.click();

    }


}
