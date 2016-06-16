import React from 'react';

import Menu from 'components/Menu';
import Layout from 'components/layout';

import { Card, CardTitle, CardText, TextField, RaisedButton } from 'material-ui';

const { Row, Col } = Layout;

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    _handleSubmit = () => {
        let { username, password } = this.refs;

        let user = username.getValue();
        let pass = password.getValue();

        if ( user.length && pass.length ) {
            //Call API to validate
        }
    }

    render() {
        return (<Row align="center-xs">
            <Col sm={4}>
                <Card className="start-xs">
                    <CardTitle title="login" />
                    <CardText>
                        <TextField ref="username" floatingLabelText="Username" fullWidth={true} autoFocus={true} />
                        <TextField ref="password" floatingLabelText="Password" type="password" fullWidth={true} />

                        <RaisedButton label="Enter" primary={true} onTouchTap={ this._handleSubmit } />
                    </CardText>
                </Card>
            </Col>
        </Row>);
    }
}