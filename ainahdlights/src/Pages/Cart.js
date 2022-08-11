import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Card from './Card';

const Cart = () => {
  const [email, setEmail] = useState('email');
  const [mapData, setMapData] = useState("");

  const cartSite = 'http://localhost:5001/api/cart';

  const getCart = async (cartSite, signal) => {
    try {
      const res = await fetch(cartSite, { signal });

      if (res.status !== 200) {
        throw new Error('Something went wrong');
      }
      const data = await res.json();
      setMapData(data);
    
    } catch (error) {
      console.log(error.message);
    }
  };

  const dbSite = 'http://localhost:5001/api/account/ansar';

  const getDetails = async (dbSite, signal) => {
    try {
      const res = await fetch(dbSite, { signal });

      if (res.status !== 200) {
        throw new Error('Something went wrong');
      }
      const data = await res.json();
      setEmail(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getDetails(dbSite);
    getCart(cartSite);
  }, [mapData]);

  const totalAmt = Number(mapData[0].price*mapData[0].qty) + Number(mapData[1].price*mapData[1].qty) + Number(mapData[2].price*mapData[2].qty);

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
          </ul>
        </nav>
      </div>
      <h1>{email}'s cart</h1>
        <div>
            <Card item={mapData[0].item} qty={mapData[0].qty} price={mapData[0].price}></Card>
            <Card item={mapData[1].item} qty={mapData[1].qty} price={mapData[1].price}></Card>
            <Card item={mapData[2].item} qty={mapData[2].qty} price={mapData[2].price}></Card>
        </div>
      <h2>Total: ${totalAmt}</h2>
      <button>Checkout</button>
    </>
  );
};

export default Cart;
