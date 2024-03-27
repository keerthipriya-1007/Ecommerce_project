// import {React,useState} from 'react'
// import { useCart } from '../context/CartContext';
// import Navbar from './Navbar';
 
// const UserCart = () => {
 
//     const {cartItems, addToCart, removeFromCart} = useCart()
 
//     console.log(cartItems);
 
//   return (
// <>
// <Navbar />
// <div>
//     <h2 className='y-cart'>Your Cart</h2>
//  {cartItems.length ===0 ?
//     (<p className='empty'>Your Cart is Empty</p>):
//    <div>
//      {cartItems.map((item)=>{
//         return(
//             <div className='cart-section'>
//                 <div className="cart-img">
//                     <img src={item.image} alt="" />
//                 </div>
//                 <div className="cart-details">
//                     <h3>{item.product}</h3>
//                     <h2>
//                         {item.price}
//                     </h2>
//                     <h3>{item.model}</h3>
//                 </div>
//                 <button className='removeBtn' onClick={() => removeFromCart(item)}>Remove</button>
//             </div>
//         )
//     })}
//    </div>
 
// }
 
//     </div>
// </>
//   )
// }
 
// export default UserCart
import React, { useContext } from "react";
import { useCart } from "../context/CartContext";
import Navbar from "./Navbar";
import "../Styles/Products.css";
import Navbar1 from "../components/Navbar1";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
 
 
const UserCart = () => {
  const {auth} = useContext(AuthContext);
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    calculateTotalPrice,
  } = useCart();
 
  const updateItemQuantity = (item, newQuantity) => {
    updateQuantity(item, newQuantity);
  };
 
  return (
    <>
     {auth!==null?<Navbar1 /> : <Navbar/>}
      <div>
        <h2 className="y-cart">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty">Your Cart is Empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-section">
                <div className="cart-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-details  align-center">
                  <h3>{item.product}</h3>
                  <h2>Price: ₹{item.price}</h2>
                  <h3>Model: {item.model}</h3>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateItemQuantity(item, parseInt(e.target.value))
                    }
                  />
                </div>
                <button
                  className="removeBtn"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))}
 
            <h3>Total Price: ₹{calculateTotalPrice()}</h3>
            <h3><Link to="/Checkout">
              <button>Checkout</button>
            </Link>
            </h3>
          </div>
        )}
      </div>
    </>
  );
};
 
export default UserCart;