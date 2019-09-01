@tag
Feature: Two D map
  I want to use this template for my feature file

  @tag2
  Scenario: Title of your scenario
    Given user should launch browser
    And user click add customer linkopen
    When user will provide vaild detailtwodmap
      | rental | minutes | international | smspack | localperminutes | internationalminutes | smsper |
      |   1000 |    1001 |          1002 |    1003 |            1004 |                 1005 |   1006 |
      |   2000 |    2001 |          2002 |    2003 |            2004 |                 2005 |   2006 |
      |   3000 |    3001 |          3002 |    3003 |            3004 |                 3005 |   3006 |
    Then to verified the customer id is displayedss
