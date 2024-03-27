import React , { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import AuthContext from "../context/AuthContext";
import Navbar1 from './Navbar1';
import Navbar from './Navbar';
function Profile() {
    const { auth } = useContext(AuthContext);
  return (
    <>
        {auth!==null?<Navbar1 /> : <Navbar/>}
        <center>
        <h5>Welcome {auth.name}!!</h5>
       
 
        </center>
    </>
  )
}
 
export default Profile