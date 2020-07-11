
Feature: Login Feature
  As a QE I want to test Login Feature of USPS

  Scenario Outline: Successful login with valid username and password
    Given customer is on Homepage
    When Customer clicks SignIn link on the top of homepage
    And Customer enters "<username>" and Customer enters "<password>"
    And Custoemr clicks sign in
    Then Homepage should be shown

    Examples: 
      | username         | password    |
      | MahbubaNimme2020 | Corona2020  |
      | QA2020           | Corona2020 |
