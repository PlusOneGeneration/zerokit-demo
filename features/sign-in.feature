Feature: SignIn

  Background:
    Given I open fresh project
    Given I open home page

  Scenario: I login user
    When I see sign in page
    Then I type email "rokki@example.com"
    Then I type password "test"
    Then I click button "Sign in"

#    Scenario: I login not exist user