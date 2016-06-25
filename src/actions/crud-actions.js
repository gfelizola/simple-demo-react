'use strict';

import restClient from '../utils/api';
import BaseActions from './base-actions';

class CRUDActions extends BaseActions {
	constructor(res) {
		super();
		if (!res) {
			throw new Error('Resource undefined.');
		}

		this.resource = res;
		this.generateActions('new');
	}

	_fetch(method, ...args) {
		let id = typeof args[0] === 'number' || typeof args[0] === 'string' ? args[0] : '';
		let body = typeof args[0] === 'object' ? args[0] : args[1] || '';

		let loadingID = this.loading.defer();
		let res = restClient(this.resource);

		if (id) {
			res = res(id);
		}

		return res[method](body)
			.then(payload => {
				clearTimeout(loadingID);
				return Promise.resolve(payload);
			})
			.catch(err => Promise.reject(err));
	}

	create(ent) {
		return dispatch => this._fetch('post', ent).then(dispatch).catch(this.error);
	}

	read(query) {
		return dispatch => {
			this.new.defer();
			if (typeof query === 'number' || typeof query === 'string') {
				this._fetch('get', query).then(dispatch).catch(this.error);
			} else {
				this._fetch('get').then(dispatch).catch(this.error);
			}
		};
	}

	update(ent) {
		return dispatch => this._fetch('put', ent.id, ent).then(dispatch).catch(this.error);
	}

	delete(ent) {
		return dispatch => this._fetch('delete', ent.id, ent)
			.then(() => {
				dispatch({
					id: ent.id
				});
			})
			.catch(this.error);
	}
}

export default CRUDActions;
