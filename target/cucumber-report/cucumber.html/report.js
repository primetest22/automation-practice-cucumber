$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("practiceexpantesting.feature");
formatter.feature({
  "line": 1,
  "name": "practice expandtesting.com site test",
  "description": "As a user, I want test different functionality for this site",
  "id": "practice-expandtesting.com-site-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 21,
      "value": "#Calculate parking charges"
    },
    {
      "line": 22,
      "value": "#Scenario: User get parking charge upon selecting parking lot"
    },
    {
      "line": 23,
      "value": "#  Given I am on practice expand testing homepage"
    },
    {
      "line": 24,
      "value": "#  And I click on try it out button from web parking"
    },
    {
      "line": 25,
      "value": "#  And I select  parking lot"
    },
    {
      "line": 26,
      "value": "#  And I select entry date and time"
    },
    {
      "line": 27,
      "value": "#  And I select exit date and time"
    },
    {
      "line": 28,
      "value": "#  Then I click on calculate cost button"
    },
    {
      "line": 29,
      "value": "#  And User get cost for parking"
    },
    {
      "line": 31,
      "value": "#calculate parking charges using scenario outline"
    }
  ],
  "line": 33,
  "name": "User get parking charge upon selecting parking lot",
  "description": "",
  "id": "practice-expandtesting.com-site-test;user-get-parking-charge-upon-selecting-parking-lot",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I am on practice expand testing homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I click on try it out button from web parking",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select \"\u003cPARKING LOT\u003e\" parking lot",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I select \"\u003cENTRY DATE\u003e\" entry date and \"\u003cENTRY TIME\u003e\" entry time",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select \"\u003cEXIT DATE\u003e\" exit date and \"\u003cEXIT TIME\u003e\" exit time",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on calculate cost button",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User get cost for parking",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I book parking for one hour",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter personal details",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter payment details",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I get parking confirmation",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "practice-expandtesting.com-site-test;user-get-parking-charge-upon-selecting-parking-lot;",
  "rows": [
    {
      "cells": [
        "PARKING LOT",
        "ENTRY DATE",
        "ENTRY TIME",
        "EXIT DATE",
        "EXIT TIME"
      ],
      "line": 47,
      "id": "practice-expandtesting.com-site-test;user-get-parking-charge-upon-selecting-parking-lot;;1"
    },
    {
      "cells": [
        "Economy Parking",
        "2025-03-25",
        "20:30",
        "2025-03-25",
        "21:30"
      ],
      "line": 48,
      "id": "practice-expandtesting.com-site-test;user-get-parking-charge-upon-selecting-parking-lot;;2"
    },
    {
      "cells": [
        "Economy Parking",
        "2025-03-25",
        "20:30",
        "2025-03-26",
        "20:30"
      ],
      "line": 49,
      "id": "practice-expandtesting.com-site-test;user-get-parking-charge-upon-selecting-parking-lot;;3"
    },
    {
      "cells": [
        "Economy Parking",
        "2025-03-25",
        "20:30",
        "2025-04-01",
        "20:30"
      ],
      "line": 50,
      "id": "practice-expandtesting.com-site-test;user-get-parking-charge-upon-selecting-parking-lot;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3924991400,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "User get parking charge upon selecting parking lot",
  "description": "",
  "id": "practice-expandtesting.com-site-test;user-get-parking-charge-upon-selecting-parking-lot;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I am on practice expand testing homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I click on try it out button from web parking",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select \"Economy Parking\" parking lot",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I select \"2025-03-25\" entry date and \"20:30\" entry time",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select \"2025-03-25\" exit date and \"21:30\" exit time",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on calculate cost button",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User get cost for parking",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I book parking for one hour",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter personal details",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter payment details",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I get parking confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticeExpandtesting_HomePage_StepDef.iAmOnPracticeExpandTestingHomepage()"
});
formatter.result({
  "duration": 148315100,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_StepDef.iClickOnTryItOutButtonFromWebParking()"
});
formatter.result({
  "duration": 825759600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Economy Parking",
      "offset": 10
    }
  ],
  "location": "PracticeExpandtesting_WebParking_StepDef.iSelectParkingLot(String)"
});
formatter.result({
  "duration": 230011700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2025-03-25",
      "offset": 10
    },
    {
      "val": "20:30",
      "offset": 38
    }
  ],
  "location": "PracticeExpandtesting_WebParking_StepDef.iSelectEntryDateAndEntryTime(String,String)"
});
formatter.result({
  "duration": 4591060900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2025-03-25",
      "offset": 10
    },
    {
      "val": "21:30",
      "offset": 37
    }
  ],
  "location": "PracticeExpandtesting_WebParking_StepDef.iSelectExitDateAndExitTime(String,String)"
});
formatter.result({
  "duration": 4775395800,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_StepDef.iClickOnCalculateCostButton()"
});
formatter.result({
  "duration": 153091600,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_StepDef.iCostForParking()"
});
formatter.result({
  "duration": 315314400,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_StepDef.iBookParkingForOneHour()"
});
formatter.result({
  "duration": 797809900,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_Booking_stepdef.iEnterPersonalDetails()"
});
formatter.result({
  "duration": 1739432300,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_Payment_stepdef.iEnterPaymentDetails()"
});
formatter.result({
  "duration": 796939000,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_Webparking_confirmation_stepdef.iGetParkingConfirmation()"
});
formatter.result({
  "duration": 791062900,
  "status": "passed"
});
formatter.after({
  "duration": 329400,
  "status": "passed"
});
formatter.before({
  "duration": 3191384000,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "User get parking charge upon selecting parking lot",
  "description": "",
  "id": "practice-expandtesting.com-site-test;user-get-parking-charge-upon-selecting-parking-lot;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I am on practice expand testing homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I click on try it out button from web parking",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select \"Economy Parking\" parking lot",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I select \"2025-03-25\" entry date and \"20:30\" entry time",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select \"2025-03-26\" exit date and \"20:30\" exit time",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on calculate cost button",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User get cost for parking",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I book parking for one hour",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter personal details",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter payment details",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I get parking confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticeExpandtesting_HomePage_StepDef.iAmOnPracticeExpandTestingHomepage()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_StepDef.iClickOnTryItOutButtonFromWebParking()"
});
formatter.result({
  "duration": 939522200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Economy Parking",
      "offset": 10
    }
  ],
  "location": "PracticeExpandtesting_WebParking_StepDef.iSelectParkingLot(String)"
});
formatter.result({
  "duration": 280990800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2025-03-25",
      "offset": 10
    },
    {
      "val": "20:30",
      "offset": 38
    }
  ],
  "location": "PracticeExpandtesting_WebParking_StepDef.iSelectEntryDateAndEntryTime(String,String)"
});
formatter.result({
  "duration": 4583653000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2025-03-26",
      "offset": 10
    },
    {
      "val": "20:30",
      "offset": 37
    }
  ],
  "location": "PracticeExpandtesting_WebParking_StepDef.iSelectExitDateAndExitTime(String,String)"
});
formatter.result({
  "duration": 4592854800,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_StepDef.iClickOnCalculateCostButton()"
});
formatter.result({
  "duration": 86256600,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_StepDef.iCostForParking()"
});
formatter.result({
  "duration": 478109600,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_StepDef.iBookParkingForOneHour()"
});
formatter.result({
  "duration": 986476700,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_Booking_stepdef.iEnterPersonalDetails()"
});
formatter.result({
  "duration": 1881834800,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_Payment_stepdef.iEnterPaymentDetails()"
});
formatter.result({
  "duration": 880693200,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_Webparking_confirmation_stepdef.iGetParkingConfirmation()"
});
formatter.result({
  "duration": 698733400,
  "status": "passed"
});
formatter.after({
  "duration": 89900,
  "status": "passed"
});
formatter.before({
  "duration": 2973814100,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "User get parking charge upon selecting parking lot",
  "description": "",
  "id": "practice-expandtesting.com-site-test;user-get-parking-charge-upon-selecting-parking-lot;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I am on practice expand testing homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I click on try it out button from web parking",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select \"Economy Parking\" parking lot",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I select \"2025-03-25\" entry date and \"20:30\" entry time",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select \"2025-04-01\" exit date and \"20:30\" exit time",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on calculate cost button",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User get cost for parking",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I book parking for one hour",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter personal details",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter payment details",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I get parking confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticeExpandtesting_HomePage_StepDef.iAmOnPracticeExpandTestingHomepage()"
});
formatter.result({
  "duration": 39400,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_StepDef.iClickOnTryItOutButtonFromWebParking()"
});
formatter.result({
  "duration": 792803900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Economy Parking",
      "offset": 10
    }
  ],
  "location": "PracticeExpandtesting_WebParking_StepDef.iSelectParkingLot(String)"
});
formatter.result({
  "duration": 144300500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2025-03-25",
      "offset": 10
    },
    {
      "val": "20:30",
      "offset": 38
    }
  ],
  "location": "PracticeExpandtesting_WebParking_StepDef.iSelectEntryDateAndEntryTime(String,String)"
});
formatter.result({
  "duration": 4514083800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2025-04-01",
      "offset": 10
    },
    {
      "val": "20:30",
      "offset": 37
    }
  ],
  "location": "PracticeExpandtesting_WebParking_StepDef.iSelectExitDateAndExitTime(String,String)"
});
formatter.result({
  "duration": 4578417900,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_StepDef.iClickOnCalculateCostButton()"
});
formatter.result({
  "duration": 100413500,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_StepDef.iCostForParking()"
});
formatter.result({
  "duration": 492309700,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_StepDef.iBookParkingForOneHour()"
});
formatter.result({
  "duration": 978878000,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_Booking_stepdef.iEnterPersonalDetails()"
});
formatter.result({
  "duration": 1825952300,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_WebParking_Payment_stepdef.iEnterPaymentDetails()"
});
formatter.result({
  "duration": 1321282200,
  "status": "passed"
});
formatter.match({
  "location": "PracticeExpandtesting_Webparking_confirmation_stepdef.iGetParkingConfirmation()"
});
formatter.result({
  "duration": 56140000,
  "status": "passed"
});
formatter.after({
  "duration": 27700,
  "status": "passed"
});
});