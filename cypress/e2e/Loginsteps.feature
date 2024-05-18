@login @regression
Feature:webdriverdriveruniversity - Login Page

    Background: Pre-condition
        Given I navigate to the webdriveruniversity Login page

    Scenario Outline:validate Valid and invalid login credential
        And I type a <username> username
        And I type a <password> password
        And click on the login button
        Then I should be presented with a alert box which contains text "<expectedAltertText>"

        Examples:
            | username  | password     | expectedAltertText   |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | password123  | validation failed    |
