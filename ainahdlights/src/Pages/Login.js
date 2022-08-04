import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const LoginPage = () => {

return (
    <div>
        <Header></Header>
        <Nav></Nav>
        <h2>Sign In</h2>
        <form>
            <div>
                <input type="string" placeholder="Email"></input>
            </div>
            <div>
                <input type="password" placeholder="Password"></input>
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
        <h2><Link to="/signup">Don't have an account? Click to sign up!</Link></h2>
        
    </div>
)
}

export default LoginPage;