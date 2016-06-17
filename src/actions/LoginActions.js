import Alt         from 'utils/alt'
import Api         from 'utils/api';
import BaseActions from 'actions/BaseActions';

class LoginActions extends BaseActions {

    login(credentials) {
        console.log("LoginActions", credentials);
        return dispatch => Api.login(credentials).then(dispatch).catch(this.error);
    }

    logout() {
        return dispatch => Api.logout().then(dispatch).catch(this.error);
    }
}

export default Alt.createActions(LoginActions);