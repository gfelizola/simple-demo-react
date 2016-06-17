import Fenix from 'fenixjs';

const url = "https://localhost:3000";

let xAuthToken = "";

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
                    xAuthToken = token;
                }
            }
        }
    },
    products: {
        methods: '*',
        options: {
            requestHeaders: {
                get "X-AUTH-TOKEN" (){
                    return xAuthToken;
                }
            }
        }
    }
}

const api = new Fenix({ url, config, defaults });

export default api;
