# Public APIs API Test

This project contains a Cypress test suite for testing the `https://api.publicapis.org/entries` API. The test verifies the response, structure, and properties of the API entries with the category "Authentication & Authorization".

## Prerequisites

- Node.js and npm installed on your machine.

## Setup

1. **Clone this repository:**

   ```bash
   git clone https://github.com/ManuC7/publicapis-api-test.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd publicapis-api-test
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Running Tests

To run the tests in headless mode and generate a Mochawesome report, use the following command:

```bash
npm run test-headless
```

This command runs Cypress in headless mode, using Chrome as the browser, and generates a Mochawesome report.  
The test reports can be found in the reports folder.

To run the tests with the Cypress Test Runner and view the reports interactively, use:

```bash
npm run test
```

This command runs Cypress in interactive mode, and opens the Cypress Test Runner.

## Test Description

The test makes a GET request to https://api.publicapis.org/entries, verifies the response, and performs the following validations:

- Checks the response status is 200.
- Verifies the response body is not empty.
- Verifies the response body has the expected keys: ["count", "entries"].
- Filters entries based on the category "Authentication & Authorization".
- Iterates through each authentication entry and validates its structure and data types.
- Counts and verifies the number of entries with HTTPS as true and false.
- Counts and verifies the number of entries with CORS as "yes" and "no".
- Verifies the total number of authentication entries is 7.
- Logs are provided for each authentication entry and the counts of HTTPS and CORS entries.

## Dependencies

- Cypress: ^13.6.1
- Cypress Mochawesome Reporter: ^3.7.0
- Cypress Plugin API: ^2.11.1

## Test Location

The test script is located at cypress/e2e/publicapisAPI.cy.js.

## Reports

The test reports can be found in the reports folder.
