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
  "description": "the list is limited to certain number of suggestions",
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
  "name": "enter the search term \u003cterm\u003e",
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
  "duration": 1995323135,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "AutoCompletion Search filters with a Search term , term is bold and",
  "description": "the list is limited to certain number of suggestions",
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
  "name": "enter the search term \"p\"",
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
  "duration": 2820306570,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.autocompletionsearchIsAvailable()"
});
formatter.result({
  "duration": 1878599377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "p",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.enter_the_search_term(String)"
});
formatter.result({
  "duration": 1416611304,
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
  "duration": 782477,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.listIsFilteredOnTheSearchTermAndIsBold()"
});
formatter.result({
  "duration": 62611,
  "status": "passed"
});
formatter.after({
  "duration": 180403016,
  "status": "passed"
});
formatter.before({
  "duration": 1324772692,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "AutoCompletion Search filters with a Search term , term is bold and",
  "description": "the list is limited to certain number of suggestions",
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
  "name": "enter the search term \"pr\"",
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
  "duration": 4047128984,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.autocompletionsearchIsAvailable()"
});
formatter.result({
  "duration": 1804995358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pr",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.enter_the_search_term(String)"
});
formatter.result({
  "duration": 1312959630,
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
  "duration": 89289,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.listIsFilteredOnTheSearchTermAndIsBold()"
});
formatter.result({
  "duration": 26459,
  "status": "passed"
});
formatter.after({
  "duration": 173988409,
  "status": "passed"
});
formatter.before({
  "duration": 1304921876,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "AutoCompletion Search filters with a Search term , term is bold and",
  "description": "the list is limited to certain number of suggestions",
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
  "name": "enter the search term \"print\"",
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
  "duration": 2616670136,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.autocompletionsearchIsAvailable()"
});
formatter.result({
  "duration": 274957536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "print",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.enter_the_search_term(String)"
});
formatter.result({
  "duration": 3137953252,
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
  "duration": 81534,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.listIsFilteredOnTheSearchTermAndIsBold()"
});
formatter.result({
  "duration": 34280,
  "status": "passed"
});
formatter.after({
  "duration": 170316823,
  "status": "passed"
});
formatter.before({
  "duration": 1384104136,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "AutoCompletion Search filters with a Search term , term is bold and",
  "description": "the list is limited to certain number of suggestions",
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
  "name": "enter the search term \"printer\"",
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
  "duration": 2816016497,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.autocompletionsearchIsAvailable()"
});
formatter.result({
  "duration": 538502254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "printer",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.enter_the_search_term(String)"
});
formatter.result({
  "duration": 2828453792,
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
  "duration": 75257,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.listIsFilteredOnTheSearchTermAndIsBold()"
});
formatter.result({
  "duration": 18911,
  "status": "passed"
});
formatter.after({
  "duration": 170797910,
  "status": "passed"
});
});