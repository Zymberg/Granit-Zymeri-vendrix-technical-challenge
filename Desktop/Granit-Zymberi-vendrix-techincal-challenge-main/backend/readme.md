# 💳 Technical Challenge @ Backend

##### Start Backend

1. Open a terminal in the "backend" folder
2. Install the dependencies for the "backend" folder: `yarn`
3. Start the server: `yarn dev`
   -If you get a connection refused error, you might have to manually start your local redis server.

This guide is an example of how to develop a function in Typescript with
the a basic node express server.

The tech stack used includes:

- node
- express
- redis

## Summary

Add functionality to the express server so that a GET requests made to the route /card/:cardId (i.e./card/cd_392411ed344b112faa1e024f633516e4) returns basic payment card details.

In order to implement this feature you will need to differentiate between the existing "users" functionality "/" and requests for cards details "/cards/:cardId".

A query to the Highnote platform graphql API will be required, return the response from Highnote as a JSON value. You will need to implement a graphql client to fetch the information about the card.

A query has been provided and is located in the graphql folder. This API utilizes a Basic API key that should be Base64 encoded and added to the "Authorization" header.

The API key should be stored as an environmental variable and not committed to git. The API key will be shared with you via an email.

**Use the following card Id to test your work: "cd_392411ed344b112faa1e024f633516e4"**

_You can read more about the Highnote platform API at: https://highnoteplatform.com/docs_

## Task List

- [ ] Add logic to express server to determine when a card detail request is being made vs. user request (existing functionality)

- [ ] Query the Highnote API, and return the card details to the client

- [ ] Requests made to /cards/:cardId should return details about the card based on the ID provided

- [ ] All other requests made to the endpoint should result in the existing function functionality
