# Algorithms and Data Structures with ES6
This repo contains basic algorithms and data structures implemented with ES6.

It provides the following features:
* Code written in ES6
* Babel transpiling through a simple gulp task
* Linting with eslint using the AirBnB rules
* Unit tests with mocha
* Test coverage metrics with instanbul
* Latest modules used for all dependencies, including babel v6
* JSDoc style comments used to document the code

## Usage
```
git clone https://github.com/bobbrady/algorithms-with-es6.git
cd algorithms-with-es6
npm install
gulp // Lint and transpile all ES6 code
export LOG_LEVEL=debug // Optional, only do to see debug logging to stdout
npm test // Run all unit tests
npm run coverage // Evaluate test coverage
```
