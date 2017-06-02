Feature: SignOut

  Background:
    Given I open fresh project
    Given I open home page

    Given I see sign in page
    Then I type email "rokki@example.com"
    Then I type password "test"
    Then I click button "Sign in"
    Given I see main app page

  Scenario: User logout
    When I see login as "rokki@example.com"
    Then I click button "Sign Out"
    Given I see sign in page
