import Fenix from 'fenixjs';
import Auth from 'utils/auth';

const url = "http://localhost:3040";

const defaults = {
    requestHeaders: {
        "Content-Type": "application/json3"
    }
};

const config = {
    login: {
        methods: 'POST',
        options: {
            responseHeaders: {
                set "X-AUTH-TOKEN" (token) {
                    Auth.setToken(token);
                }
            }
        }
    },
    logout: {
        methods: 'POST',
        options: {
            requestHeaders: {
                get "X-AUTH-TOKEN" () {
                    Auth.getToken();
                }
            }
        }
    },
    products: {
        methods: '*',
        options: {
            requestHeaders: {
                get "X-AUTH-TOKEN" (){
                    Auth.getToken();
                }
            }
        }
    },
    brands: {
        methods: '*',
        options: {
            requestHeaders: {
                get "X-AUTH-TOKEN" (){
                    Auth.getToken();
                }
            }
        }
    }
}

const api = new Fenix({ url, config, defaults });

export default api;
