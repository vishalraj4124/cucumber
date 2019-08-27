@tag
Feature: Title of your feature
  I want to use this template for my feature file

  @tag1
  Scenario: Title of your scenario
    Given user should launch browser
    And user click add customer link
    When user will provide vaild details
      | fname   | raj           |
      | lname   | kumar         |
      | email   | raj@gmail.com |
      | address | chennai       |
      | phone   |    9874561238 |
    Then to verified the customer id is displayed
