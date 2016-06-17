import Alt from 'utils/alt'
import Api from 'utils/api'
import CRUDActions from './CRUDActions'

class ProductsActions extends CRUDActions {

    constructor() {
        super(Api.products);
    }

}

export default Alt.createActions(ProductsActions);