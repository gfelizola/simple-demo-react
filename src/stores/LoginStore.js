import Alt          from 'utils/alt';
import auth         from 'utils/auth';
import BaseStore    from 'stores/BaseStore';
import LoginActions from 'actions/LoginActions';

class LoginStore extends BaseStore {

    constructor() {
        super();

        this.user = {};
        this.bindListeners({
            login  : LoginActions.LOGIN,
            logout : LoginActions.LOGOUT,
        });
    }

    login(payload) {
        this.user = payload;
    }

    logout(ent) {
        this.user = null;
        Auth.removeToken();
    }
}

export default Alt.createStore(LoginStore, 'LoginStore');
