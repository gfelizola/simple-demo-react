'use strict';

import React from 'react';
import {withRouter} from 'react-router';

import {AppBar, Drawer, IconButton, IconMenu, MenuItem} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import auth from '../utils/auth';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	_handleToggle = () => this.setState({
		open: !this.state.open
	});

	_handleMenuItem = path => {
		this.setState({
			open: false
		}, () => {
			this.props.router.push(path)
		});
	}

	_handleLogout = path => {
		auth.removeToken();
		this.props.router.push('/login');
	}

	render() {
		return (
			<div>
				<AppBar
					title="Meu App React"
					onLeftIconButtonTouchTap={this._handleToggle}
					iconElementRight={
						<IconMenu
							iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
							targetOrigin={{
								horizontal: 'right',
								vertical: 'top'
							}}
							anchorOrigin={{
								horizontal: 'right',
								vertical: 'top'
							}}>
							<MenuItem primaryText="Help" />
							<MenuItem primaryText="Logout" onTouchTap={this._handleLogout} />
						</IconMenu>
					}
				/>
				<Drawer
					open={this.state.open}
					docked={false}
					onRequestChange={this._handleToggle.bind(this, false)}>
						<MenuItem onTouchTap={ this._handleMenuItem.bind(this, 'home') }>Home</MenuItem>
						<MenuItem onTouchTap={ this._handleMenuItem.bind(this, 'products') }>Produtos</MenuItem>
				</Drawer>
			</div>)
	}
}

export default withRouter(Menu);
