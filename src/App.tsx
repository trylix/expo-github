import React from 'react';
import { Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import Routes from '~/routes';

import { UserProvider } from '~/providers/user';

import history from '~/services/history';
import apollo from '~/services/apollo';

import GlobalStyle from '~/styles/global';

function App(): JSX.Element {
  return (
    <ApolloProvider client={apollo}>
      <UserProvider>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
