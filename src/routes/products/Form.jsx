import React           from 'react';
import { withRouter }  from 'react-router';

import Menu            from 'components/Menu';
import Layout          from 'components/layout';
import ProductsStore   from 'stores/ProductsStore';
import ProductsActions from 'actions/ProductsActions';
import BrandsStore     from 'stores/BrandsStore';
import BrandsActions   from 'actions/BrandsActions';

import { Card, CardTitle, CardText, CardActions, TextField, SelectField, MenuItem, RaisedButton, FlatButton } from 'material-ui';

const { Row, Col } = Layout;

class ProductsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: {},
            brands: [],
            product: { name: "" },
        };
    }

    componentDidMount = () => {
        ProductsStore.listen( this.onChange );
        BrandsStore.listen( this.onChange );
        ProductsActions.read( this.props.params.id );
        BrandsActions.read();
    }

    componentWillUnmount = () => {
        ProductsStore.unlisten( this.onChange );
    }

    onChange = store => {
        if ( store.is( ProductsActions.READ ) ) {
            this.setState({
                product: store.product,
                brand: store.product.brandId
            });
        } else if ( store.is( BrandsActions.READ ) ) {
            this.setState({ brands: store.brands });
        } else if ( store.is([ ProductsActions.CREATE, ProductsActions.UPDATE ]) ) {
            this.props.router.push("/products");
        }
    }

    _handleCancel = () => this.props.router.replace('/products');
    _handleChangeBrand = (event, index, brand) => this.setState({brand});
    _handleChangeName = (event) => {
        let { product } = this.state;
        product.name = event.target.value;
        this.setState({ product });
    }

    _handleSubmit = () => {
        let data = this.state.product;
        data.brandId = this.state.brand;

        if ( data.id ) {
            ProductsActions.update(data);
        } else {
            ProductsActions.create(data);
        }
    }

    render() {
        return (<Row hAlign="center-xs">
            <Col sm={6}>
                <Card className="start-xs">
                    <CardTitle title="Cadastro / Edição de produtos" />
                    <CardText>
                        <TextField
                            floatingLabelText="Nome do produto"
                            fullWidth={true}
                            autoFocus={true}
                            value={ this.state.product.name }
                            onChange={ this._handleChangeName } />

                        <SelectField
                            floatingLabelText="Marca"
                            value={this.state.brand}
                            onChange={this._handleChangeBrand}
                            fullWidth={true}>
                            { this.state.brands.map( b => {
                                return <MenuItem key={ b.id } value={ b.id } primaryText={ b.name } />
                            }) }

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

export default withRouter( ProductsForm );