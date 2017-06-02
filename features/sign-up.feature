Feature: SignUp

  Background:
    Given I open fresh project
    Given I open home page

  Scenario: I register user
    Given I see sign in page
    Then I click button "Sign Up"
    Given I see sign up page
    Then I type email "loki@example.com"
    Then I type and confirm password "test"
    Then I click button "Sign Up"

    Given I see sign in page
    Then I type email "loki@example.com"
    Then I type password "test"
    Then I click button "Sign in"

#  Scenario: I register already exist user
