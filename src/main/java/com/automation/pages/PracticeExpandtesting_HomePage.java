package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PracticeExpandtesting_HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(PracticeExpandtesting_HomePage.class.getName());

    public PracticeExpandtesting_HomePage() {
        PageFactory.initElements(driver, this);
    }

    //DYNAMIC TABLE
    @FindBy(linkText = "Dynamic Table")
    WebElement dynamicTableLink;
    //WEB INPUT LINK
    @FindBy(linkText = "Web inputs")
    WebElement webInputLink;
    //web park
    @FindBy(xpath = "//div[@class='card card-custom w-100 h-100']//div[@class='card-footer d-flex justify-content-between align-items-center']//a[@href='/webpark' and text()='Try it out']")
    WebElement webPark;

    //web park
    public void clickWebParking() {
        javascriptClick(webPark);

    }

    //web input link
    public void clickWebInputLink() {
        webInputLink.click();
    }

    //dynamic table
    public void clickDynamicTableLink() {
        // scrollToEle(dynamicTableLink);
        javascriptClick(dynamicTableLink);
        //  dynamicTableLink.click();
    }

}
