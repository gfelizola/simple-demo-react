import React          from 'react';
import { withRouter } from 'react-router';

import Menu           from 'components/Menu';
import Layout         from 'components/layout';
import LoginStore     from 'stores/LoginStore';
import LoginActions   from 'actions/LoginActions';

import { Card, CardTitle, CardText, CardActions, TextField, RaisedButton, Snackbar } from 'material-ui';

const { Row, Col } = Layout;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            snackOpen: false,
            snackMessage: ""
        }
    }

    componentDidMount = () => {
        LoginStore.listen( this.onChange );
    }

    componentWillUnmount = () => {
        LoginStore.unlisten( this.onChange );
    }

    onChange = ( store ) => {
        if ( store.is( LoginActions.LOGIN ) ) {
            const { location } = this.props;

            if (location.state && location.state.nextPathname) {
                this.props.router.replace(location.state.nextPathname)
            } else {
                this.props.router.replace('/')
            }

        } else if ( store.is( LoginActions.ERROR ) && store.err.response.status == 401 ) {
            this.setState({
                snackOpen: true,
                snackMessage: "Usuário ou senha inválidos"
            });
        }
    }

    _handleSubmit = () => {
        let { username, password } = this.refs;

        let user = username.getValue();
        let pass = password.getValue();

        if ( user.length && pass.length ) {
            LoginActions.login({ username: user, password: pass});
        }
    }

    _handleRequestClose = () => {
        this.setState({ snackOpen: false });
    };

    render() {
        return (<Row hAlign="center-xs">
            <Col sm={4}>
                <Card className="start-xs">
                    <CardTitle title="login" />
                    <CardText>
                        <TextField ref="username" floatingLabelText="Username" fullWidth={true} autoFocus={true} />
                        <TextField ref="password" floatingLabelText="Password" type="password" fullWidth={true} />
                    </CardText>
                    <CardActions className="end-xs">
                        <RaisedButton label="Entrar" secondary={true} onTouchTap={ this._handleSubmit } />
                    </CardActions>
                </Card>
            </Col>
            <Snackbar
                open={ this.state.snackOpen }
                message={ this.state.snackMessage }
                autoHideDuration={5000}
                onRequestClose={ this._handleRequestClose }
            />
        </Row>);
    }
}

export default withRouter( Login );