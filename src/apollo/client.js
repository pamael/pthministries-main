import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: '/content/graphql',
  //uri: 'http://pth.xampp.local/content/graphql',
  //uri: 'http://presenttruthandhealth.co.uk/',
  fetch
});
