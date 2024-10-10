Feature: WebDriverUniversity - Contact Us Page

    Scenario: Valid contact us form submission

        Given I naviagate to the WebDriverUniversity home page
        When i click on the contact us button
        And I type a first name
        And i type a last name
        And I enter an email address
        And i enter message
        And i click on the submit button
        Then  I should be presented with a successful contact us submission message


    Scenario: Invalid contact us form submission
        Given I naviagate to the WebDriverUniversity home page
        When i click on the contact us button
        And I type a first name
        And i type a last name
        And i enter message
        And i click on the submit button
        Then  I should be presented with a unsuccessful contact us submission message

    Scenario: Valid contact us form submission- using specific data
        Given I naviagate to the WebDriverUniversity home page
        When i click on the contact us button
        And i type "John Doe" as first name
        And i type "Smith" as last name
        And i type a specific email address "arif.nishan2011@gmail.com"
        And i type a specific word "hello world" and number 6788 within the comment input field
        And i click on the submit button
        Then  I should be presented with a successful contact us submission message