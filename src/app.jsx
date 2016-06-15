import React                from 'react';
import { render }           from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes               from "./routes";

injectTapEventPlugin();

render(routes, document.getElementById('app'));
