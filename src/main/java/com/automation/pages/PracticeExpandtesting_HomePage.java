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

    //Dynamic table link
    @FindBy(linkText = "Dynamic Table")
    WebElement dynamicTableLink;

    public void clickDynamicTableLink(){
       // scrollToEle(dynamicTableLink);
        javascriptClick(dynamicTableLink);
      //  dynamicTableLink.click();
    }

   }
