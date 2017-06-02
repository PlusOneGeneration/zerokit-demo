Feature: Messenger

  Background:
    Given "rokki" browser
    Given I open fresh project
    Given I open home page

    Given I see sign in page
    Then I type email "rokki@example.com"
    Then I type password "test"
    Then I click button "Sign in"
    Given I see main app page

  Scenario: Select User
    Given User list with "jack@example.com"
    When I select "jack@example.com" for chat
    Given User "jack@example.com" selected
    Then I see input for chat


  Scenario: Create message
    Given User list with "jack@example.com"
    When I select "jack@example.com" for chat
    Given User "jack@example.com" selected
    Then I see input for chat
    Then I write message "My first message"
    Then I click button "Send"
    Given My message "My first message" in chat

  @wip
  Scenario: Read message from other user
    Given User list with "jack@example.com"
    When I select "jack@example.com" for chat
    Given User "jack@example.com" selected
    Then I see input for chat
    Then I write message "My first message"
    Then I click button "Send"
    Given My message "My first message" in chat

    Given "jack" browser
    Given I open home page

    Given I see sign in page
    Then I type email "jack@example.com"
    Then I type password "test"
    Then I click button "Sign in"
    Given I see main app page

    Given User list with "rokki@example.com"
    When I select "rokki@example.com" for chat
    Given User "rokki@example.com" selected

    Then I see message "My first message"

    

