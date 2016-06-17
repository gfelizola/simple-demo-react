import Alt             from 'utils/alt'
import ProductsActions from 'actions/ProductsActions'
import CRUDStore       from 'stores/CRUDStore'

class ProductsStore extends CRUDStore {
    constructor() {
        super(ProductsActions, 'product');
    }
}

export default Alt.createStore(ProductsStore, 'BrandsStore');