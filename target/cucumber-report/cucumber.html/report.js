$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("automationtesting.feature");
formatter.feature({
  "line": 1,
  "name": "Automationtesting.co.uk site test",
  "description": "As a user, I want test different actions on automation testing webpage",
  "id": "automationtesting.co.uk-site-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3841319400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User can submit contact us form",
  "description": "",
  "id": "automationtesting.co.uk-site-test;user-can-submit-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
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
  "duration": 225647400,
  "status": "passed"
});
formatter.match({
  "location": "AutomationTestingHomePage_StepDef.iClickOnContactUsFormTest()"
});
formatter.result({
  "duration": 132003800,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsFormWithJavaScriptExecutorAutomationTesting_StepDef.iFillAllDetailsAndClickOnSubmitButton()"
});
formatter.result({
  "duration": 932361000,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsFormWithJavaScriptExecutorAutomationTesting_StepDef.formShouldBeSubmittedSuccessfully()"
});
formatter.result({
  "duration": 22300,
  "status": "passed"
});
formatter.after({
  "duration": 92600,
  "status": "passed"
});
formatter.before({
  "duration": 1323126100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User can select option from drop down menu",
  "description": "",
  "id": "automationtesting.co.uk-site-test;user-can-select-option-from-drop-down-menu",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    }
  ]
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
  "duration": 137860100,
  "status": "passed"
});
formatter.match({
  "location": "DropDownMenuAutomationTesting_StepDef.iClickOnDropdownCheckboxRadioLink()"
});
formatter.result({
  "duration": 128391200,
  "status": "passed"
});
formatter.match({
  "location": "DropDownMenuAutomationTesting_StepDef.iSelectOptionFromDropDownMenu()"
});
formatter.result({
  "duration": 792263600,
  "status": "passed"
});
formatter.after({
  "duration": 25800,
  "status": "passed"
});
formatter.before({
  "duration": 1486869500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "I want to verify title of the webpage",
  "description": "",
  "id": "automationtesting.co.uk-site-test;i-want-to-verify-title-of-the-webpage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    }
  ]
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
  "duration": 129345400,
  "status": "passed"
});
formatter.match({
  "location": "AutomationTestingHomePage_StepDef.iVerifyTitleOfTheWebpage()"
});
formatter.result({
  "duration": 17432600,
  "status": "passed"
});
formatter.after({
  "duration": 25400,
  "status": "passed"
});
formatter.before({
  "duration": 1492087200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "I can verify total",
  "description": "",
  "id": "automationtesting.co.uk-site-test;i-can-verify-total",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
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
  "name": "I select shirt size \"M\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I can verify total is correct",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 150088200,
  "status": "passed"
});
formatter.match({
  "location": "TestStoreAutomationTesting_StepDef.iClickOnTestStore()"
});
formatter.result({
  "duration": 2105350500,
  "status": "passed"
});
formatter.match({
  "location": "TestStoreAutomationTesting_StepDef.iAddHummingbirdPrintedTShirtToCart()"
});
formatter.result({
  "duration": 3099397400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 21
    }
  ],
  "location": "TestStoreAutomationTesting_StepDef.iSelectShirtSize(String)"
});
formatter.result({
  "duration": 2283414700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "TestStoreAutomationTesting_StepDef.iEnterQuantity(String)"
});
formatter.result({
  "duration": 541620300,
  "status": "passed"
});
formatter.match({
  "location": "TestStoreAutomationTesting_StepDef.iCanVerifyTotalIsCorrect()"
});
formatter.result({
  "duration": 22123617000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[@class\u003d\u0027product-total\u0027]//span[@class\u003d\u0027value\u0027]\"}\n  (Session info: chrome\u003d130.0.6723.59)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6e757c99d77b1f87ccbb1aa91e5f195c, findElement {using\u003dxpath, value\u003d//p[@class\u003d\u0027product-total\u0027]//span[@class\u003d\u0027value\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 130.0.6723.59, chrome: {chromedriverVersion: 130.0.6723.69 (3ec172b971b9..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63771}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63771/devtoo..., se:cdpVersion: 130.0.6723.59, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 6e757c99d77b1f87ccbb1aa91e5f195c\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.automation.pages.TestStorePage_automationtesting.verifyTotal(TestStorePage_automationtesting.java:55)\r\n\tat com.automation.steps.TestStoreAutomationTesting_StepDef.iCanVerifyTotalIsCorrect(TestStoreAutomationTesting_StepDef.java:25)\r\n\tat ✽.And I can verify total is correct(automationtesting.feature:31)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 173581300,
  "status": "passed"
});
formatter.before({
  "duration": 1435755600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify i can interact on popup windows",
  "description": "",
  "id": "automationtesting.co.uk-site-test;verify-i-can-interact-on-popup-windows",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I click on popup and alerts link",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on TRIGGER POP UP button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "New window will open",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I interact to elements on new opened popup window",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 120046500,
  "status": "passed"
});
formatter.match({
  "location": "PopUpAndAlerts_StepDef.iClickOnPopupAndAlertsLink()"
});
formatter.result({
  "duration": 1121722400,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (-125, 518)\n  (Session info: chrome\u003d130.0.6723.59)\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d481df60778c04c9cdace70ee4c27069, clickElement {id\u003df.FA08B29F6B800626312F10FE23EE5710.d.50FCD9B24441052332E37C3391F1DB38.e.8}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 130.0.6723.59, chrome: {chromedriverVersion: 130.0.6723.69 (3ec172b971b9..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63800}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63800/devtoo..., se:cdpVersion: 130.0.6723.59, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on windows (d481df60778c04c9cdace70ee4c27069)] -\u003e link text: POP UPS \u0026 ALERTS]\nSession ID: d481df60778c04c9cdace70ee4c27069\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:224)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.pages.PopUpAndAlerts_automationtesting.clickPopupAlertLink(PopUpAndAlerts_automationtesting.java:31)\r\n\tat com.automation.steps.PopUpAndAlerts_StepDef.iClickOnPopupAndAlertsLink(PopUpAndAlerts_StepDef.java:10)\r\n\tat ✽.And I click on popup and alerts link(automationtesting.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PopUpAndAlerts_StepDef.iClickOnTRIGGERPOPUPButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PopUpAndAlerts_StepDef.newWindowWillOpen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PopUpAndAlerts_StepDef.iInteractToElementsOnNewOpenedPopupWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 139743600,
  "status": "passed"
});
formatter.before({
  "duration": 1375559600,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "I want to verify values from table",
  "description": "",
  "id": "automationtesting.co.uk-site-test;i-want-to-verify-values-from-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I click on tables link from menu",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I verify values from tables",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 165049300,
  "status": "passed"
});
formatter.match({
  "location": "AutomationTestingTablePage_StepDef.iClickOnTablesLinkFromMenu()"
});
formatter.result({
  "duration": 116593400,
  "status": "passed"
});
formatter.match({
  "location": "AutomationTestingTablePage_StepDef.iVerifyValuesFromTables()"
});
formatter.result({
  "duration": 1327868100,
  "status": "passed"
});
formatter.after({
  "duration": 16600,
  "status": "passed"
});
});