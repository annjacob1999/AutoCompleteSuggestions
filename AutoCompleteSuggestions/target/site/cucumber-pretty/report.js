$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AutoCompletionSuggestions.feature");
formatter.feature({
  "line": 1,
  "name": "Test a Scenario",
  "description": "",
  "id": "test-a-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "AutoCompletion Search filters with a Search term , term is bold and",
  "description": "                 the list is limited to certain number of suggestions",
  "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-,-term-is-bold-and",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "WebPage is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "AutoCompletionSearch is  available",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the search term \u003cterm\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "List has less than or equal to 10 enries",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "List is filtered on the Search term and the term is bold in the list",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-,-term-is-bold-and;",
  "rows": [
    {
      "cells": [
        "term"
      ],
      "line": 14,
      "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-,-term-is-bold-and;;1"
    },
    {
      "cells": [
        "\"p\""
      ],
      "line": 15,
      "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-,-term-is-bold-and;;2"
    },
    {
      "cells": [
        "\"pr\""
      ],
      "line": 16,
      "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-,-term-is-bold-and;;3"
    },
    {
      "cells": [
        "\"print\""
      ],
      "line": 17,
      "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-,-term-is-bold-and;;4"
    },
    {
      "cells": [
        "\"printer\""
      ],
      "line": 18,
      "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-,-term-is-bold-and;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2220976943,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "AutoCompletion Search filters with a Search term , term is bold and",
  "description": "                 the list is limited to certain number of suggestions",
  "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-,-term-is-bold-and;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "WebPage is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "AutoCompletionSearch is  available",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the search term \"p\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "List has less than or equal to 10 enries",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "List is filtered on the Search term and the term is bold in the list",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.webpageIsDisplayed()"
});
formatter.result({
  "duration": 3320046128,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.autocompletionsearchIsAvailable()"
});
formatter.result({
  "duration": 2082884459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "p",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.enter_the_search_term(String)"
});
formatter.result({
  "duration": 1238453153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.listHasLessThanOrEqualToEnries(int)"
});
formatter.result({
  "duration": 1234670,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.listIsFilteredOnTheSearchTermAndIsBold()"
});
formatter.result({
  "duration": 92809,
  "status": "passed"
});
formatter.after({
  "duration": 192186712,
  "status": "passed"
});
formatter.before({
  "duration": 1407323987,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "AutoCompletion Search filters with a Search term , term is bold and",
  "description": "                 the list is limited to certain number of suggestions",
  "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-,-term-is-bold-and;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "WebPage is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "AutoCompletionSearch is  available",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the search term \"pr\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "List has less than or equal to 10 enries",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "List is filtered on the Search term and the term is bold in the list",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.webpageIsDisplayed()"
});
formatter.result({
  "duration": 2855440251,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.autocompletionsearchIsAvailable()"
});
formatter.result({
  "duration": 1902289722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pr",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.enter_the_search_term(String)"
});
formatter.result({
  "duration": 1398457820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.listHasLessThanOrEqualToEnries(int)"
});
formatter.result({
  "duration": 129319,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.listIsFilteredOnTheSearchTermAndIsBold()"
});
formatter.result({
  "duration": 31282,
  "status": "passed"
});
formatter.after({
  "duration": 182883274,
  "status": "passed"
});
formatter.before({
  "duration": 1335709862,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "AutoCompletion Search filters with a Search term , term is bold and",
  "description": "                 the list is limited to certain number of suggestions",
  "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-,-term-is-bold-and;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "WebPage is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "AutoCompletionSearch is  available",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the search term \"print\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "List has less than or equal to 10 enries",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "List is filtered on the Search term and the term is bold in the list",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.webpageIsDisplayed()"
});
formatter.result({
  "duration": 2891192022,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.autocompletionsearchIsAvailable()"
});
formatter.result({
  "duration": 630977532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "print",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.enter_the_search_term(String)"
});
formatter.result({
  "duration": 2653609975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.listHasLessThanOrEqualToEnries(int)"
});
formatter.result({
  "duration": 99717,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.listIsFilteredOnTheSearchTermAndIsBold()"
});
formatter.result({
  "duration": 29639,
  "status": "passed"
});
formatter.after({
  "duration": 208655827,
  "status": "passed"
});
formatter.before({
  "duration": 1290727735,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "AutoCompletion Search filters with a Search term , term is bold and",
  "description": "                 the list is limited to certain number of suggestions",
  "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-,-term-is-bold-and;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "WebPage is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "AutoCompletionSearch is  available",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the search term \"printer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "List has less than or equal to 10 enries",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "List is filtered on the Search term and the term is bold in the list",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.webpageIsDisplayed()"
});
formatter.result({
  "duration": 2922398581,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.autocompletionsearchIsAvailable()"
});
formatter.result({
  "duration": 1824212106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "printer",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.enter_the_search_term(String)"
});
formatter.result({
  "duration": 1458143666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.listHasLessThanOrEqualToEnries(int)"
});
formatter.result({
  "duration": 70583,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.listIsFilteredOnTheSearchTermAndIsBold()"
});
formatter.result({
  "duration": 20038,
  "status": "passed"
});
formatter.after({
  "duration": 210625210,
  "status": "passed"
});
});