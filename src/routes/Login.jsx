import React          from 'react';
import { withRouter } from 'react-router';

import Menu           from 'components/Menu';
import Layout         from 'components/layout';
import LoginStore     from 'stores/LoginStore';
import LoginActions   from 'actions/LoginActions';

import { Card, CardTitle, CardText, CardActions, TextField, RaisedButton } from 'material-ui';

const { Row, Col } = Layout;

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        LoginStore.listen( this.onChange );
    }

    componentWillUnmount = () => {
        LoginStore.unlisten( this.onChange );
    }

    onChange = ( store ) => {
        if ( store.is( LoginActions.LOGIN ) ) {
            this.props.router.push('home');
        } else if ( store.is( LoginActions.ERROR ) ) {
            console.log( "Login error", store.err );
        }
    }

    _handleSubmit = () => {
        let { username, password } = this.refs;

        let user = username.getValue();
        let pass = password.getValue();

        if ( user.length && pass.length ) {
            //Call API to validate

            LoginActions.login({ username: user, password: pass});

            // api.login({ username: user, password: pass}).then(data => {
            //     console.log('Logado', data);
            // }).catch( error => {
            //     console.log('Login error', error);
            // })
        }
    }

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
        </Row>);
    }
}

export default withRouter( Login );