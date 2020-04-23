import React from 'react';
import { Link } from 'react-router-dom';

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