import React from "react";

import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";

import App from "./App";
import createApolloClient from "./graphql/client";

const apolloClient = createApolloClient();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
