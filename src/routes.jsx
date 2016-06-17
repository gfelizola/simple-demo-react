import React from 'react';

import Main  from 'routes/Main';
import Login from 'routes/Login';
import Home  from 'routes/Home';

import ProductsHome  from 'routes/products/Home';
import ProductsForm  from 'routes/products/Form';

import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/products" component={ProductsHome} />
            <Route path="/products/new" component={ProductsForm} />
            <Route path="/products/edit/:id" component={ProductsForm} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
);