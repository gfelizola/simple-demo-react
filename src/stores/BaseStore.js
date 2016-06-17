import alt from 'utils/alt';

class BaseStore {

    constructor(actions) {

        // This is the transient state for caching lists.
        // Our read method that Views will call or chunck data cache.
        // initially designed to be used with pagination
        this._lastStatus    = null;
        this._currentStatus = null;
        this.err            = {};
        this._action        = actions;

        this.on('beforeEach', (data) => {
            if (!this.actionListeners[data.payload.action]) {
                return ;
            }

            this._currentStatus = data.payload.action;

        })
        this.on('afterEach', (data) => {

            if (!this.actionListeners[data.payload.action]) {
                return;
            }

            this._lastStatus = data.payload.action;
        })

        this.on('init', this._configHelpers);

        this._configHelpers();
        this._bindCommonActions();
    }

    _configHelpers(){
        this.is = (status) => {

            let ret = (!Array.isArray(status)) ?
                         (this._currentStatus === status)
                         : status.some((st) => this._currentStatus === st);

            return ret;
        }

        this.isNot = (status) => {
            return !this.is(status);
        }

        this.was = (status) => {

            let ret = (!Array.isArray(status)) ?
                         (this._lastStatus === status)
                         : status.some((st) => this._lastStatus === st);

            return ret;
        }

        this.wasNot = (status) => {
            return !this.was(status);
        }
    }

    _bindCommonActions() {
        try {
            let actionsName = this.displayName.replace('Store','Actions');
            let actions = this._action || require('actions/'+actionsName);

            this.bindAction(actions.LOADING, this.loading);
            this.bindAction(actions.ERROR, this.error);

        } catch(e) {

        }
    }

    loading() {}

    _dispatchError(err) {
        this.setState({err});
    }

    _connectionErrorCallback(){
        window.location.reload();
    }

    error(err) {
        console.log( "BaseStore.error", err );
        this.err = err;
    }
}

export default BaseStore;
