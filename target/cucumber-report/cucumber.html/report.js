$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("automationtesting.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Test",
  "description": "As a user, I want test different actions on automation testing webpage",
  "id": "create-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3615181700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User can click on buttons link from homepage.",
  "description": "",
  "id": "create-account-test;user-can-click-on-buttons-link-from-homepage.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on buttons link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on button one",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 260071500,
  "status": "passed"
});
formatter.match({
  "location": "AutomationTestingHomePage_StepDef.iClickOnButtonsLink()"
});
formatter.result({
  "duration": 133317800,
  "status": "passed"
});
formatter.match({
  "location": "AutomationTestingHomePage_StepDef.iClickOnButtonOne()"
});
formatter.result({
  "duration": 668228600,
  "status": "passed"
});
formatter.after({
  "duration": 61100,
  "status": "passed"
});
formatter.before({
  "duration": 1858274800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User can submit contact us form",
  "description": "",
  "id": "create-account-test;user-can-submit-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on contact us form test",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I fill all details and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Form should be submitted successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 138468000,
  "status": "passed"
});
formatter.match({
  "location": "AutomationTestingHomePage_StepDef.iClickOnContactUsFormTest()"
});
formatter.result({
  "duration": 165184800,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsFormWithJavaScriptExecutorAutomationTesting_StepDef.iFillAllDetailsAndClickOnSubmitButton()"
});
formatter.result({
  "duration": 1120707600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsFormWithJavaScriptExecutorAutomationTesting_StepDef.formShouldBeSubmittedSuccessfully()"
});
formatter.result({
  "duration": 35000,
  "status": "passed"
});
formatter.after({
  "duration": 29500,
  "status": "passed"
});
formatter.before({
  "duration": 2192798100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User can select option from drop down menu",
  "description": "",
  "id": "create-account-test;user-can-select-option-from-drop-down-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on dropdown checkbox radio link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select option from drop down menu",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 843226400,
  "status": "passed"
});
formatter.match({
  "location": "DropDownMenuAutomationTesting_StepDef.iClickOnDropdownCheckboxRadioLink()"
});
formatter.result({
  "duration": 96533600,
  "status": "passed"
});
formatter.match({
  "location": "DropDownMenuAutomationTesting_StepDef.iSelectOptionFromDropDownMenu()"
});
formatter.result({
  "duration": 921708300,
  "status": "passed"
});
formatter.after({
  "duration": 38800,
  "status": "passed"
});
formatter.before({
  "duration": 2238704800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "I want to verify title of the webpage",
  "description": "",
  "id": "create-account-test;i-want-to-verify-title-of-the-webpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I verify title of the webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 780650500,
  "status": "passed"
});
formatter.match({
  "location": "AutomationTestingHomePage_StepDef.iVerifyTitleOfTheWebpage()"
});
formatter.result({
  "duration": 44455200,
  "status": "passed"
});
formatter.after({
  "duration": 34800,
  "status": "passed"
});
formatter.before({
  "duration": 4926538700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "I can verify total",
  "description": "",
  "id": "create-account-test;i-can-verify-total",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on test store",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I add Hummingbird Printed T-Shirt to cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I can verify total is correct",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 441561900,
  "status": "passed"
});
formatter.match({
  "location": "TestStoreAutomationTesting_StepDef.iClickOnTestStore()"
});
formatter.result({
  "duration": 252905800,
  "status": "passed"
});
formatter.match({
  "location": "TestStoreAutomationTesting_StepDef.iAddHummingbirdPrintedTShirtToCart()"
});
formatter.result({
  "duration": 3811877600,
  "status": "passed"
});
formatter.match({
  "location": "TestStoreAutomationTesting_StepDef.iCanVerifyTotalIsCorrect()"
});
formatter.result({
  "duration": 2257843700,
  "status": "passed"
});
formatter.after({
  "duration": 33500,
  "status": "passed"
});
formatter.before({
  "duration": 4840047300,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify i can interact on popup windows",
  "description": "",
  "id": "create-account-test;verify-i-can-interact-on-popup-windows",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I click on popup and alerts link",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on TRIGGER POP UP button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "New window will open",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I interact to elements on new opened popup window",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 428655400,
  "status": "passed"
});
formatter.match({
  "location": "PopUpAndAlerts_StepDef.iClickOnPopupAndAlertsLink()"
});
formatter.result({
  "duration": 314889300,
  "status": "passed"
});
formatter.match({
  "location": "PopUpAndAlerts_StepDef.iClickOnTRIGGERPOPUPButton()"
});
formatter.result({
  "duration": 1125654800,
  "status": "passed"
});
formatter.match({
  "location": "PopUpAndAlerts_StepDef.newWindowWillOpen()"
});
formatter.result({
  "duration": 7493992900,
  "status": "passed"
});
formatter.match({
  "location": "PopUpAndAlerts_StepDef.iInteractToElementsOnNewOpenedPopupWindow()"
});
formatter.result({
  "duration": 98400,
  "status": "passed"
});
formatter.after({
  "duration": 82500,
  "status": "passed"
});
formatter.before({
  "duration": 4006793900,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "I want to do accordion test",
  "description": "",
  "id": "create-account-test;i-want-to-do-accordion-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I click on accordion link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I do accordion test on accordion page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 925830800,
  "status": "passed"
});
formatter.match({
  "location": "Accordion_StepDef.iClickOnAccordionLink()"
});
formatter.result({
  "duration": 266214900,
  "status": "passed"
});
formatter.match({
  "location": "Accordion_StepDef.iDoAccordionTestOnAccordionPage()"
});
formatter.result({
  "duration": 13693338400,
  "status": "passed"
});
formatter.after({
  "duration": 26300,
  "status": "passed"
});
formatter.before({
  "duration": 2254536800,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "I want to test hidden elements on web page",
  "description": "",
  "id": "create-account-test;i-want-to-test-hidden-elements-on-web-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I click on hidden link",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I can interact to hidden elements from webpage",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 342226500,
  "status": "passed"
});
formatter.match({
  "location": "HiddenElement_StepDef.iClickOnHiddenLink()"
});
formatter.result({
  "duration": 225640900,
  "status": "passed"
});
formatter.match({
  "location": "HiddenElement_StepDef.iCanInteractToHiddenElementsFromWebpage()"
});
formatter.result({
  "duration": 863645500,
  "status": "passed"
});
formatter.after({
  "duration": 31700,
  "status": "passed"
});
formatter.before({
  "duration": 3202887000,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "I want to test iframe on webpage",
  "description": "",
  "id": "create-account-test;i-want-to-test-iframe-on-webpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I click on iframe link",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I want to interact to iframe on webpage",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 295096200,
  "status": "passed"
});
formatter.match({
  "location": "AutomationTestingHomePage_StepDef.iClickOnIframeLink()"
});
formatter.result({
  "duration": 1813612000,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (-4, 518)\n  (Session info: chrome\u003d129.0.6668.101)\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b98a755b4c301963986125861e447f47, clickElement {id\u003df.7FD66F88021617B965028313F7A435CE.d.F50118D4F880C49A3EF2FFD255618601.e.11}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 129.0.6668.101, chrome: {chromedriverVersion: 129.0.6668.100 (cf58cba358d..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56676}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56676/devtoo..., se:cdpVersion: 129.0.6668.101, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on windows (b98a755b4c301963986125861e447f47)] -\u003e link text: IFRAMES]\nSession ID: b98a755b4c301963986125861e447f47\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:224)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.pages.AutomationTestingHomePage.clickOnIframeLink(AutomationTestingHomePage.java:55)\r\n\tat com.automation.steps.AutomationTestingHomePage_StepDef.iClickOnIframeLink(AutomationTestingHomePage_StepDef.java:31)\r\n\tat ✽.And I click on iframe link(automationtesting.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "IframeStepDef_automationtesting.iWantToInteractToIframeOnWebpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 150474800,
  "status": "passed"
});
formatter.before({
  "duration": 4611556600,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "I want to test browser tab on webpage",
  "description": "",
  "id": "create-account-test;i-want-to-test-browser-tab-on-webpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I click on browser tab link",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I want to interact with different browser tab",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 320519200,
  "status": "passed"
});
formatter.match({
  "location": "AutomationTestingHomePage_StepDef.iClickOnBrowserTabLink()"
});
formatter.result({
  "duration": 170362500,
  "status": "passed"
});
formatter.match({
  "location": "BrowserTabStepDef_automationtesting.iWantToInteractWithDifferentBrowserTab()"
});
formatter.result({
  "duration": 10962448300,
  "status": "passed"
});
formatter.after({
  "duration": 46900,
  "status": "passed"
});
formatter.uri("createaccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Test",
  "description": "As a user, I want to create account successfully on automation website.",
  "id": "create-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4683101000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User can create account successfully.",
  "description": "",
  "id": "create-account-test;user-can-create-account-successfully.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter email to create account email field \"abc00101010@yahoo.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on male radio button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter first name \"Mahendra\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter last name \"Dhoni\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password name \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select day for date of birth \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select month for date of birth \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select year for date of birth \"2000\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on news letter checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on special offer checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter address \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter city \"New York\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select state \"32\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter zip code \"00000\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter mobile number \"000000000\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I see My account text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 403284600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 20086413800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"partial link text\",\"selector\":\"Sign\"}\n  (Session info: chrome\u003d129.0.6668.101)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4420e47ba294ca7ba41dc8d45baf0cbe, findElement {using\u003dpartial link text, value\u003dSign}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 129.0.6668.101, chrome: {chromedriverVersion: 129.0.6668.100 (cf58cba358d..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56752}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56752/devtoo..., se:cdpVersion: 129.0.6668.101, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4420e47ba294ca7ba41dc8d45baf0cbe\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:60)\r\n\tat com.automation.pages.HomePage.clickOnSignInTabLink(HomePage.java:61)\r\n\tat com.automation.steps.LoginPageTest.iClickOnSignInLink(LoginPageTest.java:22)\r\n\tat ✽.And I click on sign in link(createaccount.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc00101010@yahoo.com",
      "offset": 45
    }
  ],
  "location": "CreateAccountTest.iEnterEmailToCreateAccountEmailField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iClickOnCreateAnAccountButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iClickOnMaleRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mahendra",
      "offset": 20
    }
  ],
  "location": "CreateAccountTest.iEnterFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dhoni",
      "offset": 19
    }
  ],
  "location": "CreateAccountTest.iEnterLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 23
    }
  ],
  "location": "CreateAccountTest.iEnterPasswordName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "CreateAccountTest.iSelectDayForDateOfBirth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 34
    }
  ],
  "location": "CreateAccountTest.iSelectMonthForDateOfBirth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 33
    }
  ],
  "location": "CreateAccountTest.iSelectYearForDateOfBirth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iClickOnNewsLetterCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iClickOnSpecialOfferCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 17
    }
  ],
  "location": "CreateAccountTest.iEnterAddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 14
    }
  ],
  "location": "CreateAccountTest.iEnterCity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 16
    }
  ],
  "location": "CreateAccountTest.iSelectState(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "00000",
      "offset": 18
    }
  ],
  "location": "CreateAccountTest.iEnterZipCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "000000000",
      "offset": 23
    }
  ],
  "location": "CreateAccountTest.iEnterMobileNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iSeeMyAccountText()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 153582300,
  "status": "passed"
});
formatter.uri("easyjet.feature");
formatter.feature({
  "line": 1,
  "name": "Interact on easy jet website",
  "description": "As a user, I want test different actions on easy jet site",
  "id": "interact-on-easy-jet-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 30281528600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#@smoke @regression"
    }
  ],
  "line": 5,
  "name": "I can interact to elements on homepage",
  "description": "",
  "id": "interact-on-easy-jet-website;i-can-interact-to-elements-on-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on easy jet homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I get all the departure lists",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I get all the arrival lists",
  "keyword": "And "
});
formatter.match({
  "location": "EasyJethomepage_StepDef.iAmOnEasyJetHomepage()"
});
formatter.result({
  "duration": 64400,
  "status": "passed"
});
formatter.match({
  "location": "EasyJethomepage_StepDef.iClickOnCookies()"
});
formatter.result({
  "duration": 162386924300,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [be05d39e4d42836e8a14359f712f08f5, findElement [using, value]]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 129.0.6668.101, chrome: {chromedriverVersion: 129.0.6668.100 (cf58cba358d..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56783}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56783/devtoo..., se:cdpVersion: 129.0.6668.101, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: be05d39e4d42836e8a14359f712f08f5\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:550)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:194)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:190)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:204)\r\n\tat com.automation.pages.EasyJet_HomePage.clickOnCookies(EasyJet_HomePage.java:71)\r\n\tat com.automation.steps.EasyJethomepage_StepDef.iClickOnCookies(EasyJethomepage_StepDef.java:15)\r\n\tat ✽.And I click on cookies(easyjet.feature:7)\r\nCaused by: java.io.UncheckedIOException: java.io.IOException: HTTP/1.1 header parser received no bytes\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute0(JdkHttpClient.java:442)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:55)\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute(JdkHttpClient.java:358)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:194)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:190)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:204)\r\n\tat com.automation.pages.EasyJet_HomePage.clickOnCookies(EasyJet_HomePage.java:71)\r\n\tat com.automation.steps.EasyJethomepage_StepDef.iClickOnCookies(EasyJethomepage_StepDef.java:15)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:198)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.io.IOException: HTTP/1.1 header parser received no bytes\r\n\tat java.net.http/jdk.internal.net.http.common.Utils.wrapWithExtraDetail(Utils.java:326)\r\n\tat java.net.http/jdk.internal.net.http.Http1Response$HeadersReader.onReadError(Http1Response.java:665)\r\n\tat java.net.http/jdk.internal.net.http.Http1AsyncReceiver.checkForErrors(Http1AsyncReceiver.java:297)\r\n\tat java.net.http/jdk.internal.net.http.Http1AsyncReceiver.flush(Http1AsyncReceiver.java:263)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SynchronizedRestartableTask.run(SequentialScheduler.java:175)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$CompleteRestartableTask.run(SequentialScheduler.java:147)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SchedulableTask.run(SequentialScheduler.java:198)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:834)\r\nCaused by: java.io.IOException: An existing connection was forcibly closed by the remote host\r\n\tat java.base/sun.nio.ch.SocketDispatcher.read0(Native Method)\r\n\tat java.base/sun.nio.ch.SocketDispatcher.read(SocketDispatcher.java:43)\r\n\tat java.base/sun.nio.ch.IOUtil.readIntoNativeBuffer(IOUtil.java:276)\r\n\tat java.base/sun.nio.ch.IOUtil.read(IOUtil.java:245)\r\n\tat java.base/sun.nio.ch.IOUtil.read(IOUtil.java:223)\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.read(SocketChannelImpl.java:358)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube.readAvailable(SocketTube.java:1153)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$InternalReadSubscription.read(SocketTube.java:821)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$SocketFlowTask.run(SocketTube.java:175)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SchedulableTask.run(SequentialScheduler.java:198)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler.runOrSchedule(SequentialScheduler.java:271)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler.runOrSchedule(SequentialScheduler.java:224)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$InternalReadSubscription.signalReadable(SocketTube.java:763)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$ReadEvent.signalEvent(SocketTube.java:941)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$SocketFlowEvent.handle(SocketTube.java:245)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.handleEvent(HttpClientImpl.java:957)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.lambda$run$3(HttpClientImpl.java:912)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.run(HttpClientImpl.java:912)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EasyJethomepage_StepDef.iGetAllTheDepartureLists()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EasyJethomepage_StepDef.iGetAllTheArrivalLists()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5825800,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [be05d39e4d42836e8a14359f712f08f5, screenshot []]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 129.0.6668.101, chrome: {chromedriverVersion: 129.0.6668.100 (cf58cba358d..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56783}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56783/devtoo..., se:cdpVersion: 129.0.6668.101, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: be05d39e4d42836e8a14359f712f08f5\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:550)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:596)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:326)\r\n\tat com.automation.utility.Utility.getScreenshot(Utility.java:364)\r\n\tat com.automation.steps.Hooks.tearDown(Hooks.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:198)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.io.UncheckedIOException: java.net.ConnectException: Connection refused: no further information\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute0(JdkHttpClient.java:442)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:55)\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute(JdkHttpClient.java:358)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\t... 63 more\r\nCaused by: java.net.ConnectException: Connection refused: no further information\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.checkConnect(Native Method)\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.finishConnect(SocketChannelImpl.java:779)\r\n\tat java.net.http/jdk.internal.net.http.PlainHttpConnection$ConnectEvent.handle(PlainHttpConnection.java:128)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.handleEvent(HttpClientImpl.java:957)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.lambda$run$3(HttpClientImpl.java:912)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.run(HttpClientImpl.java:912)\r\n",
  "status": "failed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Log In Test",
  "description": "As a user, I want to log in on automation website",
  "id": "log-in-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1421791500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to sign in page successfully",
  "description": "",
  "id": "log-in-test;user-should-navigate-to-sign-in-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I see authentication text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 108093900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 16224198700,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [926e346c9fd030020cedfa9cfbb1d9ec, findElement [using, value]]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 129.0.6668.101, chrome: {chromedriverVersion: 129.0.6668.100 (cf58cba358d..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56917}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56917/devtoo..., se:cdpVersion: 129.0.6668.101, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 926e346c9fd030020cedfa9cfbb1d9ec\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:550)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:60)\r\n\tat com.automation.pages.HomePage.clickOnSignInTabLink(HomePage.java:61)\r\n\tat com.automation.steps.LoginPageTest.iClickOnSignInLink(LoginPageTest.java:22)\r\n\tat ✽.And I click on sign in link(login.feature:7)\r\nCaused by: java.io.UncheckedIOException: java.io.IOException: HTTP/1.1 header parser received no bytes\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute0(JdkHttpClient.java:442)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:55)\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute(JdkHttpClient.java:358)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:60)\r\n\tat com.automation.pages.HomePage.clickOnSignInTabLink(HomePage.java:61)\r\n\tat com.automation.steps.LoginPageTest.iClickOnSignInLink(LoginPageTest.java:22)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:198)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.io.IOException: HTTP/1.1 header parser received no bytes\r\n\tat java.net.http/jdk.internal.net.http.common.Utils.wrapWithExtraDetail(Utils.java:326)\r\n\tat java.net.http/jdk.internal.net.http.Http1Response$HeadersReader.onReadError(Http1Response.java:665)\r\n\tat java.net.http/jdk.internal.net.http.Http1AsyncReceiver.checkForErrors(Http1AsyncReceiver.java:297)\r\n\tat java.net.http/jdk.internal.net.http.Http1AsyncReceiver.flush(Http1AsyncReceiver.java:263)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SynchronizedRestartableTask.run(SequentialScheduler.java:175)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$CompleteRestartableTask.run(SequentialScheduler.java:147)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SchedulableTask.run(SequentialScheduler.java:198)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:834)\r\nCaused by: java.io.IOException: An existing connection was forcibly closed by the remote host\r\n\tat java.base/sun.nio.ch.SocketDispatcher.read0(Native Method)\r\n\tat java.base/sun.nio.ch.SocketDispatcher.read(SocketDispatcher.java:43)\r\n\tat java.base/sun.nio.ch.IOUtil.readIntoNativeBuffer(IOUtil.java:276)\r\n\tat java.base/sun.nio.ch.IOUtil.read(IOUtil.java:245)\r\n\tat java.base/sun.nio.ch.IOUtil.read(IOUtil.java:223)\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.read(SocketChannelImpl.java:358)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube.readAvailable(SocketTube.java:1153)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$InternalReadSubscription.read(SocketTube.java:821)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$SocketFlowTask.run(SocketTube.java:175)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SchedulableTask.run(SequentialScheduler.java:198)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler.runOrSchedule(SequentialScheduler.java:271)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler.runOrSchedule(SequentialScheduler.java:224)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$InternalReadSubscription.signalReadable(SocketTube.java:763)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$ReadEvent.signalEvent(SocketTube.java:941)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$SocketFlowEvent.handle(SocketTube.java:245)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.handleEvent(HttpClientImpl.java:957)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.lambda$run$3(HttpClientImpl.java:912)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.run(HttpClientImpl.java:912)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageTest.iSeeAuthenticationText()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4247500,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [926e346c9fd030020cedfa9cfbb1d9ec, screenshot []]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 129.0.6668.101, chrome: {chromedriverVersion: 129.0.6668.100 (cf58cba358d..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56917}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56917/devtoo..., se:cdpVersion: 129.0.6668.101, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 926e346c9fd030020cedfa9cfbb1d9ec\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:550)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:596)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:326)\r\n\tat com.automation.utility.Utility.getScreenshot(Utility.java:364)\r\n\tat com.automation.steps.Hooks.tearDown(Hooks.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:198)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.io.UncheckedIOException: java.net.ConnectException: Connection refused: no further information\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute0(JdkHttpClient.java:442)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:55)\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute(JdkHttpClient.java:358)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\t... 63 more\r\nCaused by: java.net.ConnectException: Connection refused: no further information\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.checkConnect(Native Method)\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.finishConnect(SocketChannelImpl.java:779)\r\n\tat java.net.http/jdk.internal.net.http.PlainHttpConnection$ConnectEvent.handle(PlainHttpConnection.java:128)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.handleEvent(HttpClientImpl.java:957)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.lambda$run$3(HttpClientImpl.java:912)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.run(HttpClientImpl.java:912)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify error messages with invalid credentials",
  "description": "",
  "id": "log-in-test;verify-error-messages-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "log-in-test;verify-error-messages-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 20,
      "id": "log-in-test;verify-error-messages-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 21,
      "id": "log-in-test;verify-error-messages-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 22,
      "id": "log-in-test;verify-error-messages-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 23,
      "id": "log-in-test;verify-error-messages-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 24,
      "id": "log-in-test;verify-error-messages-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1405648900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify error messages with invalid credentials",
  "description": "",
  "id": "log-in-test;verify-error-messages-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 130583300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 20030110500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"partial link text\",\"selector\":\"Sign\"}\n  (Session info: chrome\u003d129.0.6668.101)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5efa620f25b2b3ea5e864ce1688b2141, findElement {using\u003dpartial link text, value\u003dSign}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 129.0.6668.101, chrome: {chromedriverVersion: 129.0.6668.100 (cf58cba358d..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56946}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56946/devtoo..., se:cdpVersion: 129.0.6668.101, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 5efa620f25b2b3ea5e864ce1688b2141\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:60)\r\n\tat com.automation.pages.HomePage.clickOnSignInTabLink(HomePage.java:61)\r\n\tat com.automation.steps.LoginPageTest.iClickOnSignInLink(LoginPageTest.java:22)\r\n\tat ✽.And I click on sign in link(login.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 28
    }
  ],
  "location": "LoginPageTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 194130700,
  "status": "passed"
});
formatter.before({
  "duration": 2425804500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify error messages with invalid credentials",
  "description": "",
  "id": "log-in-test;verify-error-messages-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 433173800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4098721200,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d71df6c5136199e11805080aeaa7dd4c, findElement [using, value]]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 129.0.6668.101, chrome: {chromedriverVersion: 129.0.6668.100 (cf58cba358d..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56988}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56988/devtoo..., se:cdpVersion: 129.0.6668.101, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d71df6c5136199e11805080aeaa7dd4c\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:550)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:60)\r\n\tat com.automation.pages.HomePage.clickOnSignInTabLink(HomePage.java:61)\r\n\tat com.automation.steps.LoginPageTest.iClickOnSignInLink(LoginPageTest.java:22)\r\n\tat ✽.And I click on sign in link(login.feature:13)\r\nCaused by: java.io.UncheckedIOException: java.io.IOException: HTTP/1.1 header parser received no bytes\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute0(JdkHttpClient.java:442)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:55)\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute(JdkHttpClient.java:358)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:60)\r\n\tat com.automation.pages.HomePage.clickOnSignInTabLink(HomePage.java:61)\r\n\tat com.automation.steps.LoginPageTest.iClickOnSignInLink(LoginPageTest.java:22)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:198)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.io.IOException: HTTP/1.1 header parser received no bytes\r\n\tat java.net.http/jdk.internal.net.http.common.Utils.wrapWithExtraDetail(Utils.java:326)\r\n\tat java.net.http/jdk.internal.net.http.Http1Response$HeadersReader.onReadError(Http1Response.java:665)\r\n\tat java.net.http/jdk.internal.net.http.Http1AsyncReceiver.checkForErrors(Http1AsyncReceiver.java:297)\r\n\tat java.net.http/jdk.internal.net.http.Http1AsyncReceiver.flush(Http1AsyncReceiver.java:263)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SynchronizedRestartableTask.run(SequentialScheduler.java:175)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$CompleteRestartableTask.run(SequentialScheduler.java:147)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SchedulableTask.run(SequentialScheduler.java:198)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:834)\r\nCaused by: java.io.IOException: An existing connection was forcibly closed by the remote host\r\n\tat java.base/sun.nio.ch.SocketDispatcher.read0(Native Method)\r\n\tat java.base/sun.nio.ch.SocketDispatcher.read(SocketDispatcher.java:43)\r\n\tat java.base/sun.nio.ch.IOUtil.readIntoNativeBuffer(IOUtil.java:276)\r\n\tat java.base/sun.nio.ch.IOUtil.read(IOUtil.java:245)\r\n\tat java.base/sun.nio.ch.IOUtil.read(IOUtil.java:223)\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.read(SocketChannelImpl.java:358)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube.readAvailable(SocketTube.java:1153)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$InternalReadSubscription.read(SocketTube.java:821)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$SocketFlowTask.run(SocketTube.java:175)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SchedulableTask.run(SequentialScheduler.java:198)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler.runOrSchedule(SequentialScheduler.java:271)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler.runOrSchedule(SequentialScheduler.java:224)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$InternalReadSubscription.signalReadable(SocketTube.java:763)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$ReadEvent.signalEvent(SocketTube.java:941)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$SocketFlowEvent.handle(SocketTube.java:245)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.handleEvent(HttpClientImpl.java:957)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.lambda$run$3(HttpClientImpl.java:912)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.run(HttpClientImpl.java:912)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 28
    }
  ],
  "location": "LoginPageTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4561300,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d71df6c5136199e11805080aeaa7dd4c, screenshot []]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 129.0.6668.101, chrome: {chromedriverVersion: 129.0.6668.100 (cf58cba358d..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56988}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56988/devtoo..., se:cdpVersion: 129.0.6668.101, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d71df6c5136199e11805080aeaa7dd4c\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:550)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:596)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:326)\r\n\tat com.automation.utility.Utility.getScreenshot(Utility.java:364)\r\n\tat com.automation.steps.Hooks.tearDown(Hooks.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:198)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.io.UncheckedIOException: java.net.ConnectException: Connection refused: no further information\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute0(JdkHttpClient.java:442)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:55)\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute(JdkHttpClient.java:358)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\t... 81 more\r\nCaused by: java.net.ConnectException: Connection refused: no further information\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.checkConnect(Native Method)\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.finishConnect(SocketChannelImpl.java:779)\r\n\tat java.net.http/jdk.internal.net.http.PlainHttpConnection$ConnectEvent.handle(PlainHttpConnection.java:128)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.handleEvent(HttpClientImpl.java:957)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.lambda$run$3(HttpClientImpl.java:912)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.run(HttpClientImpl.java:912)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 1782544000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify error messages with invalid credentials",
  "description": "",
  "id": "log-in-test;verify-error-messages-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 215851600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2876754900,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e89890f4e68b4124a95316959080d3b8, findElement [using, value]]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 129.0.6668.101, chrome: {chromedriverVersion: 129.0.6668.100 (cf58cba358d..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57019}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57019/devtoo..., se:cdpVersion: 129.0.6668.101, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e89890f4e68b4124a95316959080d3b8\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:550)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:60)\r\n\tat com.automation.pages.HomePage.clickOnSignInTabLink(HomePage.java:61)\r\n\tat com.automation.steps.LoginPageTest.iClickOnSignInLink(LoginPageTest.java:22)\r\n\tat ✽.And I click on sign in link(login.feature:13)\r\nCaused by: java.io.UncheckedIOException: java.io.IOException: HTTP/1.1 header parser received no bytes\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute0(JdkHttpClient.java:442)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:55)\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute(JdkHttpClient.java:358)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:60)\r\n\tat com.automation.pages.HomePage.clickOnSignInTabLink(HomePage.java:61)\r\n\tat com.automation.steps.LoginPageTest.iClickOnSignInLink(LoginPageTest.java:22)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:198)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.io.IOException: HTTP/1.1 header parser received no bytes\r\n\tat java.net.http/jdk.internal.net.http.common.Utils.wrapWithExtraDetail(Utils.java:326)\r\n\tat java.net.http/jdk.internal.net.http.Http1Response$HeadersReader.onReadError(Http1Response.java:665)\r\n\tat java.net.http/jdk.internal.net.http.Http1AsyncReceiver.checkForErrors(Http1AsyncReceiver.java:297)\r\n\tat java.net.http/jdk.internal.net.http.Http1AsyncReceiver.flush(Http1AsyncReceiver.java:263)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SynchronizedRestartableTask.run(SequentialScheduler.java:175)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$CompleteRestartableTask.run(SequentialScheduler.java:147)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SchedulableTask.run(SequentialScheduler.java:198)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:834)\r\nCaused by: java.io.IOException: An existing connection was forcibly closed by the remote host\r\n\tat java.base/sun.nio.ch.SocketDispatcher.read0(Native Method)\r\n\tat java.base/sun.nio.ch.SocketDispatcher.read(SocketDispatcher.java:43)\r\n\tat java.base/sun.nio.ch.IOUtil.readIntoNativeBuffer(IOUtil.java:276)\r\n\tat java.base/sun.nio.ch.IOUtil.read(IOUtil.java:245)\r\n\tat java.base/sun.nio.ch.IOUtil.read(IOUtil.java:223)\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.read(SocketChannelImpl.java:358)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube.readAvailable(SocketTube.java:1153)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$InternalReadSubscription.read(SocketTube.java:821)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$SocketFlowTask.run(SocketTube.java:175)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SchedulableTask.run(SequentialScheduler.java:198)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler.runOrSchedule(SequentialScheduler.java:271)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler.runOrSchedule(SequentialScheduler.java:224)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$InternalReadSubscription.signalReadable(SocketTube.java:763)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$ReadEvent.signalEvent(SocketTube.java:941)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$SocketFlowEvent.handle(SocketTube.java:245)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.handleEvent(HttpClientImpl.java:957)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.lambda$run$3(HttpClientImpl.java:912)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.run(HttpClientImpl.java:912)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 28
    }
  ],
  "location": "LoginPageTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3212300,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e89890f4e68b4124a95316959080d3b8, screenshot []]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 129.0.6668.101, chrome: {chromedriverVersion: 129.0.6668.100 (cf58cba358d..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57019}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57019/devtoo..., se:cdpVersion: 129.0.6668.101, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e89890f4e68b4124a95316959080d3b8\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:550)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:596)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:326)\r\n\tat com.automation.utility.Utility.getScreenshot(Utility.java:364)\r\n\tat com.automation.steps.Hooks.tearDown(Hooks.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:198)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.io.UncheckedIOException: java.net.ConnectException: Connection refused: no further information\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute0(JdkHttpClient.java:442)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:55)\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute(JdkHttpClient.java:358)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\t... 81 more\r\nCaused by: java.net.ConnectException: Connection refused: no further information\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.checkConnect(Native Method)\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.finishConnect(SocketChannelImpl.java:779)\r\n\tat java.net.http/jdk.internal.net.http.PlainHttpConnection$ConnectEvent.handle(PlainHttpConnection.java:128)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.handleEvent(HttpClientImpl.java:957)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.lambda$run$3(HttpClientImpl.java:912)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.run(HttpClientImpl.java:912)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 1647589400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify error messages with invalid credentials",
  "description": "",
  "id": "log-in-test;verify-error-messages-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 201044800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 20078970400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"partial link text\",\"selector\":\"Sign\"}\n  (Session info: chrome\u003d129.0.6668.101)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4f52a31da2fc40288c91db57b78b39d0, findElement {using\u003dpartial link text, value\u003dSign}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 129.0.6668.101, chrome: {chromedriverVersion: 129.0.6668.100 (cf58cba358d..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57042}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57042/devtoo..., se:cdpVersion: 129.0.6668.101, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4f52a31da2fc40288c91db57b78b39d0\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:60)\r\n\tat com.automation.pages.HomePage.clickOnSignInTabLink(HomePage.java:61)\r\n\tat com.automation.steps.LoginPageTest.iClickOnSignInLink(LoginPageTest.java:22)\r\n\tat ✽.And I click on sign in link(login.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 28
    }
  ],
  "location": "LoginPageTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 185291200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "User should log in successfully with valid credentials",
  "description": "",
  "id": "log-in-test;user-should-log-in-successfully-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see sign out link is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "log-in-test;user-should-log-in-successfully-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 35,
      "id": "log-in-test;user-should-log-in-successfully-with-valid-credentials;;1"
    },
    {
      "cells": [
        "abcxyz01@yahoo.com",
        "primetest"
      ],
      "line": 36,
      "id": "log-in-test;user-should-log-in-successfully-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1415194900,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User should log in successfully with valid credentials",
  "description": "",
  "id": "log-in-test;user-should-log-in-successfully-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter username \"abcxyz01@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"primetest\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see sign out link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 117462400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 3988746300,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d3ad1e34783d16f0a83caa2839f9b80e, findElement [using, value]]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 129.0.6668.101, chrome: {chromedriverVersion: 129.0.6668.100 (cf58cba358d..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57063}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57063/devtoo..., se:cdpVersion: 129.0.6668.101, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d3ad1e34783d16f0a83caa2839f9b80e\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:550)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:60)\r\n\tat com.automation.pages.HomePage.clickOnSignInTabLink(HomePage.java:61)\r\n\tat com.automation.steps.LoginPageTest.iClickOnSignInLink(LoginPageTest.java:22)\r\n\tat ✽.And I click on sign in link(login.feature:29)\r\nCaused by: java.io.UncheckedIOException: java.io.IOException: HTTP/1.1 header parser received no bytes\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute0(JdkHttpClient.java:442)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:55)\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute(JdkHttpClient.java:358)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:60)\r\n\tat com.automation.pages.HomePage.clickOnSignInTabLink(HomePage.java:61)\r\n\tat com.automation.steps.LoginPageTest.iClickOnSignInLink(LoginPageTest.java:22)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:198)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.io.IOException: HTTP/1.1 header parser received no bytes\r\n\tat java.net.http/jdk.internal.net.http.common.Utils.wrapWithExtraDetail(Utils.java:326)\r\n\tat java.net.http/jdk.internal.net.http.Http1Response$HeadersReader.onReadError(Http1Response.java:665)\r\n\tat java.net.http/jdk.internal.net.http.Http1AsyncReceiver.checkForErrors(Http1AsyncReceiver.java:297)\r\n\tat java.net.http/jdk.internal.net.http.Http1AsyncReceiver.flush(Http1AsyncReceiver.java:263)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SynchronizedRestartableTask.run(SequentialScheduler.java:175)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$CompleteRestartableTask.run(SequentialScheduler.java:147)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SchedulableTask.run(SequentialScheduler.java:198)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:834)\r\nCaused by: java.io.IOException: An existing connection was forcibly closed by the remote host\r\n\tat java.base/sun.nio.ch.SocketDispatcher.read0(Native Method)\r\n\tat java.base/sun.nio.ch.SocketDispatcher.read(SocketDispatcher.java:43)\r\n\tat java.base/sun.nio.ch.IOUtil.readIntoNativeBuffer(IOUtil.java:276)\r\n\tat java.base/sun.nio.ch.IOUtil.read(IOUtil.java:245)\r\n\tat java.base/sun.nio.ch.IOUtil.read(IOUtil.java:223)\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.read(SocketChannelImpl.java:358)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube.readAvailable(SocketTube.java:1153)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$InternalReadSubscription.read(SocketTube.java:821)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$SocketFlowTask.run(SocketTube.java:175)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SchedulableTask.run(SequentialScheduler.java:198)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler.runOrSchedule(SequentialScheduler.java:271)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler.runOrSchedule(SequentialScheduler.java:224)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$InternalReadSubscription.signalReadable(SocketTube.java:763)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$ReadEvent.signalEvent(SocketTube.java:941)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$SocketFlowEvent.handle(SocketTube.java:245)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.handleEvent(HttpClientImpl.java:957)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.lambda$run$3(HttpClientImpl.java:912)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.run(HttpClientImpl.java:912)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcxyz01@yahoo.com",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "primetest",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageTest.iShouldSeeSignOutLinkIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3981000,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d3ad1e34783d16f0a83caa2839f9b80e, screenshot []]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 129.0.6668.101, chrome: {chromedriverVersion: 129.0.6668.100 (cf58cba358d..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57063}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57063/devtoo..., se:cdpVersion: 129.0.6668.101, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d3ad1e34783d16f0a83caa2839f9b80e\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:550)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:596)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:326)\r\n\tat com.automation.utility.Utility.getScreenshot(Utility.java:364)\r\n\tat com.automation.steps.Hooks.tearDown(Hooks.java:24)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor25.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:198)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.io.UncheckedIOException: java.net.ConnectException: Connection refused: no further information\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute0(JdkHttpClient.java:442)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:55)\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute(JdkHttpClient.java:358)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\t... 80 more\r\nCaused by: java.net.ConnectException: Connection refused: no further information\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.checkConnect(Native Method)\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.finishConnect(SocketChannelImpl.java:779)\r\n\tat java.net.http/jdk.internal.net.http.PlainHttpConnection$ConnectEvent.handle(PlainHttpConnection.java:128)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.handleEvent(HttpClientImpl.java:957)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.lambda$run$3(HttpClientImpl.java:912)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.run(HttpClientImpl.java:912)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 1582356200,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "User should log out successfully",
  "description": "",
  "id": "log-in-test;user-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter username \"abc0010@yahoo.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on sign out link",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I should see sign in link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 198183800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 19268780000,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3ec579c414796275503d0e9a36b8474f, findElement [using, value]]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 129.0.6668.101, chrome: {chromedriverVersion: 129.0.6668.100 (cf58cba358d..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57087}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57087/devtoo..., se:cdpVersion: 129.0.6668.101, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 3ec579c414796275503d0e9a36b8474f\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:550)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:60)\r\n\tat com.automation.pages.HomePage.clickOnSignInTabLink(HomePage.java:61)\r\n\tat com.automation.steps.LoginPageTest.iClickOnSignInLink(LoginPageTest.java:22)\r\n\tat ✽.And I click on sign in link(login.feature:41)\r\nCaused by: java.io.UncheckedIOException: java.io.IOException: HTTP/1.1 header parser received no bytes\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute0(JdkHttpClient.java:442)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:55)\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute(JdkHttpClient.java:358)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:60)\r\n\tat com.automation.pages.HomePage.clickOnSignInTabLink(HomePage.java:61)\r\n\tat com.automation.steps.LoginPageTest.iClickOnSignInLink(LoginPageTest.java:22)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:198)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.io.IOException: HTTP/1.1 header parser received no bytes\r\n\tat java.net.http/jdk.internal.net.http.common.Utils.wrapWithExtraDetail(Utils.java:326)\r\n\tat java.net.http/jdk.internal.net.http.Http1Response$HeadersReader.onReadError(Http1Response.java:665)\r\n\tat java.net.http/jdk.internal.net.http.Http1AsyncReceiver.checkForErrors(Http1AsyncReceiver.java:297)\r\n\tat java.net.http/jdk.internal.net.http.Http1AsyncReceiver.flush(Http1AsyncReceiver.java:263)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SynchronizedRestartableTask.run(SequentialScheduler.java:175)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$CompleteRestartableTask.run(SequentialScheduler.java:147)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SchedulableTask.run(SequentialScheduler.java:198)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:834)\r\nCaused by: java.io.IOException: An existing connection was forcibly closed by the remote host\r\n\tat java.base/sun.nio.ch.SocketDispatcher.read0(Native Method)\r\n\tat java.base/sun.nio.ch.SocketDispatcher.read(SocketDispatcher.java:43)\r\n\tat java.base/sun.nio.ch.IOUtil.readIntoNativeBuffer(IOUtil.java:276)\r\n\tat java.base/sun.nio.ch.IOUtil.read(IOUtil.java:245)\r\n\tat java.base/sun.nio.ch.IOUtil.read(IOUtil.java:223)\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.read(SocketChannelImpl.java:358)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube.readAvailable(SocketTube.java:1153)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$InternalReadSubscription.read(SocketTube.java:821)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$SocketFlowTask.run(SocketTube.java:175)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler$SchedulableTask.run(SequentialScheduler.java:198)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler.runOrSchedule(SequentialScheduler.java:271)\r\n\tat java.net.http/jdk.internal.net.http.common.SequentialScheduler.runOrSchedule(SequentialScheduler.java:224)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$InternalReadSubscription.signalReadable(SocketTube.java:763)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$InternalReadPublisher$ReadEvent.signalEvent(SocketTube.java:941)\r\n\tat java.net.http/jdk.internal.net.http.SocketTube$SocketFlowEvent.handle(SocketTube.java:245)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.handleEvent(HttpClientImpl.java:957)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.lambda$run$3(HttpClientImpl.java:912)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.run(HttpClientImpl.java:912)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc0010@yahoo.com",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignOutLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageTest.iShouldSeeSignInLinkIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2651800,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3ec579c414796275503d0e9a36b8474f, screenshot []]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 129.0.6668.101, chrome: {chromedriverVersion: 129.0.6668.100 (cf58cba358d..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57087}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57087/devtoo..., se:cdpVersion: 129.0.6668.101, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 3ec579c414796275503d0e9a36b8474f\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:550)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:596)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:326)\r\n\tat com.automation.utility.Utility.getScreenshot(Utility.java:364)\r\n\tat com.automation.steps.Hooks.tearDown(Hooks.java:24)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor25.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:198)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.io.UncheckedIOException: java.net.ConnectException: Connection refused: no further information\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute0(JdkHttpClient.java:442)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:55)\r\n\tat org.openqa.selenium.remote.http.jdk.JdkHttpClient.execute(JdkHttpClient.java:358)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\t... 62 more\r\nCaused by: java.net.ConnectException: Connection refused: no further information\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.checkConnect(Native Method)\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.finishConnect(SocketChannelImpl.java:779)\r\n\tat java.net.http/jdk.internal.net.http.PlainHttpConnection$ConnectEvent.handle(PlainHttpConnection.java:128)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.handleEvent(HttpClientImpl.java:957)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.lambda$run$3(HttpClientImpl.java:912)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat java.net.http/jdk.internal.net.http.HttpClientImpl$SelectorManager.run(HttpClientImpl.java:912)\r\n",
  "status": "failed"
});
});