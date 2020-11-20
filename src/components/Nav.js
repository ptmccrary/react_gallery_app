// Import libraries
import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/naruto">Naruto</NavLink></li>
                <li><NavLink to="/fitness">Fitness</NavLink></li>
                <li><NavLink to="/hypebeast">Hypebeast</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav