// import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";
// import Header from "./Header";

// const TheFinalOrder = () => {
//     const [order, setOrder] = useState("");
    
//     const site = "http://localhost:5001/api/allOrders";

//     const getOrder = (url) => {
//         const res = fetch(url);
//         const data = res.json();
//         setOrder(data)
//     }

//     useEffect(() => {getOrder(site)}, [order]);

//     return (
//         <>
//         <Header />
//         <div className="navtop">
//           <nav>
//             <ul>
//               <Link to="/" className="li">
//                 Home
//               </Link>
//               <Link to="/ourstory" className="li">
//                 Our Story
//               </Link>
//               <Link to="/account" className="li">
//                 Add to Cart
//               </Link>
//               <Link to="/cart" className="li">
//                 Cart
//               </Link>
//               <Link to="/orderup" className="li">Orders</Link>
//             </ul>
//           </nav>
//         </div>
//         <h2>Your orders</h2>
//             <p>Date: {order[0].order_id}</p>
//             <p>Total Paid: {order[0].totalpaid}</p>
//         </>
//     )
// }

// export default TheFinalOrder;