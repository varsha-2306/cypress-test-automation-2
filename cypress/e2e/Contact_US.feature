@contact_us @regression
Feature: webdriverdriveruniversity - Contact Us Page

    Background: Pre-condition
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a lastname name
        And I type the email address
        And I type a comment
        And click on the submit button
        Then you should be presented with a successful contact us Submission message

    Scenario: InValid Contact Us Form Submission
        And I type a first name
        And I type a lastname name
        And I type a comment
        And click on the submit button
        Then you should be presented with a unsuccessful contact us Submission message

    Scenario: Valid Contact Us Form Submission - using parameters
        And I type a specific first name "Joe"
        And I type a specific last name "Blogs"
        And I type the specific  email address "varshasampath.s@gmail.com"
        And I type a comment "Hello123" with the numbers 2346 in the comment field
        And click on the submit button
        Then you should be presented with a successful contact us Submission message

    @smoke
    Scenario Outline: Validate contact us page
        And I type a specific first name <First name> and lastname '<Lastname>'
        And I type the specific '<Email address>' and  a comment '<Comment>'
        And click on the submit button
        Then you should be presented with a contact us Submission '<Message>'

        Examples:
            | First name | Lastname | Email address       | Comment       | Message                      |
            | John       | kennedy  | kenedy234@gmail.com | I am kennedy  | Thank You for your Message!  |
          # | Jacquline  | Fernandez | Feranandy@gmail.com1 | I am Fernandez | Thank You for your Message!  |
            | Paul       | Anderson | Pauly               | I am anderson | Error: Invalid email address |