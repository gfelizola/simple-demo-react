import Alt from 'utils/alt'
import Api from 'utils/api'
import CRUDActions from './CRUDActions'

class BrandsActions extends CRUDActions {

    constructor() {
        super(Api.brands);
    }

}

export default Alt.createActions(BrandsActions);