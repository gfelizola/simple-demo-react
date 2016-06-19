import React from 'react';

import Main  from 'routes/Main';
import Login from 'routes/Login';
import Home  from 'routes/Home';

import Auth  from 'utils/auth';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

/*===== SNIPPET VALIDA LOGIN NA ROTA =====*/

function validateLogin( nextState, replace ){
    if ( ! Auth.getToken() ) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
};

/*===== SNIPPET VALIDA LOGIN NA ROTA =====*/

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="login" component={Login} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
);