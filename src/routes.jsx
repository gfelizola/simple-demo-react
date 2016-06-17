import React from 'react';

import Main  from 'routes/Main';
import Login from 'routes/Login';
import Home  from 'routes/Home';

import ProductsHome  from 'routes/products/Home';
import ProductsForm  from 'routes/products/Form';

import Auth  from 'utils/auth';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

function validateLogin( nextState, replace ){
    if ( ! Auth.getToken() ) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
};

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} onEnter={ validateLogin } />
            <Route path="login" component={Login} />
            <Route path="products" component={ProductsHome} onEnter={ validateLogin } />
            <Route path="products/new" component={ProductsForm} onEnter={ validateLogin } />
            <Route path="products/edit/:id" component={ProductsForm} onEnter={ validateLogin } />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
);