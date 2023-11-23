import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyProduct?: Maybe<Array<Maybe<Product>>>;
  createProduct?: Maybe<Product>;
  removeProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
};


export type MutationCreateManyProductArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductInput>>>;
};


export type MutationCreateProductArgs = {
  brand: Scalars['String']['input'];
  colour: Scalars['String']['input'];
  description: Scalars['String']['input'];
  height: Scalars['Float']['input'];
  img_url: Scalars['String']['input'];
  length: Scalars['Float']['input'];
  model_code: Scalars['String']['input'];
  name: Scalars['String']['input'];
  power: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  weight: Scalars['Int']['input'];
  width: Scalars['Float']['input'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductArgs = {
  brand?: InputMaybe<Scalars['String']['input']>;
  colour?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  img_url?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  model_code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  power?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type Product = {
  __typename?: 'Product';
  brand: Scalars['String']['output'];
  colour: Scalars['String']['output'];
  description: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  img_url: Scalars['String']['output'];
  length: Scalars['Float']['output'];
  model_code: Scalars['String']['output'];
  name: Scalars['String']['output'];
  power: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  weight: Scalars['Int']['output'];
  width: Scalars['Float']['output'];
};

export type ProductFilter = {
  brand?: InputMaybe<Scalars['String']['input']>;
  brand_neq?: InputMaybe<Scalars['String']['input']>;
  colour?: InputMaybe<Scalars['String']['input']>;
  colour_neq?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_neq?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  height_neq?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  img_url?: InputMaybe<Scalars['String']['input']>;
  img_url_neq?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  length_gt?: InputMaybe<Scalars['Float']['input']>;
  length_gte?: InputMaybe<Scalars['Float']['input']>;
  length_lt?: InputMaybe<Scalars['Float']['input']>;
  length_lte?: InputMaybe<Scalars['Float']['input']>;
  length_neq?: InputMaybe<Scalars['Float']['input']>;
  model_code?: InputMaybe<Scalars['String']['input']>;
  model_code_neq?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  power?: InputMaybe<Scalars['String']['input']>;
  power_neq?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  price_gt?: InputMaybe<Scalars['Int']['input']>;
  price_gte?: InputMaybe<Scalars['Int']['input']>;
  price_lt?: InputMaybe<Scalars['Int']['input']>;
  price_lte?: InputMaybe<Scalars['Int']['input']>;
  price_neq?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  quantity_gt?: InputMaybe<Scalars['Int']['input']>;
  quantity_gte?: InputMaybe<Scalars['Int']['input']>;
  quantity_lt?: InputMaybe<Scalars['Int']['input']>;
  quantity_lte?: InputMaybe<Scalars['Int']['input']>;
  quantity_neq?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
  weight_gt?: InputMaybe<Scalars['Int']['input']>;
  weight_gte?: InputMaybe<Scalars['Int']['input']>;
  weight_lt?: InputMaybe<Scalars['Int']['input']>;
  weight_lte?: InputMaybe<Scalars['Int']['input']>;
  weight_neq?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  width_neq?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductInput = {
  brand: Scalars['String']['input'];
  colour: Scalars['String']['input'];
  description: Scalars['String']['input'];
  height: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
  img_url: Scalars['String']['input'];
  length: Scalars['Float']['input'];
  model_code: Scalars['String']['input'];
  name: Scalars['String']['input'];
  power: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  weight: Scalars['Int']['input'];
  width: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  Product?: Maybe<Product>;
  _allProductsMeta?: Maybe<ListMetadata>;
  allProducts?: Maybe<Array<Maybe<Product>>>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type Query_AllProductsMetaArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', allProducts?: Array<{ __typename?: 'Product', id: string, name: string } | null> | null };


export const ProductsDocument = gql`
    query Products {
  allProducts {
    id
    name
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export function useProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsSuspenseQueryHookResult = ReturnType<typeof useProductsSuspenseQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;