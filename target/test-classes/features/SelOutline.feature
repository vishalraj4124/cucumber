@tag
Feature: Sel Outline
  I want to use this template for my feature file

  @tag2
  Scenario Outline: Generate the three set of customer id
    Given user should launch browser
    And user click add customer link
    When user will provide vaild detailsout"<fname>","<lname>","<email>","<address>","<phone>"
    Then to verified the customer id is displayed

    Examples: 
      | fname  | lname    | email              | address | phone      |
      | vishal | raj      | raj@gmail.com      | chennai | 8795231469 |
      | ram    | kumar    | kumar@gail.com     | madurai | 9858741239 |
      | gopi   | krishnan | krishnan@gmail.com | chennai | 9632587418 |
