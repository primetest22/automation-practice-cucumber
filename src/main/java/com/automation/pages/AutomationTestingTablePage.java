package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.List;

public class AutomationTestingTablePage extends Utility {

    private static final Logger log = LogManager.getLogger(AutomationTestingTablePage.class.getName());

    public AutomationTestingTablePage() {
        PageFactory.initElements(driver, this);
    }


    //Tables
    @FindBy(xpath = "//table[@class='sortable']//thead//tr//th")
    List<WebElement> tableHeadings;
    @FindBy(xpath = "//table[@class='sortable']//tbody//tr[1]//td")
    List<WebElement> tableValues;

    //Tables methods
    public void verifyTableHeading() {

        //Expected heading text
        ArrayList<String> expectedHeadings = new ArrayList<>();
        expectedHeadings.add("First Name");
        expectedHeadings.add("Last Name");
        expectedHeadings.add("Date of Birth");
        expectedHeadings.add("Email Address");
        expectedHeadings.add("Residency");
        expectedHeadings.add("Occupation");

        for (WebElement eachHeading : tableHeadings) {
            for (int i = 0; i < expectedHeadings.size(); i++) {
                if (eachHeading.getText().equalsIgnoreCase(expectedHeadings.get(i))) {
                    // System.out.println(eachHeading.getText());
                    // System.out.println(expectedHeadings.get(i));
                    Assert.assertEquals(eachHeading.getText(), expectedHeadings.get(i));
                }
            }
        }
    }

    public void verityTableVales() {
        //Expected table values
        ArrayList<String> expectedValues = new ArrayList<>();
        expectedValues.add("Clare");
        expectedValues.add("Matthews");
        expectedValues.add("1976/04/22");
        expectedValues.add("clarematthews@madeupemailacc.com");
        expectedValues.add("United Kin");
        expectedValues.add("Adminstrator");

        for (WebElement eachValue : tableValues) {
            for (int i = 0; i < expectedValues.size(); i++) {
                if (eachValue.getText().equalsIgnoreCase(expectedValues.get(i))) {
                    // System.out.println(eachValue.getText());
                    // System.out.println(expectedValues.get(i));
                    Assert.assertEquals(eachValue.getText(), expectedValues.get(i));
                }
            }
        }
    }
}





