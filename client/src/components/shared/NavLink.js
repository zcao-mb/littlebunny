import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <li className="nav-item">
        <Link className="nav-link" to={props.path}>{props.text}</Link>
    </li>
);