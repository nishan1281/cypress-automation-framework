Feature: webdriveruniversity - Login Page

    Background: Pre conditions
        Given I naviagate to the WebDriverUniversity home page
        When I click on the login portal button

    Scenario Outline: Validate  valid and invalid login credentials
        And I type a username <username> and password <password>
        And I click on the login button
        Then I should be presented with an alert box which contain text '<expectedAertText>'

        Examples:
            | username  | password     | expectedAertText     |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver  | wrongpass123 | validation failed    |


