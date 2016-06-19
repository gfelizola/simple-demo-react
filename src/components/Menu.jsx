import React          from 'react';
import { withRouter } from 'react-router';

import { AppBar, Drawer, IconButton, IconMenu, MenuItem } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    _handleToggle = () => this.setState({open: !this.state.open});

    _handleMenuItem = path => {
        this.setState({open: false}, () => {
            this.props.router.push(path)
        });
    }

    render() {
        return (<div>
            <AppBar
                title="Meu App React"
                onLeftIconButtonTouchTap={this._handleToggle}
                iconElementRight={<IconButton><MoreVertIcon /></IconButton>}
                />

            <Drawer
                open={this.state.open}
                docked={false}
                onRequestChange={this._handleToggle.bind(this, false)}>
                <MenuItem onTouchTap={ this._handleMenuItem.bind(this, 'home') }>Home</MenuItem>
                <MenuItem onTouchTap={ this._handleMenuItem.bind(this, 'other') }>Other page</MenuItem>
            </Drawer>
        </div>)
    }
}

export default withRouter(Menu);