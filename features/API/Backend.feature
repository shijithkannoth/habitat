Feature: Backend API Automation - This Feature is used for automating the backend API calls

    @API
    Scenario Outline: Validating the GET API calls for the electricity data
        When I HTTP GET prices?dno=<dno>&voltage=<voltage>&start=<start_date>&end=<end_date> from my service
        Then I should be able to see the response with status <status_code> and <message> in <path>

        Examples:
            | dno | voltage | start_date | end_date   | status_code | message    | path         |
            | 11  | LV      | 01-06-2021 | 03-06-2021 | 200         | success    | status       |
            | 12  | HV      | 01-06-2020 | 01-06-2020 | 200         | success    | status       |
            | 12  | LV-Sub  | 01-06-200  | 01-06-2020 | 400         | ValueError | errorType    |
            | 17  | HV      | 01-06-2020 | 01-06-2021 | 200         | success    | errorMessage |


