import Alt         from 'utils/alt'
import Api         from 'utils/api';
import Auth        from 'utils/auth';
import BaseActions from 'actions/BaseActions';

class LoginActions extends BaseActions {

    login(credentials) {
        return dispatch => Api('login', {responseAs:"response"})
            .post(credentials)
            .then(response => {
                let token = response.headers.get('x-auth-token');
                Auth.setToken(token);

                dispatch();
            }, this.error);
    }

    logout() {
        return dispatch => Api.logout().then(dispatch).catch(this.error);
    }
}

export default Alt.createActions(LoginActions);