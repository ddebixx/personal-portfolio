import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetTechQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTechQuery = { __typename?: 'Query', techstacks: Array<{ __typename?: 'Techstack', technologyTitle: string }> };


export const GetTechDocument = gql`
    query GetTech {
  techstacks {
    technologyTitle
  }
}
    `;

/**
 * __useGetTechQuery__
 *
 * To run a query within a React component, call `useGetTechQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTechQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTechQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTechQuery(baseOptions?: Apollo.QueryHookOptions<GetTechQuery, GetTechQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTechQuery, GetTechQueryVariables>(GetTechDocument, options);
      }
export function useGetTechLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTechQuery, GetTechQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTechQuery, GetTechQueryVariables>(GetTechDocument, options);
        }
export function useGetTechSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTechQuery, GetTechQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTechQuery, GetTechQueryVariables>(GetTechDocument, options);
        }
export type GetTechQueryHookResult = ReturnType<typeof useGetTechQuery>;
export type GetTechLazyQueryHookResult = ReturnType<typeof useGetTechLazyQuery>;
export type GetTechSuspenseQueryHookResult = ReturnType<typeof useGetTechSuspenseQuery>;
export type GetTechQueryResult = Apollo.QueryResult<GetTechQuery, GetTechQueryVariables>;