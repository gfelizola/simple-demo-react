import React from 'react';
import { withRouter } from 'react-router';

import Menu from 'components/Menu';
import Layout from 'components/layout';

import { Card, CardTitle, CardText, CardActions, TextField, SelectField, MenuItem, RaisedButton, FlatButton } from 'material-ui';

const { Row, Col } = Layout;

import api from 'utils/api';

class ProductsHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {brand: null};
    }

    _handleChange = (event, index, brand) => this.setState({brand});
    _handleCancel = () => this.props.router.replace('/products');

    _handleSubmit = () => {
        let { username, password } = this.refs;

        let user = username.getValue();
        let pass = password.getValue();

        if ( user.length && pass.length ) {
            //Call API to validate

            api.login({ username: user, password: pass}).then(data => {
                console.log('Logado', data);
            }).catch( error => {
                console.log('Login error', error);
            })
        }
    }

    render() {
        return (<Row hAlign="center-xs">
            <Col sm={6}>
                <Card className="start-xs">
                    <CardTitle title="Cadastro / Edição de produtos" />
                    <CardText>
                        <TextField ref="name" floatingLabelText="Nome do produto" fullWidth={true} autoFocus={true} />

                        <SelectField
                            floatingLabelText="Marca"
                            value={this.state.brand}
                            onChange={this._handleChange}
                            fullWidth={true}>
                            <MenuItem value={1} primaryText="Marca 1" />
                        </SelectField>

                    </CardText>
                    <CardActions className="end-xs">
                        <RaisedButton label="Salvar" secondary={true} onTouchTap={ this._handleSubmit } />
                        <FlatButton label="Cancelar" secondary={true} onTouchTap={ this._handleCancel } />
                    </CardActions>
                </Card>
            </Col>
        </Row>);
    }
}

export default withRouter( ProductsHome );