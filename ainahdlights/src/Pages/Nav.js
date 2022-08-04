import React from "react";
import { ReactDOM } from 'react';
import { Link } from "react-router-dom";
import LoginPage from "./Login";

const Nav = () => {
    return (
        <div className="navtop">
            <nav>
                <ul>
                    <li>Our Cookies</li>
                    <li>Our Cakes</li>
                    <li>Our Story</li>
                    <Link to="/login">Sign In</Link>
                </ul>
            </nav>   
        </div>
    )
};

export default Nav;