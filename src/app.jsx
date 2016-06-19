import React                from 'react';
import { render }           from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Title from 'components/Title';

injectTapEventPlugin();

render(<Title text="Mercado Livre" />, document.getElementById('app'));
