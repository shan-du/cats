import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Cats from './containers/Cats';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Cats}/>
  </Route>
);
