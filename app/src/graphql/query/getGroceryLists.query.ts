import { gql } from "@apollo/client";

export const GET_REPOSITORY = gql`
  query groceryList($nodeId: ID!) {
    groceryList(nodeId: $nodeId) {
      name
      id
      groceryItemsByGroceryListId {
        nodes {
          isComplete
          name
          nodeId
        }
      }
    }
  }
`;
