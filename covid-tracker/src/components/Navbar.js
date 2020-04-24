import React from 'react';
import { NavLink } from 'react-router-dom';
//we use the link component (internally) to ensure we do not render user to another html it will restart everything; so we use links to help attach the right component we want to display to user in VisualDOM 

function Navbar(props) {
    return(
        <nav className="red">
             <NavLink to="/Homepage" className="logo">COVID-Tracker</NavLink>

             <ul id="navLinks" >

                <li><NavLink to="/Homepage" activeStyle={{
                    fontFamily: "fantasy",
                    textDecoration: "none",
                    border: "solid 2px blue"
                }}>
                    Form page 
                </NavLink></li>

                <li><NavLink to="/Covid-Tracker" activeStyle={{
                    fontFamily: "cursive",
                    textDecoration: "none",
                    border: "solid 2px red"
                }}>
                    Covid Info
                </NavLink></li>

                <li><NavLink to="/thirdRoute" activeStyle={{
                    fontFamily: "aria",
                    textDecoration: "none",
                    border: "solid 2px gold"
                }}>
                    thirdRoute
                </NavLink></li>

                {/* <li><NavLink to="/TestingCode" activeStyle={{
                    fontFamily: "cursive",
                    textDecoration: "none",
                    border: "solid 2px purple"
                }}>
                    TestingCode
                </NavLink></li> */}

             </ul>
        </nav>
    )
}

export default Navbar;