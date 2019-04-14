Feature: Test a Scenario


    Scenario Outline: AutoCompletion Search filters with a Search term and term is bold
    Given WebPage is displayed
    And AutoCompletionSearch is  available
    When enter the search term <term>
    Then List is filtered on the Search term and the term is bold in the list

    Examples:
      |term|
      |"p"    |
      |"pr"    |
      |"print" |
      |"printer"|