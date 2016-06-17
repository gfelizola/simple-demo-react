import Cookie from 'cookie_js';

let main = Cookie;
if ( Cookie.cookie !== undefined ) main = Cookie.cookie;

export default main;
