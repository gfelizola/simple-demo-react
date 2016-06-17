import React from 'react';
import { withRouter } from 'react-router';

import Menu from 'components/Menu';
import Layout from 'components/layout';

import { Card, CardTitle, FloatingActionButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

const { Row, Col } = Layout;

import api from 'utils/api';

class ProductsHome extends React.Component {
    constructor(props) {
        super(props);
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
                                <TableHeaderColumn>Marca</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={ showCheckboxes }
                            showRowHover={true}
                            >
                            <TableRow>
                                <TableRowColumn>1</TableRowColumn>
                                <TableRowColumn>John Smith</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>2</TableRowColumn>
                                <TableRowColumn>Randal White</TableRowColumn>
                                <TableRowColumn>Unemployed</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>3</TableRowColumn>
                                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>4</TableRowColumn>
                                <TableRowColumn>Steve Brown</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                            </TableRow>
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