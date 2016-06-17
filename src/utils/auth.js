import Cookie from 'utils/cookie';

Cookie.defaults.expires = 10;
Cookie.defaults.secure  = false;

export default {
    isAuthenticated() {
        return this.getToken() !== undefined;
    },

    getToken() {
        return Cookie.get('token');
    },

    setToken(token) {
        Cookie.set('token', token);
    },

    removeToken() {
        Cookie.remove('token');
    },

    getLogin() {
        return Cookie.get('login');
    },

    setLogin(login) {
        Cookie.set('login', login);
    },
}
