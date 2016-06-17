import _          from 'lodash';
import alt        from 'utils/alt';
import BaseStore  from 'stores/BaseStore'
import capitalize from 'utils/capitalize';


class CRUDStore extends BaseStore {

    constructor(actions, entName, entNamePlural) {
        super(actions);

        if (!actions) {
            throw new Error("Invalid action reference passed in");
        }
        if (!entName) {
            throw new Error("Entity name undefined");
        }

        entNamePlural = typeof arguments[2] == "string" ? entNamePlural : `${entName}s`;

        this._entName        = entName;
        this._entNamePlural  = entNamePlural;
        this[entName]        = {};
        this[entNamePlural]  = [];

        this.bindListeners({
            created : actions.CREATE,
            readed  : actions.READ,
            updated : actions.UPDATE,
            deleted : actions.DELETE,
            new     : actions.NEW
        });
    }

    readed(payload) {
        let entName = this._entName;
        let entNamePlural = this._entNamePlural;

        if( Array.isArray(payload.data) ) {
            this[entNamePlural] = _.clone(payload.data);
        } else {
            this[entName] = payload;
        }
    }

    created(ent) {
        let entName = this._entName;
        let entNamePlural = this._entNamePlural;
        this[entName] = ent;
        this[entNamePlural].push(ent);
    }

    new(entNew) {
        this[ this._entName ] = Object.assign({}, entNew);
    }

    updated(ent) {
        let entName = this._entName;
        let entNamePlural = this._entNamePlural;

        let index = _.findIndex( this[entNamePlural], ['id', ent.id]);

        this[entName] = ent;
        this[entNamePlural][index] = _.clone(ent);
    }

    deleted( ent ) {
        let entName = this._entName;
        let entNamePlural = this._entNamePlural;

        let index = _.findIndex( this[entNamePlural], ['id', ent.id]);

        if ( index >= 0 ) {
            this[entNamePlural].splice(index, 1);
        }
    }
}

export default CRUDStore;
