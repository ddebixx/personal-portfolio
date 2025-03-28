import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clg6idcnc0tde01t3cvzvgg5l/master',
  cache: new InMemoryCache(),
});