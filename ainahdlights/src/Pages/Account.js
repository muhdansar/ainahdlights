import React, {useState, useEffect} from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Order from "./Order";

const Account = () => {
    const [email, setEmail] = useState("email");

    const dbSite = "http://localhost:5001/api/account/ansar"

    const getDetails = async (dbSite, signal) => {
        try {
            const res = await fetch(dbSite, {signal});

            if (res.status !== 200) {
                throw new Error("Something went wrong")
            }
            const data = await res.json();
            console.log(data);
            setEmail(data);
        } catch(error) {
        console.log(error.message)
    }
}
    useEffect(() => {getDetails(dbSite)});

return (
    <>
    <Header></Header>
    <div className="navtop">
            <nav>
                <ul>
                    <Link to="/" className="li">Home</Link>
                    <Link to="/ourstory" className="li">Our Story</Link>
                    <Link to="/account" className="li">Add to Cart</Link>
                    <Link to="/cart" className="li">Cart</Link>
                </ul>
            </nav>   
        </div>
    <h1>Welcome {email}!</h1>
    <Order></Order>
    </>
)
};

export default Account; 