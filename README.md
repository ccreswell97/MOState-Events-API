# Homework 3 - CSC 515 - Advanced Internet Programming #
**Due Date: 3/8/2019**

## Objective ##
Display a list of Missouri Missouri State calendar events for a specified day.
The output will simply be a bulletted list of event titles.

## Specifications ##
* Get the events from [http://people.missouristate.edu/chadkillingsworth/csc590/calendar/?date=DATE](http://people.missouristate.edu/chadkillingsworth/csc590/calendar/?date=DATE)
   - The URL takes a single query parameter `date` which returns events for that date. '?date=02/16/2018'
* The API url will randomly issue a 500 error. This is to allow for you to implement error handling.
Make sure to give some type of feedback to the user that an unexpected error occurred.
* Provide feedback to the user while the request is processing.
The API will randomly delay the request for 3 seconds in order to show this feedback.

## Getting Started with API Requests
 * I recommend using the Fetch API to make API requests. See [How to Use the Javascript Fetch API to Get Data](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)

### Notes about the API
 * The API will issue a 404 error if the `date` parameter is not present or in an invalid format.
 * Make sure to use the "network" section of your developer tools to watch the response traffic.

## Local Development
Use webpack to create a local web environment. Wireup a "start" script in the
package.json file so that `npm start` automatically starts the webpack server.

```js
npm install
npm start
```

## How To Submit The Assignment

 1. Clone the repository locally.
 2. Create a feature branch to work on your code.
 3. Use `npm init` to start your npm project.
 4. Commit and push often while you develop.
 5. When ready to submit, create a pull request on GitHub targeting the master branch .

If you have questions during this process, create the pull request early and ask the questions there. Email me a link to the pull request.
