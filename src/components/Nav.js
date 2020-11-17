// Import libraries
import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/naruto">Naruto</NavLink></li>
            <li><NavLInk to="/fitness">Fitness</NavLInk></li>
            <li><NavLink to="/supreme">Supreme</NavLink></li>
        </ul>
    </nav>
}

export default Nav