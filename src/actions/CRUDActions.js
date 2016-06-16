import BaseActions from './BaseActions'

class CRUDActions extends BaseActions {

    constructor(resource) {

        super();

        if (!resource) {
            throw "Resource undefined.";
        }
        this.resource = resource;

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
            this.resource(id)[method](body)
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

    read(id) {
        return dispatch => {
            this.new.defer();
            if (typeof id == 'number' || typeof id == 'string') {
                this._fetch('get', id).then(dispatch).catch(this.error);
            } else {
                this._fetch('get').then(dispatch).catch(this.error);
            }
        }
    }

    update(ent) {
        return dispatch => this._fetch('put', ent.id, ent).then(dispatch).catch(this.error);
    }

    delete(ent) {
        return dispatch => this._fetch('put', ent.id, ent).then(dispatch).catch(this.error);
    }
}

export default CRUDActions
