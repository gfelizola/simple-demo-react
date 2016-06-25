'use strict';

class BaseStore {
	constructor(actions) {
		// This is the transient state for caching lists.
		// Our read method that Views will call or chunck data cache.
		// initially designed to be used with pagination
		this._lastStatus = null;
		this._currentStatus = null;
		this._action = actions;
		this.err = {};

		this.on('beforeEach', data => {
			if (!this.actionListeners[data.payload.action]) {
				return;
			}
			this._currentStatus = data.payload.action;
		});

		this.on('afterEach', data => {
			if (!this.actionListeners[data.payload.action]) {
				return;
			}
			this._lastStatus = data.payload.action;
		});

		this.on('init', this._configHelpers);

		this._configHelpers();
		this._bindCommonActions();
	}

	_configHelpers() {
		this.is = status => Array.isArray(status) === false ? this._currentStatus === status : status.some(st => this._currentStatus === st);
		this.isNot = status => !this.is(status);
		this.was = status => Array.isArray(status) === false ? this._lastStatus === status : status.some(st => this._lastStatus === st);
		this.wasNot = status => !this.was(status);
	}

	_bindCommonActions() {
		try {
			let actionsName = this.displayName.replace('Store', 'Actions');
			let actions = this._action || require('actions/' + actionsName);
			this.bindAction(actions.LOADING, this.loading);
			this.bindAction(actions.ERROR, this.error);
		} catch (err) {
			console.log('_bindCommonActions', err);
		}
	}

	loading() {}

	error(err) {
		this.err = err;
		if (err.message && err.response) {
			// Prevent multiple error handles for same response
			if (!err.response.isRead) {
				err.response.isRead = true;
				err.response.json().then(respErr => {
					let errors = respErr.errors;
					if (errors) {
						this.err = errors.map(err => err);
					} else {
						err.message = respErr.message ? respErr.message : err.message;
						this.err = err;
					}
				});
			}
		} else {
			this.err = {
				message: 'Ocorreu um erro inesperado'
			};
		}
	}
}

export default BaseStore;
