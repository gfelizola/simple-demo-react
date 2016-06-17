import Alt           from 'utils/alt'
import BrandsActions from 'actions/BrandsActions'
import CRUDStore     from 'stores/CRUDStore'

class BrandsStore extends CRUDStore {

    constructor() {
        super(BrandsActions, 'brand');
    }
}

export default Alt.createStore(BrandsStore, 'BrandsStore');