'use strict';

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Menu from '../components/menu';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<div>
					<Menu />
					<div className="app-container container-fluid">{this.props.children}</div>
				</div>
			</MuiThemeProvider>);
	}
};
