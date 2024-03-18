import React from "react";
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../Styles/Navbar.css";
import "../Styles/Products.css";
import "bootstrap-icons/font/bootstrap-icons.css";
//import {Logo } from '../assets'
// import Logo from '../assets/Logo.jpg'

function Navbar() {
  const { cartItems } = useCart();

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src="https://static.vecteezy.com/system/resources/previews/007/462/439/non_2x/click-online-shop-logo-with-bag-for-your-business-commerce-store-free-vector.jpg" />

        {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.expressvpn.com%2Fblog%2Fsigns-a-shopping-website-is-fake%2F&psig=AOvVaw0vf6gEosRfYQLgbbkwvMPt&ust=1710748821563000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIj_6rHq-oQDFQAAAAAdAAAAABAE"/> */}

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
          <i className="bi bi-cart  white-icon large-icon"></i>
          <Link to="/cart">
            <span>{cartItems.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
