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
  "name": "AutoCompletion Search filters with a Search term and term is bold",
  "description": "",
  "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-and-term-is-bold",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "WebPage is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "AutoCompletionSearch is  available",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "enter the search term \u003cterm\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "List is filtered on the Search term and the term is bold in the list",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-and-term-is-bold;",
  "rows": [
    {
      "cells": [
        "term"
      ],
      "line": 11,
      "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-and-term-is-bold;;1"
    },
    {
      "cells": [
        "\"p\""
      ],
      "line": 12,
      "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-and-term-is-bold;;2"
    },
    {
      "cells": [
        "\"pr\""
      ],
      "line": 13,
      "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-and-term-is-bold;;3"
    },
    {
      "cells": [
        "\"print\""
      ],
      "line": 14,
      "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-and-term-is-bold;;4"
    },
    {
      "cells": [
        "\"printer\""
      ],
      "line": 15,
      "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-and-term-is-bold;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2012993319,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "AutoCompletion Search filters with a Search term and term is bold",
  "description": "",
  "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-and-term-is-bold;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "WebPage is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "AutoCompletionSearch is  available",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "enter the search term \"p\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "List is filtered on the Search term and the term is bold in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.webpageIsDisplayed()"
});
formatter.result({
  "duration": 2844439375,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.autocompletionsearchIsAvailable()"
});
formatter.result({
  "duration": 776670477,
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
  "duration": 2313110414,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.listIsFilteredOnTheSearchTermAndIsBold()"
});
formatter.result({
  "duration": 48729,
  "status": "passed"
});
formatter.after({
  "duration": 162006772,
  "status": "passed"
});
formatter.before({
  "duration": 1220328089,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "AutoCompletion Search filters with a Search term and term is bold",
  "description": "",
  "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-and-term-is-bold;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "WebPage is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "AutoCompletionSearch is  available",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "enter the search term \"pr\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "List is filtered on the Search term and the term is bold in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.webpageIsDisplayed()"
});
formatter.result({
  "duration": 3369699111,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.autocompletionsearchIsAvailable()"
});
formatter.result({
  "duration": 257042094,
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
  "duration": 2951048464,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.listIsFilteredOnTheSearchTermAndIsBold()"
});
formatter.result({
  "duration": 32709,
  "status": "passed"
});
formatter.after({
  "duration": 157244812,
  "status": "passed"
});
formatter.before({
  "duration": 1220301420,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "AutoCompletion Search filters with a Search term and term is bold",
  "description": "",
  "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-and-term-is-bold;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "WebPage is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "AutoCompletionSearch is  available",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "enter the search term \"print\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "List is filtered on the Search term and the term is bold in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.webpageIsDisplayed()"
});
formatter.result({
  "duration": 5556925381,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.autocompletionsearchIsAvailable()"
});
formatter.result({
  "duration": 473654483,
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
  "duration": 2784966179,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.listIsFilteredOnTheSearchTermAndIsBold()"
});
formatter.result({
  "duration": 29139,
  "status": "passed"
});
formatter.after({
  "duration": 174556501,
  "status": "passed"
});
formatter.before({
  "duration": 1287033411,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "AutoCompletion Search filters with a Search term and term is bold",
  "description": "",
  "id": "test-a-scenario;autocompletion-search-filters-with-a-search-term-and-term-is-bold;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "WebPage is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "AutoCompletionSearch is  available",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "enter the search term \"printer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "List is filtered on the Search term and the term is bold in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.webpageIsDisplayed()"
});
formatter.result({
  "duration": 3972442575,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.autocompletionsearchIsAvailable()"
});
formatter.result({
  "duration": 1966828777,
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
  "duration": 1302607671,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.listIsFilteredOnTheSearchTermAndIsBold()"
});
formatter.result({
  "duration": 29989,
  "status": "passed"
});
formatter.after({
  "duration": 158269747,
  "status": "passed"
});
});