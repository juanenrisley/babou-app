import { useCallback, useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

const HELLO = gql`
    {
        hello
    }
`;

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((x) => x + 1), []);
  const { data, error, loading } = useQuery(HELLO);

  console.log(data, error, loading);

  return {
    data,
    count,
    increment,
  };
}

export default useCounter;
