'use strict';

import alt from '../utils/alt';
import auth from '../utils/auth';
import LoginActions from '../actions/login-actions';
import BaseStore from './base-store';

class LoginStore extends BaseStore {
	constructor() {
		super(LoginActions);

		this.user = {};
		this.bindListeners({
			login: LoginActions.LOGIN,
			logout: LoginActions.LOGOUT
		});
	}

	login(payload) {
		this.user = payload;
	}

	logout() {
		this.user = null;
		auth.removeToken();
	}
}

export default alt.createStore(LoginStore, 'LoginStore');
