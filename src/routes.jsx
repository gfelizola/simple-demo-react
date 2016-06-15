import React from 'react';

import Main  from 'routes/Main';
import Login from 'routes/Login';
import Home  from 'routes/Home';

import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/login" component={Login} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
);