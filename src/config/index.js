import ApolloClient from 'apollo-boost';
import fetch from 'unfetch';

const graphQlClient = new ApolloClient({ uri: 'http://localhost:8081/graphql', fetch });

export {
  graphQlClient,
};
