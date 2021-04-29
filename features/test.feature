Feature: Tests

Background:
Given the user is on the test page

Scenario: Add a user and validate the user has been added to the table
When the user adds a new user NewUser to the table
Then the user NewUser is displayed on the table 

Scenario: Delete user User Name: novak and validate user has been deleted
When the user deletes the user with the username novak
Then the user novak is not displayed on the table
