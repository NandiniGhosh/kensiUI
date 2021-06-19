import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";

const apolloClient = new ApolloClient({
  uri: `https://countries.trevorblades.com`,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Routes />
      </Router>
    </ApolloProvider>
  );
};

export default App;
