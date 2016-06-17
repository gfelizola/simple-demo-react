import React                from 'react';
import { withRouter, Link } from 'react-router';

import Layout               from 'components/layout';
import ProductsStore        from 'stores/ProductsStore';
import ProductsActions      from 'actions/ProductsActions';

import AddIcon              from 'material-ui/svg-icons/content/add';
import EditIcon             from 'material-ui/svg-icons/image/edit';
import DelIcon              from 'material-ui/svg-icons/action/delete';
import { Card, CardTitle, FloatingActionButton, IconButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import { grey700, red400 } from 'material-ui/styles/colors';

const { Row, Col }    = Layout;

class ProductsHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount = () => {
        ProductsStore.listen( this.onChange );
        ProductsActions.read('?_expand=brand');
    }

    componentWillUnmount = () => {
        ProductsStore.unlisten( this.onChange );
    }

    onChange = store => {
        if ( store.is([ ProductsActions.READ, ProductsActions.DELETE ]) ) {
            this.setState({
                products: store.products
            });
        }
    }

    _handleAdd = () => {
        this.props.router.push("/products/new");
    }

    _handleEdit = ( product, event ) => {
        this.props.router.push("/products/edit/" + product.id);
    }

    _handleDelete = ( product, event ) => {
        // this.props.router.push("/products/new");
        ProductsActions.delete( product );
    }

    render() {
        let showCheckboxes = false;

        return (<Row hAlign="center-xs">
            <Col sm={8}>
                <Card className="start-xs">
                    <CardTitle title="Produtos" />
                    <Table selectable={showCheckboxes} multiSelectable={showCheckboxes}>
                        <TableHeader
                            displaySelectAll={showCheckboxes}
                            adjustForCheckbox={showCheckboxes}>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Nome</TableHeaderColumn>
                                <TableHeaderColumn>Marca</TableHeaderColumn>
                                <TableHeaderColumn>Ações</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={ showCheckboxes }
                            showRowHover={true}
                            >
                            { this.state.products.map(( p, i ) => {
                                return (<TableRow key={i}>
                                <TableRowColumn>{ p.id }</TableRowColumn>
                                <TableRowColumn>{ p.name }</TableRowColumn>
                                <TableRowColumn>{ p.brand ? p.brand.name : '-' }</TableRowColumn>
                                <TableRowColumn>
                                    <IconButton onTouchTap={ this._handleEdit.bind( this, p ) }><EditIcon color={ grey700 } /></IconButton>
                                    <IconButton onTouchTap={ this._handleDelete.bind( this, p ) }><DelIcon color={ grey700 } hoverColor={ red400 } /></IconButton>
                                </TableRowColumn>
                            </TableRow>)
                            }) }
                        </TableBody>
                    </Table>
                </Card>

                <FloatingActionButton secondary={true} style={{position:'fixed', bottom:16, right:16}} onTouchTap={ this._handleAdd }>
                  <AddIcon />
                </FloatingActionButton>
            </Col>
        </Row>);
    }
}

export default withRouter(ProductsHome);