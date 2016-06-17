import React          from 'react';
import { withRouter } from 'react-router';

import Layout         from 'components/layout';
const { Row, Col }    = Layout;

import { Card, CardTitle, FloatingActionButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import ContentAdd      from 'material-ui/svg-icons/content/add';

import ProductsStore   from 'stores/ProductsStore';
import ProductsActions from 'actions/ProductsActions';


class ProductsHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount = () => {
        ProductsStore.listen( this.onChange )
        ProductsActions.read();
    }

    onChange = store => {
        if ( store.is( ProductsActions.READ ) ) {
            this.setState({
                products: store.products
            });
        }
    }

    _handleAdd = () => {
        this.props.router.push("/products/new");
    }

    render() {
        let showCheckboxes = true;

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
                            </TableRow>)
                            }) }
                        </TableBody>
                    </Table>
                </Card>

                <FloatingActionButton secondary={true} style={{position:'fixed', bottom:16, right:16}} onTouchTap={ this._handleAdd }>
                  <ContentAdd />
                </FloatingActionButton>
            </Col>
        </Row>);
    }
}

export default withRouter(ProductsHome);