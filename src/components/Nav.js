// Import libraries
import { render } from '@testing-library/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/naruto">Naruto</NavLink></li>
                <li><NavLink to="/fitness">Fitness</NavLink></li>
                <li><NavLink to="/supreme">Supreme</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav