import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const TheFinalOrder = () => {
    const [order, setOrder] = useState("");
    const [dated, setDated] = useState("");
    const [orderNo, setOrderNo] = useState("");
    const [status, setOrderStatus] = useState(true);

    const cartSite = 'http://localhost:5001/api/allOrders';

  const getCart = async (cartSite, signal) => {
    try {
      const res = await fetch(cartSite, { signal });

      if (res.status !== 200) {
        throw new Error('Something went wrong');
      }
      const data = await res.json();
      setOrder(data[0].totalpaid);
      setDated(data[0].orderdate);
      setOrderNo(data[0].order_id);
    } catch (error) {
        console.log(error.message)
    }}

    useEffect (() => {
    getCart(cartSite);
    }, [])

   const cancelOrder = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/deleteOrder", { method: "POST"});

      if (res.status !== 200) {
        throw new Error('Something went wrong');
      }
      const data = await res.json();
      setOrderStatus(false);
    } catch (error) {
        console.log(error.message)
    }}

    return (
        <>
        <Header />
        <div className="navtop">
          <nav>
            <ul>
              <Link to="/" className="li">
                Home
              </Link>
              <Link to="/ourstory" className="li">
                Our Story
              </Link>
              <Link to="/account" className="li">
                Add to Cart
              </Link>
              <Link to="/cart" className="li">
                Cart
              </Link>
              <Link to="/orderup" className="li">Orders</Link>
            </ul>
          </nav>
        </div>
        <h2>Your orders</h2>
        {status ? 
        <div>
        <h3>Order No: {orderNo}</h3>
        <p>Date Ordered: {dated}</p>
        <p>Total paid: {order}</p>
        </div> : <p>nothing here</p>

        }
        
        <form onSubmit={cancelOrder}>
        <button>Cancel Order</button>
        </form>
        </>
    )
}

export default TheFinalOrder;