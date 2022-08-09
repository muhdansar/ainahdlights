import React, { useState, useEffect } from "react"
import Header from "./Header";
import Nav from "./Nav";


const SignUp = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [number, setNumber] = useState("");
const [address, setAddress] = useState("");
const [postCode, setPostCode] = useState("");
const [unitNo, setUnitNo] = useState("");
const [name, setName] = useState("");

const handleChangeEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
};

const handleChangePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
};

const handleChangeNumber = (event) => {
    event.preventDefault();
    setNumber(event.target.value);
};

const handleChangeAddress = (event) => {
    event.preventDefault();
    setAddress(event.target.value);
};

const handleChangePostal = (event) => {
    event.preventDefault();
    setPostCode(event.target.value);
};

const handleChangeUnit = (event) => {
    event.preventDefault();
    setUnitNo(event.target.value);
};

const handleChangeName = (event) => {
    event.preventDefault();
    setName(event.target.value);
};
//to assign pw matching function;
// const matchPassword = useEffect((event) => {
//     event.preventDefault();
//     if (event.target.value !== password) {
//         console.log("PW does not match")
//     } else {
//         console.log("PW matches")
//     }
// });

const sendThis = () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            cust_name: name,
            number: number,
            cust_password: password
        })
    };
    try {
    const data = fetch("http://localhost:5001/api/signup", requestOptions);
    } catch(error) {
        console.log(error.message);
    }
};

    return (
    <>
        <Header></Header>
        <Nav></Nav>
    <form onSubmit={sendThis}>
            <div>
                <p>Name</p>
                <input type="string" placeholder="Name" onChange={handleChangeName}></input>
            </div>
            <div>
                <p>Email</p>
                <input type="string" placeholder="Email" onChange={handleChangeEmail}></input>
            </div>
            <div>
                <p>Password</p>
                <input type="password" placeholder="Password" onChange={handleChangePassword}></input>
                <div>
                <input type="password" placeholder="Enter Password Again"></input>
                </div>
            </div>
            <div>
                <p>Whatsapp Number</p>
                <input type="number" placeholder="Phone Number" onChange={handleChangeNumber}></input>
            </div>
            <div>
                <p>Address</p>
                <input type="string" placeholder="Address Line 1" onChange={handleChangeAddress}></input>
                <div>
                <input type="string" placeholder="Unit Number (if)" onChange={handleChangeUnit}></input>
            </div>
            </div>
            <div>
                <p>Postal Code</p>
                <input type="number" placeholder="Postal Code" onChange={handleChangePostal}></input>
            </div>
            <button>Let's Start Ordering!</button>
    </form>
    </>
    )
};

export default SignUp;