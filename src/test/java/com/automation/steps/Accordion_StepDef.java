package com.automation.steps;

import com.automation.pages.Accordion_automationtesting;
import cucumber.api.java.en.And;

public class Accordion_StepDef {
    @And("^I click on accordion link$")
    public void iClickOnAccordionLink() {
        new Accordion_automationtesting().clickAccordionLink();
    }

    @And("^I do accordion test on accordion page$")
    public void iDoAccordionTestOnAccordionPage() throws InterruptedException {
        new Accordion_automationtesting().testAccordion();
    }
}
