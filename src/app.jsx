import React                from 'react';
import { render }           from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Title from 'components/Title';

injectTapEventPlugin();

render(<h1>It Works!</h1>, document.getElementById('app'));
