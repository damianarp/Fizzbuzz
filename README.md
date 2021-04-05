# Fizzbuzz Exercise
## _Technical exercise in job interview_


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

The following exercise prints a list of numbers in which "fizz" is printed when the number is a multiple of 3, "buzz" is printed when it is a multiple of 5, and "fizzbuzz" is printed when it is a multiple of both.


## Installation

In this case, Fizzbuzz uses [Node.js](https://nodejs.org/) v10+ to run.

Create a new project by default, install the dependencies and devDependencies and start the server:

```sh
cd fizzbuzz
npm init -y
```
Install the jest library in development mode for testing:
```sh
npm i -D jest
```
Configure jest:
```sh
npx jest --init
```
_Would you like to use Jest when running "test" script in "package.json"?_ NO
_Would you like to use TypeScript for the configuration file?_ NO
_Choose the test enviroment that will be used for testing:_ NODE
_Do you want Jest to add coverage reports?_ YES
_What provider should be used to instrument code for coverage?_ V8
_Automatically clear mock calls and instances beetween every test?_ YES

Create a new file named fizzbuzz.js and fizzbuzz.test.js

## Test

For tests, run:

```sh
npm test
```

And:

```sh
npm run test:watch
```

#### The list
For print the list, run:

```sh
node fizzbuzz
```

