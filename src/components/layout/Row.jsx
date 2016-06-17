import React from 'react';

class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let rowClass = `row ${this.props.vAlign} ${this.props.hAlign}`;

        return (<div className={rowClass}>
            { this.props.children }
        </div>);
    }
}

Row.propTypes = {
    vAlign: React.PropTypes.string,
    hAlign: React.PropTypes.string,
};
Row.defaultProps = {
    vAlign: "start-xs",
    hAlign: "top-xs",
};

export default Row;