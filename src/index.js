import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo';
import { gql } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { ApolloClient } from 'apollo-client';
import { setContext } from "apollo-link-context";



const httpLink = ApolloLink.from([
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.error("[GraphQL Error(s)]", graphQLErrors);
    }
    if (networkError) {
      console.error(networkError);
    }
  }),
  new HttpLink({
    "uri": `http://localhost:8000/graphql`,
  }),
]);

const authLink = setContext((_, { headers }) => {

  return {
    "headers": {
      "Authorization": "",
      ...headers,
    },
  };
});

const client = new ApolloClient({
  "cache": new InMemoryCache(),
  "link": authLink.concat(httpLink),

});




ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
