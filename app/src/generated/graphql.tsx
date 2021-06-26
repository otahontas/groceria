import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
};

/** All input for the create `GroceryItem` mutation. */
export type CreateGroceryItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `GroceryItem` to be created by this mutation. */
  groceryItem: GroceryItemInput;
};

/** The output of our create `GroceryItem` mutation. */
export type CreateGroceryItemPayload = {
  __typename?: "CreateGroceryItemPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `GroceryItem` that was created by this mutation. */
  groceryItem?: Maybe<GroceryItem>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `GroceryList` that is related to this `GroceryItem`. */
  groceryListByGroceryListId?: Maybe<GroceryList>;
  /** An edge for our `GroceryItem`. May be used by Relay 1. */
  groceryItemEdge?: Maybe<GroceryItemsEdge>;
};

/** The output of our create `GroceryItem` mutation. */
export type CreateGroceryItemPayloadGroceryItemEdgeArgs = {
  orderBy?: Maybe<Array<GroceryItemsOrderBy>>;
};

/** All input for the create `GroceryList` mutation. */
export type CreateGroceryListInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `GroceryList` to be created by this mutation. */
  groceryList: GroceryListInput;
};

/** The output of our create `GroceryList` mutation. */
export type CreateGroceryListPayload = {
  __typename?: "CreateGroceryListPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `GroceryList` that was created by this mutation. */
  groceryList?: Maybe<GroceryList>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `GroceryList`. May be used by Relay 1. */
  groceryListEdge?: Maybe<GroceryListsEdge>;
};

/** The output of our create `GroceryList` mutation. */
export type CreateGroceryListPayloadGroceryListEdgeArgs = {
  orderBy?: Maybe<Array<GroceryListsOrderBy>>;
};

/** All input for the `deleteGroceryItemById` mutation. */
export type DeleteGroceryItemByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The primary unique identifier for the grocery item */
  id: Scalars["Int"];
};

/** All input for the `deleteGroceryItem` mutation. */
export type DeleteGroceryItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `GroceryItem` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `GroceryItem` mutation. */
export type DeleteGroceryItemPayload = {
  __typename?: "DeleteGroceryItemPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `GroceryItem` that was deleted by this mutation. */
  groceryItem?: Maybe<GroceryItem>;
  deletedGroceryItemId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `GroceryList` that is related to this `GroceryItem`. */
  groceryListByGroceryListId?: Maybe<GroceryList>;
  /** An edge for our `GroceryItem`. May be used by Relay 1. */
  groceryItemEdge?: Maybe<GroceryItemsEdge>;
};

/** The output of our delete `GroceryItem` mutation. */
export type DeleteGroceryItemPayloadGroceryItemEdgeArgs = {
  orderBy?: Maybe<Array<GroceryItemsOrderBy>>;
};

/** All input for the `deleteGroceryListById` mutation. */
export type DeleteGroceryListByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The primary unique identifier for the grocery list */
  id: Scalars["Int"];
};

/** All input for the `deleteGroceryList` mutation. */
export type DeleteGroceryListInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `GroceryList` to be deleted. */
  nodeId: Scalars["ID"];
};

/** The output of our delete `GroceryList` mutation. */
export type DeleteGroceryListPayload = {
  __typename?: "DeleteGroceryListPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `GroceryList` that was deleted by this mutation. */
  groceryList?: Maybe<GroceryList>;
  deletedGroceryListId?: Maybe<Scalars["ID"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `GroceryList`. May be used by Relay 1. */
  groceryListEdge?: Maybe<GroceryListsEdge>;
};

/** The output of our delete `GroceryList` mutation. */
export type DeleteGroceryListPayloadGroceryListEdgeArgs = {
  orderBy?: Maybe<Array<GroceryListsOrderBy>>;
};

/** Grocery items for grocery lists. */
export type GroceryItem = Node & {
  __typename?: "GroceryItem";
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  /** The primary unique identifier for the grocery item */
  id: Scalars["Int"];
  /** The name of the grocery item */
  name: Scalars["String"];
  /** The status implicating whether grocery item is active or not */
  isComplete: Scalars["Boolean"];
  /** Time when grocery item was originally created */
  createdDate: Scalars["Datetime"];
  /** Id of the grocery list the grocery item belongs to */
  groceryListId: Scalars["Int"];
  /** Reads a single `GroceryList` that is related to this `GroceryItem`. */
  groceryListByGroceryListId?: Maybe<GroceryList>;
};

/**
 * A condition to be used against `GroceryItem` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type GroceryItemCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars["String"]>;
  /** Checks for equality with the object’s `isComplete` field. */
  isComplete?: Maybe<Scalars["Boolean"]>;
  /** Checks for equality with the object’s `createdDate` field. */
  createdDate?: Maybe<Scalars["Datetime"]>;
  /** Checks for equality with the object’s `groceryListId` field. */
  groceryListId?: Maybe<Scalars["Int"]>;
};

/** An input for mutations affecting `GroceryItem` */
export type GroceryItemInput = {
  /** The name of the grocery item */
  name: Scalars["String"];
  /** The status implicating whether grocery item is active or not */
  isComplete?: Maybe<Scalars["Boolean"]>;
  /** Id of the grocery list the grocery item belongs to */
  groceryListId: Scalars["Int"];
};

/** Represents an update to a `GroceryItem`. Fields that are set will be updated. */
export type GroceryItemPatch = {
  /** The name of the grocery item */
  name?: Maybe<Scalars["String"]>;
  /** The status implicating whether grocery item is active or not */
  isComplete?: Maybe<Scalars["Boolean"]>;
};

/** A connection to a list of `GroceryItem` values. */
export type GroceryItemsConnection = {
  __typename?: "GroceryItemsConnection";
  /** A list of `GroceryItem` objects. */
  nodes: Array<Maybe<GroceryItem>>;
  /** A list of edges which contains the `GroceryItem` and cursor to aid in pagination. */
  edges: Array<GroceryItemsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GroceryItem` you could get from the connection. */
  totalCount: Scalars["Int"];
};

/** A `GroceryItem` edge in the connection. */
export type GroceryItemsEdge = {
  __typename?: "GroceryItemsEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>;
  /** The `GroceryItem` at the end of the edge. */
  node?: Maybe<GroceryItem>;
};

/** Methods to use when ordering `GroceryItem`. */
export enum GroceryItemsOrderBy {
  Natural = "NATURAL",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
  IsCompleteAsc = "IS_COMPLETE_ASC",
  IsCompleteDesc = "IS_COMPLETE_DESC",
  CreatedDateAsc = "CREATED_DATE_ASC",
  CreatedDateDesc = "CREATED_DATE_DESC",
  GroceryListIdAsc = "GROCERY_LIST_ID_ASC",
  GroceryListIdDesc = "GROCERY_LIST_ID_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

/** Grocery lists. */
export type GroceryList = Node & {
  __typename?: "GroceryList";
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
  /** The primary unique identifier for the grocery list */
  id: Scalars["Int"];
  /** The name of the grocery list */
  name: Scalars["String"];
  /** Time when grocery list was originally created */
  createdDate: Scalars["Datetime"];
  /** Reads and enables pagination through a set of `GroceryItem`. */
  groceryItemsByGroceryListId: GroceryItemsConnection;
};

/** Grocery lists. */
export type GroceryListGroceryItemsByGroceryListIdArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<GroceryItemsOrderBy>>;
  condition?: Maybe<GroceryItemCondition>;
};

/**
 * A condition to be used against `GroceryList` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type GroceryListCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars["Int"]>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars["String"]>;
  /** Checks for equality with the object’s `createdDate` field. */
  createdDate?: Maybe<Scalars["Datetime"]>;
};

/** An input for mutations affecting `GroceryList` */
export type GroceryListInput = {
  /** The name of the grocery list */
  name: Scalars["String"];
};

/** Represents an update to a `GroceryList`. Fields that are set will be updated. */
export type GroceryListPatch = {
  /** The name of the grocery list */
  name?: Maybe<Scalars["String"]>;
};

/** A connection to a list of `GroceryList` values. */
export type GroceryListsConnection = {
  __typename?: "GroceryListsConnection";
  /** A list of `GroceryList` objects. */
  nodes: Array<Maybe<GroceryList>>;
  /** A list of edges which contains the `GroceryList` and cursor to aid in pagination. */
  edges: Array<GroceryListsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GroceryList` you could get from the connection. */
  totalCount: Scalars["Int"];
};

/** A `GroceryList` edge in the connection. */
export type GroceryListsEdge = {
  __typename?: "GroceryListsEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>;
  /** The `GroceryList` at the end of the edge. */
  node?: Maybe<GroceryList>;
};

/** Methods to use when ordering `GroceryList`. */
export enum GroceryListsOrderBy {
  Natural = "NATURAL",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
  CreatedDateAsc = "CREATED_DATE_ASC",
  CreatedDateDesc = "CREATED_DATE_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: "Mutation";
  /** Creates a single `GroceryItem`. */
  createGroceryItem?: Maybe<CreateGroceryItemPayload>;
  /** Creates a single `GroceryList`. */
  createGroceryList?: Maybe<CreateGroceryListPayload>;
  /** Updates a single `GroceryItem` using its globally unique id and a patch. */
  updateGroceryItem?: Maybe<UpdateGroceryItemPayload>;
  /** Updates a single `GroceryItem` using a unique key and a patch. */
  updateGroceryItemById?: Maybe<UpdateGroceryItemPayload>;
  /** Updates a single `GroceryList` using its globally unique id and a patch. */
  updateGroceryList?: Maybe<UpdateGroceryListPayload>;
  /** Updates a single `GroceryList` using a unique key and a patch. */
  updateGroceryListById?: Maybe<UpdateGroceryListPayload>;
  /** Deletes a single `GroceryItem` using its globally unique id. */
  deleteGroceryItem?: Maybe<DeleteGroceryItemPayload>;
  /** Deletes a single `GroceryItem` using a unique key. */
  deleteGroceryItemById?: Maybe<DeleteGroceryItemPayload>;
  /** Deletes a single `GroceryList` using its globally unique id. */
  deleteGroceryList?: Maybe<DeleteGroceryListPayload>;
  /** Deletes a single `GroceryList` using a unique key. */
  deleteGroceryListById?: Maybe<DeleteGroceryListPayload>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGroceryItemArgs = {
  input: CreateGroceryItemInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGroceryListArgs = {
  input: CreateGroceryListInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroceryItemArgs = {
  input: UpdateGroceryItemInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroceryItemByIdArgs = {
  input: UpdateGroceryItemByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroceryListArgs = {
  input: UpdateGroceryListInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroceryListByIdArgs = {
  input: UpdateGroceryListByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroceryItemArgs = {
  input: DeleteGroceryItemInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroceryItemByIdArgs = {
  input: DeleteGroceryItemByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroceryListArgs = {
  input: DeleteGroceryListInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroceryListByIdArgs = {
  input: DeleteGroceryListByIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["Cursor"]>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["Cursor"]>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: "Query";
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars["ID"];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `GroceryItem`. */
  allGroceryItems?: Maybe<GroceryItemsConnection>;
  /** Reads and enables pagination through a set of `GroceryList`. */
  allGroceryLists?: Maybe<GroceryListsConnection>;
  groceryItemById?: Maybe<GroceryItem>;
  groceryListById?: Maybe<GroceryList>;
  /** Reads a single `GroceryItem` using its globally unique `ID`. */
  groceryItem?: Maybe<GroceryItem>;
  /** Reads a single `GroceryList` using its globally unique `ID`. */
  groceryList?: Maybe<GroceryList>;
};

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryAllGroceryItemsArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<GroceryItemsOrderBy>>;
  condition?: Maybe<GroceryItemCondition>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllGroceryListsArgs = {
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["Cursor"]>;
  after?: Maybe<Scalars["Cursor"]>;
  orderBy?: Maybe<Array<GroceryListsOrderBy>>;
  condition?: Maybe<GroceryListCondition>;
};

/** The root query type which gives access points into the data universe. */
export type QueryGroceryItemByIdArgs = {
  id: Scalars["Int"];
};

/** The root query type which gives access points into the data universe. */
export type QueryGroceryListByIdArgs = {
  id: Scalars["Int"];
};

/** The root query type which gives access points into the data universe. */
export type QueryGroceryItemArgs = {
  nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryGroceryListArgs = {
  nodeId: Scalars["ID"];
};

/** All input for the `updateGroceryItemById` mutation. */
export type UpdateGroceryItemByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `GroceryItem` being updated. */
  groceryItemPatch: GroceryItemPatch;
  /** The primary unique identifier for the grocery item */
  id: Scalars["Int"];
};

/** All input for the `updateGroceryItem` mutation. */
export type UpdateGroceryItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `GroceryItem` to be updated. */
  nodeId: Scalars["ID"];
  /** An object where the defined keys will be set on the `GroceryItem` being updated. */
  groceryItemPatch: GroceryItemPatch;
};

/** The output of our update `GroceryItem` mutation. */
export type UpdateGroceryItemPayload = {
  __typename?: "UpdateGroceryItemPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `GroceryItem` that was updated by this mutation. */
  groceryItem?: Maybe<GroceryItem>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `GroceryList` that is related to this `GroceryItem`. */
  groceryListByGroceryListId?: Maybe<GroceryList>;
  /** An edge for our `GroceryItem`. May be used by Relay 1. */
  groceryItemEdge?: Maybe<GroceryItemsEdge>;
};

/** The output of our update `GroceryItem` mutation. */
export type UpdateGroceryItemPayloadGroceryItemEdgeArgs = {
  orderBy?: Maybe<Array<GroceryItemsOrderBy>>;
};

/** All input for the `updateGroceryListById` mutation. */
export type UpdateGroceryListByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** An object where the defined keys will be set on the `GroceryList` being updated. */
  groceryListPatch: GroceryListPatch;
  /** The primary unique identifier for the grocery list */
  id: Scalars["Int"];
};

/** All input for the `updateGroceryList` mutation. */
export type UpdateGroceryListInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The globally unique `ID` which will identify a single `GroceryList` to be updated. */
  nodeId: Scalars["ID"];
  /** An object where the defined keys will be set on the `GroceryList` being updated. */
  groceryListPatch: GroceryListPatch;
};

/** The output of our update `GroceryList` mutation. */
export type UpdateGroceryListPayload = {
  __typename?: "UpdateGroceryListPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>;
  /** The `GroceryList` that was updated by this mutation. */
  groceryList?: Maybe<GroceryList>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `GroceryList`. May be used by Relay 1. */
  groceryListEdge?: Maybe<GroceryListsEdge>;
};

/** The output of our update `GroceryList` mutation. */
export type UpdateGroceryListPayloadGroceryListEdgeArgs = {
  orderBy?: Maybe<Array<GroceryListsOrderBy>>;
};

export type GroceryListQueryVariables = Exact<{
  nodeId: Scalars["ID"];
}>;

export type GroceryListQuery = { __typename?: "Query" } & {
  groceryList?: Maybe<
    { __typename?: "GroceryList" } & Pick<GroceryList, "name" | "id"> & {
        groceryItemsByGroceryListId: {
          __typename?: "GroceryItemsConnection";
        } & {
          nodes: Array<
            Maybe<
              { __typename?: "GroceryItem" } & Pick<
                GroceryItem,
                "isComplete" | "name" | "nodeId"
              >
            >
          >;
        };
      }
  >;
};

export const GroceryListDocument = gql`
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

/**
 * __useGroceryListQuery__
 *
 * To run a query within a React component, call `useGroceryListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroceryListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroceryListQuery({
 *   variables: {
 *      nodeId: // value for 'nodeId'
 *   },
 * });
 */
export function useGroceryListQuery(
  baseOptions: Apollo.QueryHookOptions<
    GroceryListQuery,
    GroceryListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GroceryListQuery, GroceryListQueryVariables>(
    GroceryListDocument,
    options
  );
}
export function useGroceryListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GroceryListQuery,
    GroceryListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GroceryListQuery, GroceryListQueryVariables>(
    GroceryListDocument,
    options
  );
}
export type GroceryListQueryHookResult = ReturnType<typeof useGroceryListQuery>;
export type GroceryListLazyQueryHookResult = ReturnType<
  typeof useGroceryListLazyQuery
>;
export type GroceryListQueryResult = Apollo.QueryResult<
  GroceryListQuery,
  GroceryListQueryVariables
>;
