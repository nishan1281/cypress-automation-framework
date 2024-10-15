@contact-us @regression
## tags used to run specific target tests

Feature: WebDriverUniversity - Contact Us Page

    ## The Background keyword ensures that the below defined steps execute before each Scenario,
    ## Thus commented out the common steps
    Background: Pre conditions
        Given I naviagate to the WebDriverUniversity home page
        When i click on the contact us button

    Scenario: Valid contact us form submission
        # Given I naviagate to the WebDriverUniversity home page
        # When i click on the contact us button
        And I type a first name
        And i type a last name
        And I enter an email address
        And i enter message
        And i click on the submit button
        Then  I should be presented with a successful contact us submission message

    @smoke
    Scenario: Invalid contact us form submission
        # Given I naviagate to the WebDriverUniversity home page
        # When i click on the contact us button
        And I type a first name
        And i type a last name
        And i enter message
        And i click on the submit button
        Then  I should be presented with a unsuccessful contact us submission message
    
    Scenario: Valid contact us form submission- using specific data
        # Given I naviagate to the WebDriverUniversity home page
        # When i click on the contact us button
        And i type "John Doe" as first name
        And i type "Smith" as last name
        And i type a specific email address "arif.nishan2011@gmail.com"
        And i type a specific word "hello world" and number 6788 within the comment input field
        And i click on the submit button
        Then  I should be presented with a successful contact us submission message

# Use Scenario Outline to validate the "Contact Us" page with multiple data fields,
# utilizing Cucumber expressions to handle varied test data inputs efficiently and avoid code duplication.

    
    Scenario Outline: Validate contact us page
        # Given I naviagate to the WebDriverUniversity home page
        # When i click on the contact us button
        And I type a first name <firstName> and a last name '<lastName>'
        And I type a '<emailAddress>' and a comment '<comment>'
        And i click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress     | comment      | message                      |
            | Jhons     | hok      | jhon@gmail.com   | Hello wrold  | Thank You for your Message!  |
            | nishan    | arif     | emailA@gmail.com | Hello Nishan | Thank You for your Message!  |
            | nishan    | arif     | sdfgsdfg         | Hello Nishan | Error: Invalid email address |