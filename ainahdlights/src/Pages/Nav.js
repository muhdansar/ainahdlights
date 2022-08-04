import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navtop">
            <nav>
                <ul>
                    <li>Our Cookies</li>
                    <li>Our Cakes</li>
                    <li>Our Story</li>
                    <Link to="/login" className="li">Sign In</Link>
                </ul>
            </nav>   
        </div>
    )
};

export default Nav;