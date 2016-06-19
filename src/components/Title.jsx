import React from 'react';

class Title extends React.Component {
	render (){
		return <h1>{ this.props.text }</h1>
	}
}

Title.propTypes = {
	text: React.PropTypes.string
};

Title.defaultProps = {
	text: "Title"
};

export default Title;