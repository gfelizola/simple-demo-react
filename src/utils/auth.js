'use strict';

export default {
	isAuthenticated() {
		return this.getToken() !== undefined;
	},

	getToken() {
		return localStorage.getItem('token');
	},

	setToken(token) {
		localStorage.setItem('token', token);
	},

	removeToken() {
		localStorage.removeItem('token');
	},

	getLogin() {
		return localStorage.getItem('login');
	},

	setLogin(login) {
		localStorage.setItem('login', login);
	}
};
