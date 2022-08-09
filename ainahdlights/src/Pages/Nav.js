import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navtop">
            <nav>
                <ul>
                    <Link to="/" className="li">Home</Link>
                    <Link to="/ourstory" className="li">Our Story</Link>
                    <Link to="/login" className="li">Sign In to Order</Link>
                </ul>
            </nav>   
        </div>
    )
};

export default Nav;