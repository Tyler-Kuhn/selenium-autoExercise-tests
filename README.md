# Automation Tests for Automation Exercise

## Overview
This project contains a suite of automated tests for the website [Automation Exercise](https://automationexercise.com/). The tests are written using Selenium WebDriver with JavaScript and are structured using the Page Object Model (POM) pattern for better maintainability and readability. Mocha is used as the test framework, Chai for assertions, and Mochawesome for generating beautiful test reports.

## Prerequisites
- Node.js
- NPM (Node Package Manager)
- A supported web browser (e.g., Firefox, Chrome)

## Installation

### Clone the Repository:
git clone <repository-url>
cd <repository-name>

### Install Dependencies:
npm install

## Running Tests

### Start the Tests:
npm test
This command will run all the tests using Mocha with Mochawesome reporter integrated.

### View Test Results:
- Test results are displayed in the terminal.
- Mochawesome generates a more detailed HTML report. After the test run, you can find the report in the `mochawesome-report` folder.

## Mochawesome Report

- **Generating Reports:** Mochawesome is configured to generate detailed HTML reports for each test run.
- **Report Location:** The HTML report and its assets are saved in the `testReport` directory in the project root.
- **Viewing Reports:** Open the `testResults.html` file in any web browser to view the report.

## Test Structure

- **Pages Directory (`/pages`):**
  - Contains classes for each page of the website, encapsulating page-specific elements and actions.

- **Tests Directory (`/tests`):**
  - Contains test scripts that use methods from the page classes to interact with the web application.

- **`firstTest.js`:**
  - An example test script demonstrating how to use the page classes and perform basic assertions.

- **`package.json` & `package-lock.json`:**
  - Lists project dependencies and their specific versions.

## Key Features

- **Page Object Model (POM):** Enhances test maintenance and reduces code duplication.
- **Selenium WebDriver:** Provides powerful tools for browser automation.
- **Mocha & Chai:** Offers a robust testing framework with expressive assertions.
- **Mochawesome:** Generates beautiful and comprehensive HTML reports for your test runs.

## Contributing

Contributions to this test suite are welcome. Please follow the standard Git workflow for contributions:
1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes.
4. Push to the branch.
5. Create a new Pull Request.

## License

Specify the license under which this project is available, such as MIT, GPL, etc.
