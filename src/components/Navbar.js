import React from "react";
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import '../Styles/Navbar.css'
import '../Styles/Products.css'


// import Logo from './assets/Logo.jpg'





function Navbar() {
  const {cartItems}=useCart()

  return (

    <div className="navbar">

      <div className="leftSide">

      {/* <img src={Logo}/> */}

      {/* </div>
      <div className="dropdown">
    <button className="dropbtn"  type="button">
      Product Category
    </button>
    <ul className="dropdown-content">
      {/* Dropdown items */}
      {/* <li><Link to="/mobiles">Mobiles</Link></li>
      <li><Link to="/clothing">Clothing</Link></li>
      <li><Link to="/electronics">Electronics</Link></li>
      <li><Link to="/grocery">Grocery</Link></li>
      <li><Link to="/furniture">Furniture</Link></li>
      <li><Link to="/food">Food</Link></li>
    </ul>
  </div> */} 


      <div className="rightSide">
        <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Signup</Link>
        
        <Link to="/cart">Cart
        <span>
          {cartItems.length}
        </span>
        
        </Link>
    
    
    

      </div>

    </div>
    </div>

  );

}
export default Navbar
