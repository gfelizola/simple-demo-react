import React        from 'react';

import Menu         from 'components/Menu';
import Layout       from 'components/layout';
import LoginStore   from 'stores/LoginStore';
import LoginActions from 'actions/LoginActions';

import { Card, CardTitle, CardText, CardActions, TextField, RaisedButton } from 'material-ui';

const { Row, Col } = Layout;

export default class Login extends React.Component {
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
        console.log("Login change", store._currentStatus );
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