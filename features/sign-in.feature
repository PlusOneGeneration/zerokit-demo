Feature: SignIn

  Background:
    Given I open home page

  Scenario: I sign in user
    When I see sign in page
    Then I type email "rokki"
    Then I type password "1"
    Then I click button "Sign in"