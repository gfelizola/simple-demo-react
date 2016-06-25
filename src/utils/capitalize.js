'use strict';

function captalize(text) {
	if (text === null) {
		return null;
	}

	if (typeof text !== 'string') {
		throw new TypeError('Must be a string');
	}

	return `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`;
}

export default captalize;
