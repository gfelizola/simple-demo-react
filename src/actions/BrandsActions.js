import Alt from 'utils/alt'
import Api from 'utils/api'
import CRUDActions from 'actions/CRUDActions'

class BrandsActions extends CRUDActions {

    constructor() {
        super('brands');
    }

}

export default Alt.createActions(BrandsActions);