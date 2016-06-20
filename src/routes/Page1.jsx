import React from 'react';
import { Link } from 'react-router';

class Page1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row center-xs">
                <h1>Other page</h1>

                <Link to="/">Back to home</Link>
            </div>
        );
    }
}

export default Page1