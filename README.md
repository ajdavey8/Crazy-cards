# Crazy Cards

## Summary

The task was to develop a web application to allow customers to enter their details and review credit cards that are applicable to their credit status.

## Run the app

Install the main dependicies

```sh
$ npm install
```

To start the mock api server this will run a mock server on localhost:5050. This needs to be running before running the client application.

```sh
$ cd server/
$ npm install
$ npm start
```

To Run the client app on localhost:8080 run the following in the root directory

```sh
$ npm start
```

## Tests

To run the Cypress end to end tests with the application running either run `npx cypress run --spec './cypress/integration/**'` to run in the console or `npx cypress open` to open cypress

To run the unit tests

```sh
$ npm run test
```

## Approach

I created a fake server/API for the card data required for the app so it wasn't in the React App. I also did the filtering logic in the backend as to not incumber the front end with such logic and keep it responsible more for presentation of the data.

I used SCSS for styling to make it easier and took a mobile first approach to styling.

For testing I have used Cypress for end to end tests using the user cases to make sure the app is working correctly. I used Jest and Enzyme for unit tests, the unit tests are not very extensive with more time I would increase test coverage and further test the functionality in App.js.
