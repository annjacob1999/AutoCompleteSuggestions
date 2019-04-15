Feature: Test a Scenario


  Scenario Outline: AutoCompletion Search filters with a Search term , term is bold and
                     the list is limited to certain number of suggestions

    Given WebPage is displayed
    And AutoCompletionSearch is  available
    When enter the search term <term>
    Then List has less than or equal to 10 enries
    And List is filtered on the Search term and the term is bold in the list

    Examples:
      |term|
      |"p"    |
      |"pr"    |
      |"print" |
      |"printer"|