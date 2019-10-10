import React from 'react';
import { ApolloProvider } from 'react-apollo-hooks';

import { graphQlClient } from './config';
import Welcome from './pages/Welcome';

const Root = () => (
  <ApolloProvider client={graphQlClient}>
    <Welcome/>
  </ApolloProvider>
);

export default Root;
