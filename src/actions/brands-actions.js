'use strict';

import alt from '../utils/alt';
import CRUDActions from './crud-actions';

class BrandsActions extends CRUDActions {
	constructor() {
		super('brands');
	}
}

export default alt.createActions(BrandsActions);
