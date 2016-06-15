import React    from 'react';
import { withRouter } from 'react-router';

import { AppBar, Drawer, IconButton, IconMenu, MenuItem } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose  = () => this.setState({open: false});

    handleMenuItem = path => {
        this.setState({open: false}, () => {
            this.props.router.push(path)
        });
    }

    render() {
        return (<div>
            <AppBar
                title="Meu App React"
                onLeftIconButtonTouchTap={this.handleToggle}
                iconElementRight={<IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <MenuItem primaryText="Help" />
                    <MenuItem primaryText="Sign out" />
                  </IconMenu>
                }
            />

            <Drawer
                open={this.state.open}
                docked={false}
                onRequestChange={this.handleToggle.bind(this, false)}>
                <MenuItem onTouchTap={ this.handleMenuItem.bind(this, 'home') }>Home</MenuItem>
                <MenuItem onTouchTap={ this.handleMenuItem.bind(this, 'login') }>Login</MenuItem>
            </Drawer>
        </div>)
    }
}

export default withRouter(Menu);