import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { MockedProvider } from 'react-apollo/test-utils';
import { ApolloProvider } from 'react-apollo-hooks';
import gql from 'graphql-tag';

import { graphQlClient } from '../../config';
import useCounter from './';

const HELLO = gql`
    {
        hello
    }
`;

const mocks = [
  {
    request: {
      query: HELLO,
    },
    result: {
      data: {
        hello: 'Hello World',
      },
    },
  },
];

it('should increment counter', () => {
  const wrapper = ({ children }) => (
    <MockedProvider mocks={mocks} addTypename={false}>
      <ApolloProvider client={graphQlClient}>
        {children}
      </ApolloProvider>
    </MockedProvider>
  );
  const { result } = renderHook(() => useCounter(), { wrapper });

  act(() => {
    result.current.increment();
  });

  console.log(result.current.data);

  expect(result.current.count)
    .toBe(1);
});
