import './layout.css';

import React from 'react';
import NavBar from './NavBar';

export default class Layout extends React.Component {

    render() {
        return (
            <div className="app">
                <NavBar />
                {this.props.children}
            </div>
        );
    }
}