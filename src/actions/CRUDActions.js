import RestClient  from 'utils/api';
import BaseActions from 'actions/BaseActions';

class CRUDActions extends BaseActions {

    constructor(res) {
        super();

        if (!res) throw "Resource undefined.";

        this.resource = res;

        this.generateActions('new');
    }

    _fetch (method) {

        let id = '', body = '';

        if (typeof arguments[1] == 'number' || typeof arguments[1] == 'string') {
            id = arguments[1];
        }

        if (typeof arguments[1] == 'object' || typeof arguments[2] == 'object') {
            body = typeof arguments[1] == 'object' ? arguments[1] : arguments[2];
        }

        let loadingID = this.loading.defer();

        return new Promise((resolve, reject) => {
            let res = RestClient(this.resource);
            if ( id ) res = res(id);

            res[method](body)
                .then(payload => {
                    clearTimeout(loadingID);
                    resolve(payload);
                })
                .catch((err)=> {
                    reject(err);
                });
        })
    }

    create(ent) {
        return dispatch => this._fetch('post', ent).then(dispatch).catch(this.error);
    }

    read(query) {
        return dispatch => {
            this.new.defer();
            if (typeof query == 'number' || typeof query == 'string') {
                this._fetch('get', query).then(dispatch).catch(this.error);
            } else {
                this._fetch('get').then(dispatch).catch(this.error);
            }
        }
    }

    update(ent) {
        return dispatch => this._fetch('put', ent.id, ent).then(dispatch).catch(this.error);
    }

    delete(ent) {
        return dispatch => this._fetch('delete', ent.id, ent)
            .then(() => {
                dispatch( {id: ent.id } )
            })
            .catch(this.error);
    }
}

export default CRUDActions
