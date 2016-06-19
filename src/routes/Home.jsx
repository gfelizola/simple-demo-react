import React from 'react';

import { Link } from 'react-router';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row center-xs">
                <h1>Home</h1>
                <Link to="/other">Go to other page</Link>
            </div>
        );
    }
}