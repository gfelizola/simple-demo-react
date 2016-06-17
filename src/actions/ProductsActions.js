import Alt         from 'utils/alt';
import Auth        from 'utils/auth';
import RestClient  from 'utils/api';
import CRUDActions from 'actions/CRUDActions';

class ProductsActions extends CRUDActions {

    constructor() {
        super('products');
    }

}

export default Alt.createActions(ProductsActions);