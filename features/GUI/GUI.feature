Feature: SDET Test Automation

    @GUI

    @mapPrice
    Scenario Outline: Validate the Mpas and Price updated as per hour Filter
        Given I am on the market page
        When I the store the map price
        Then I select the hours <filter1> and compare the map price is updated

        Examples:
            | filter1 |
            | 05      |
            | 09      |

    @mapPrice
    Scenario: Scenario Outline name: Validate the Map changes with Price while selecting the different Filters
        Given I am on the market page
        When I set the base map reference
        When I select the continuous from the filter and validate the map changes
        And I select auction capacity from the filter and validate the map changes
        And I select Guarantees of Origin from the filter and validate the map changes

    @links
    Scenario: Validate the Links in the page
        Given I am on the market page
        Then I validate the links the page






