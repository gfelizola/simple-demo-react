'use strict';

import React from 'react';

class Col extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const colClass = [];

		if (this.props.xsAuto) colClass.push('col-xs');
		if (this.props.smAuto) colClass.push('col-sm');
		if (this.props.mdAuto) colClass.push('col-md');
		if (this.props.lgAuto) colClass.push('col-lg');

		if (this.props.xs > 0) colClass.push(`col-xs-${this.props.xs}`);
		if (this.props.sm > 0) colClass.push(`col-sm-${this.props.sm}`);
		if (this.props.md > 0) colClass.push(`col-md-${this.props.md}`);
		if (this.props.lg > 0) colClass.push(`col-lg-${this.props.lg}`);

		if (this.props.xsOffset > 0) colClass.push(`col-xs-offset-${this.props.xsOffset}`);
		if (this.props.smOffset > 0) colClass.push(`col-sm-offset-${this.props.smOffset}`);
		if (this.props.mdOffset > 0) colClass.push(`col-md-offset-${this.props.mdOffset}`);
		if (this.props.lgOffset > 0) colClass.push(`col-lg-offset-${this.props.lgOffset}`);

		return (<div className={colClass.join(' ')}>{this.props.children}</div>);
	}
}

Col.propTypes = {
	xs: React.PropTypes.number,
	sm: React.PropTypes.number,
	md: React.PropTypes.number,
	lg: React.PropTypes.number,
	xsAuto: React.PropTypes.bool,
	smAuto: React.PropTypes.bool,
	mdAuto: React.PropTypes.bool,
	lgAuto: React.PropTypes.bool,
	xsOffset: React.PropTypes.number,
	smOffset: React.PropTypes.number,
	mdOffset: React.PropTypes.number,
	lgOffset: React.PropTypes.number,
};

Col.defaultProps = {
	xs: 12,
	sm: 0,
	md: 0,
	lg: 0,
	xsAuto: false,
	smAuto: false,
	mdAuto: false,
	lgAuto: false,
	xsOffset: 0,
	smOffset: 0,
	mdOffset: 0,
	lgOffset: 0,
};

export default Col;
