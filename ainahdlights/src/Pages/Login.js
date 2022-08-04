import React from "react";
import Header from "./Header";
import Nav from "./Nav";

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
                <input type="string" placeholder="Password"></input>
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    </div>
)
}

export default LoginPage;