import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Card from './Card';

const Cart = () => {
  const [email, setEmail] = useState('email');
  //fetching placeholder on refresh
  const [mapData, setMapData] = useState(null);
  const [totalAmt, setTotalAmt] = useState(0);

  const cartSite = 'http://localhost:5001/api/cart';

  const getCart = async (cartSite, signal) => {
    try {
      const res = await fetch(cartSite, { signal });

      if (res.status !== 200) {
        throw new Error('Something went wrong');
      }
      const data = await res.json();

      if (data.length > 0) {
      setMapData(data)
      }

      const total = mapData.reduce((sum, item) => sum + Number(item.price*item.qty), 0)
      setTotalAmt(total);
    
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
  const date = new Date();
  useEffect(() => {
    getDetails(dbSite);
    getCart(cartSite);
  }, [mapData, totalAmt]);

  const goToOrders = () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            date: date,
            orderPrice: totalAmt
        })
    };
    try {
    const data = fetch('http://localhost:5001/api/cart', requestOptions);
    } catch(error) {
        console.log(error.message);
    }
    };

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
      <h1>{email}'s cart</h1>
      {(mapData === null) ?
         <h2>yeet this cart EMPTY</h2> : 
         (mapData.length === 1) ? 
            <div>
            <Card item={mapData[0].item} qty={mapData[0].qty} price={mapData[0].price}></Card>
            <h2>Total: ${totalAmt}</h2>
            </div> :
         (mapData.length === 2) ? 
            <div>
            <Card item={mapData[0].item} qty={mapData[0].qty} price={mapData[0].price}></Card>
            <Card item={mapData[1].item} qty={mapData[1].qty} price={mapData[1].price}></Card>
            <h2>Total: ${totalAmt}</h2>
            </div> :
        (mapData.length === 3) ? 
            <div>
            <Card item={mapData[0].item} qty={mapData[0].qty} price={mapData[0].price}></Card>
            <Card item={mapData[1].item} qty={mapData[1].qty} price={mapData[1].price}></Card>
            <Card item={mapData[2].item} qty={mapData[2].qty} price={mapData[2].price}></Card>
            <h2>Total: ${totalAmt}</h2>
            </div> :
        (mapData.length === 4) ? 
            <div>
            <Card item={mapData[0].item} qty={mapData[0].qty} price={mapData[0].price}></Card>
            <Card item={mapData[1].item} qty={mapData[1].qty} price={mapData[1].price}></Card>
            <Card item={mapData[2].item} qty={mapData[2].qty} price={mapData[2].price}></Card>
            <Card item={mapData[3].item} qty={mapData[3].qty} price={mapData[3].price}></Card>
            <h2>Total: ${totalAmt}</h2>
        </div> :




            <h2>{totalAmt}</h2>
        }
      
      <button onClick={goToOrders}>Checkout</button>
    </>
  );
};

export default Cart;
