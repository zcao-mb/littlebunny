import './layout.css';

import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

export default props => (
    <div className="app">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">LittleBunny</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <NavLink path="/" text="Home" />
                    <NavLink path="/schedule" text="Schedule" />
                    <NavLink path="/test" text="Test" />
                </ul>
            </div>
        </nav>

        {props.children}
  </div>
);