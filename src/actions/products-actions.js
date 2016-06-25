'use strict';

import alt from '../utils/alt';
import CRUDActions from './crud-actions';

class ProductsActions extends CRUDActions {
	constructor() {
		super('products');
	}
}

export default alt.createActions(ProductsActions);
