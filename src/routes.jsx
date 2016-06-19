import React from 'react';

import Main  from 'routes/Main';
import Home  from 'routes/Home';
import Other from 'routes/Page1';

import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="other" component={Other} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
);