'use strict';

import React from 'react';
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router';

import Main from './routes/main';
import Login from './routes/login';
import Home from './routes/home';

import ProductsHome from './routes/products/home';
import ProductsForm from './routes/products/form';

import auth from './utils/auth';

function validateLogin(nextState, replace) {
	if (!auth.getToken()) {
		replace({
			pathname: '/login',
			state: {
				nextPathname: nextState.location.pathname
			}
		});
	}
}

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
