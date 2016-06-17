import Alt         from 'utils/alt'
import Api         from 'utils/api';
import BaseActions from 'actions/BaseActions';

class LoginActions extends BaseActions {

    login(credentials) {
        return dispatch => Api.login(credentials).then(dispatch, err => {
            console.log( "Login error", err );
        });
    }

    logout() {
        return dispatch => Api.logout().then(dispatch).catch(this.error);
    }
}

export default Alt.createActions(LoginActions);