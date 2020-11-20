// Import libraries
import React from 'react';
import { NavLink } from 'react-router-dom';

// Display Nav links to 3 default topics
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