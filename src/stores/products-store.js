'use strict';

import alt from '../utils/alt';
import ProductsActions from '../actions/products-actions';
import CRUDStore from './crud-store';

class ProductsStore extends CRUDStore {
	constructor() {
		super(ProductsActions, 'product');
	}
}

export default alt.createStore(ProductsStore, 'BrandsStore');
