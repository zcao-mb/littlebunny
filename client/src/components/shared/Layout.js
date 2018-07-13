import './layout.css';

import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
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