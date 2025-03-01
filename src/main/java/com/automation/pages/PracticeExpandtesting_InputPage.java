package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.time.Duration;

public class PracticeExpandtesting_InputPage extends Utility {

    private static final Logger log = LogManager.getLogger(PracticeExpandtesting_InputPage.class.getName());

    public PracticeExpandtesting_InputPage() {
        PageFactory.initElements(driver, this);
    }


    //WEB INPUT LINK
    @FindBy(id = "input-number")
    WebElement number;
    @FindBy(id = "input-text")
    WebElement text;
    @FindBy(id = "input-password")
    WebElement password;
    @FindBy(id = "input-date")
    WebElement inputDate;
    //display inputs button
    @FindBy(id = "btn-display-inputs")
    WebElement displayInputsButton;
    //verify text
    @FindBy(id = "output-number")
    WebElement outputNum;
    @FindBy(id = "output-text")
    WebElement outputText;
    @FindBy(id = "output-password")
    WebElement outputPass;
    @FindBy(id = "output-date")
    WebElement outputDate;




    //web input link
    public void selectDate(){
      //  date.sendKeys("01-11-2024");

        // Wait for the calendar to be visible
       // WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
       // WebElement calendar = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("input-date")));

        // Select a specific date (for example, November 14, 2024)
        //WebElement date = driver.findElement(By.xpath("//td[contains(@class, 'day') and text()='14']"));

    }
    public void enterAndVerifyDetails(){
        //Enter details
        number.sendKeys("12");
        text.sendKeys("London");
        password.sendKeys("United Kingdom");
        inputDate.sendKeys("01/01/2000");
        //click display input button
        displayInputsButton.click();
        //verify texts
            String num = outputNum.getText();
            String text = outputText.getText();
            String pass = outputPass.getText();
            String date = outputDate.getText();

            Assert.assertEquals("12", num);
            Assert.assertEquals("London", text);
            Assert.assertEquals("United Kingdom", pass);
            Assert.assertEquals("2000-01-01", date);
        }
    }



