'use strict';

import alt from '../utils/alt';
import api from '../utils/api';
import auth from '../utils/auth';
import BaseActions from './base-actions';

class LoginActions extends BaseActions {
	login(credentials) {
		return dispatch => api('login', {
			responseAs: 'response'
		})
			.post(credentials)
			.then(response => {
				const token = response.headers.get('x-auth-token');
				auth.setToken(token);

				dispatch();
			}, this.error);
	}

	logout() {
		return dispatch => api.logout().then(dispatch).catch(this.error);
	}
}

export default alt.createActions(LoginActions);
