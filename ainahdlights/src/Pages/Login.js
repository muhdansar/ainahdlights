import React, { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";

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

const sendThis = async () => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            cust_password: password
        })
    };
    try {
    const res = await fetch("http://localhost:5001/api/login", requestOptions);
    const data = res.json();
    console.log(data.access);
    } catch(error) {
        console.log(error.message);
    }
};

return (
    <div>
        <Header></Header>
        <Nav></Nav>
        <h2>Sign In</h2>
        <form onSubmit={sendThis} className="signInForm">
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
                <Link to="/account"><button>Let's start ordering!</button></Link>
            </div>
        </form>
        <h2><Link to="/signup">Don't have an account? Click to sign up!</Link></h2>
        <h3>Or you can contact us at our socials below!</h3>
    </div>
)
}

export default LoginPage;