import React from "react"
import Header from "./Header";
import Nav from "./Nav";

const SignUp = () => {
    return (
    <>
        <Header></Header>
        <Nav></Nav>
    <form>
            <div>
                <p>Email</p>
                <input type="string" placeholder="Email"></input>
            </div>
            <div>
                <p>Password</p>
                <input type="password" placeholder="Password"></input>
                <div>
                <input type="password" placeholder="Enter Password Again"></input>
                </div>
            </div>
            <div>
                <p>Whatsapp Number</p>
                <input type="number" placeholder="Phone Number"></input>
            </div>
            <div>
                <p>Address</p>
                <input type="string" placeholder="Address Line 1"></input>
                <div>
                <input type="string" placeholder="Unit Number (if)"></input>
            </div>
            </div>
            <div>
                <p>Postal Code</p>
                <input type="number" placeholder="Postal Code"></input>
            </div>
    </form>
    </>
    )
};

export default SignUp;