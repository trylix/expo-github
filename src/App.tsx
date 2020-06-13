import React from 'react';
import { Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import Routes from '~/routes';

import history from '~/services/history';
import apollo from '~/services/apollo';

import GlobalStyle from '~/styles/global';

function App(): JSX.Element {
  return (
    <ApolloProvider client={apollo}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </ApolloProvider>
  );
}

export default App;
