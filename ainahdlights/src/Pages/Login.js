import React, { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const LoginPage = () => {
const [email, setEmail] =  useState ("");
const [password, setPassword] = useState("");

const handleChangeEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
}

const handleChangePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
}

//placeholder
const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password)
};
// 

return (
    <div>
        <Header></Header>
        <Nav></Nav>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} className="signInForm">
            <div className="typeHere">
                <label>
                    Email: 
                <input type="string" placeholder="Email" value={email} onChange={handleChangeEmail}></input>
                </label>
            </div>
            <div className="typeHere">
                <label>
                    Password: 
                <input type="password" placeholder="Password" value={password} onChange={handleChangePassword}></input>
                </label>
            </div>
            <div className="typeHere">
                <button>Let's start ordering!</button>
            </div>
        </form>
        <h2><Link to="/signup">Don't have an account? Click to sign up!</Link></h2>
        <h3>Or you can contact us at our socials below!</h3>
    </div>
)
}

export default LoginPage;