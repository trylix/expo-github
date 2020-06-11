import React from 'react';
import { Switch } from 'react-router-dom';

import Route from '~/routes/Route';

import Main from '~/pages/Main';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
    </Switch>
  );
};

export default Routes;
