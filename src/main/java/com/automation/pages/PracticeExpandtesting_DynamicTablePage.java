package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.time.Duration;
import java.util.List;

public class PracticeExpandtesting_DynamicTablePage extends Utility {

    private static final Logger log = LogManager.getLogger(PracticeExpandtesting_DynamicTablePage.class.getName());

    public PracticeExpandtesting_DynamicTablePage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//table[@class='table table-striped']//thead")
    WebElement heading;
    @FindBy(xpath = "//table[@class='table table-striped']//tbody//tr")
    List<WebElement> tableValues;
    @FindBy(id = "chrome-cpu")
    WebElement yellowLableValue;
    @FindBy(xpath = "//table[@class='table table-striped']//tbody//tr//td[1]")
    List<WebElement> firstColValue;

    public void cpuLoadMatching() throws InterruptedException {
        for (int r = 1; r <= tableValues.size(); r++) {
            WebElement browserName = driver.findElement(By.xpath("//table[@class='table table-striped']//tbody//tr[" + r + "]//td[1]"));
            if (browserName.getText().equals("Chromee")) {
                String cpuLoad = driver.findElement(By.xpath("//td[normalize-space()='Chrome']//following-sibling::*[contains(text(),'%')]")).getText();
                Assert.assertEquals("Chrome CPU: " + cpuLoad, yellowLableValue.getText());
                break;
              }

            }
        }
    }


