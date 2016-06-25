'use strict';

import alt from '../utils/alt';
import BrandsActions from '../actions/brands-actions';
import CRUDStore from './crud-store';

class BrandsStore extends CRUDStore {
	constructor() {
		super(BrandsActions, 'brand');
	}
}

export default alt.createStore(BrandsStore, 'BrandsStore');
