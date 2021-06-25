import { ApolloClient, InMemoryCache } from "@apollo/client";

// Can be later enriched with parameters, such as auth etc.
const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://localhost:8000/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
