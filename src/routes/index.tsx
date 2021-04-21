import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { basePath } from 'constants/constants';

import Dashboard from 'pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to={basePath} />
    </Route>
    <Route path={basePath} exact component={Dashboard} />
  </Switch>
);

export default Routes;
