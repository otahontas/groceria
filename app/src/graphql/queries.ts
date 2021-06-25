import { gql } from "@apollo/client";

export const GET_GROCERY_LISTS = gql`
  query getGroceryLists {
    allGroceryLists {
      nodes {
        id
        name
        url
      }
    }
  }
`;
