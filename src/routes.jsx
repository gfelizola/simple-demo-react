import React from 'react';

import Main  from 'routes/Main';
import Login from 'routes/Login';
import Home  from 'routes/Home';

import Auth  from 'utils/auth';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

/*
p4-validate
*/
function validateLogin() {

}

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} onEnter={validateLogin} />
            <Route path="login" component={Login} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
);