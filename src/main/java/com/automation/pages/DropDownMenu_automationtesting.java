package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DropDownMenu_automationtesting extends Utility {

    private static final Logger log = LogManager.getLogger(AutomationTestingHomePage.class.getName());

    public DropDownMenu_automationtesting() {
        PageFactory.initElements(driver, this);}

    @FindBy(xpath = "//ul//li//a[text()='DropDown Checkbox Radio']")
    WebElement dropDown;
    @FindBy(css = "select#cars")
    WebElement selectCar;

    public void selectOptionDropDown(){
        selectByVisibleTextFromDropDown(selectCar, "BMW");
    }

    public void clickOnDropdownCheckboxRadioBtnLink() {
        dropDown.click();
    }

}
