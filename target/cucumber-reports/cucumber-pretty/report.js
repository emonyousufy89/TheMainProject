$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Feature",
  "description": "As a QE I want to test Login Feature of USPS",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Successful login with valid username and password",
  "description": "",
  "id": "login-feature;successful-login-with-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "customer is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Customer clicks SignIn link on the top of homepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Customer enters \"\u003cusername\u003e\" and Customer enters \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Custoemr clicks sign in",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Homepage should be shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-feature;successful-login-with-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "login-feature;successful-login-with-valid-username-and-password;;1"
    },
    {
      "cells": [
        "MahbubaNimme2020",
        "Corona2020"
      ],
      "line": 14,
      "id": "login-feature;successful-login-with-valid-username-and-password;;2"
    },
    {
      "cells": [
        "QA2020",
        "Corona2020"
      ],
      "line": 15,
      "id": "login-feature;successful-login-with-valid-username-and-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4595343551,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Successful login with valid username and password",
  "description": "",
  "id": "login-feature;successful-login-with-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "customer is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Customer clicks SignIn link on the top of homepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Customer enters \"MahbubaNimme2020\" and Customer enters \"Corona2020\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Custoemr clicks sign in",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Homepage should be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.customer_is_on_Homepage()"
});
formatter.result({
  "duration": 281370673,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.customer_clicks_Register_SignIn_link_on_the_top_of_homepage()"
});
formatter.result({
  "duration": 1090635341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MahbubaNimme2020",
      "offset": 17
    },
    {
      "val": "Corona2020",
      "offset": 56
    }
  ],
  "location": "LoginStepDefination.customer_enters_and_Customer_enters(String,String)"
});
formatter.result({
  "duration": 1308888943,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.custoemr_clicks_sign_in()"
});
formatter.result({
  "duration": 714954958,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.homepage_should_be_shown()"
});
formatter.result({
  "duration": 70728,
  "status": "passed"
});
formatter.after({
  "duration": 242350628,
  "status": "passed"
});
formatter.before({
  "duration": 3021677231,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Successful login with valid username and password",
  "description": "",
  "id": "login-feature;successful-login-with-valid-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "customer is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Customer clicks SignIn link on the top of homepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Customer enters \"QA2020\" and Customer enters \"Corona2020\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Custoemr clicks sign in",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Homepage should be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.customer_is_on_Homepage()"
});
formatter.result({
  "duration": 84608155,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.customer_clicks_Register_SignIn_link_on_the_top_of_homepage()"
});
formatter.result({
  "duration": 1109660094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA2020",
      "offset": 17
    },
    {
      "val": "Corona2020",
      "offset": 46
    }
  ],
  "location": "LoginStepDefination.customer_enters_and_Customer_enters(String,String)"
});
formatter.result({
  "duration": 899147310,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.custoemr_clicks_sign_in()"
});
formatter.result({
  "duration": 773162921,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.homepage_should_be_shown()"
});
formatter.result({
  "duration": 49335,
  "status": "passed"
});
formatter.after({
  "duration": 258651503,
  "status": "passed"
});
});