import React from 'react';
import { NavLink } from 'react-router-dom';
//we use the link component (internally) to ensure we do not render user to another html it will restart everything; so we use links to help attach the right component we want to display to user in VisualDOM 

function Navbar(props) {
    return(
        <nav className="red">
             <NavLink to="/" className="logo">COVID-Tracker</NavLink>

             <ul id="navLinks" >

                <li><NavLink to="/Homepage">
                    Form page 
                </NavLink></li>

                <li><NavLink to="/Covid-Tracker">
                    Covid Info
                </NavLink></li>

                <li><NavLink to="/thirdRoute">
                    thirdRoute
                </NavLink></li>

             </ul>
        </nav>
    )
}

export default Navbar;