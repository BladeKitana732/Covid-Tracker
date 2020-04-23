import React from 'react';
import { Link } from 'react-router-dom';
//we use the link component (internally) to ensure we do not render user to another html it will restart everything; so we use links to help attach the right component we want to display to user in VisualDOM 

function Navbar(props) {
    return(
        <nav>
             <Link to="/" className="logo">COVID-Tracker</Link>

             <ul id="navLinks">

                <li><Link to="/Homepage">
                    Form page 
                </Link></li>

                <li><Link to="/Covid-Tracker">
                    Covid Info
                </Link></li>

                <li><Link to="/thirdRoute">
                    thirdRoute
                </Link></li>

             </ul>
        </nav>
    )
}

export default Navbar;