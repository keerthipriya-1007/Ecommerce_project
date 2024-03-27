import React, { useState, useContext } from 'react'
import AdminNavbar from "./AdminNavbar";
import AuthContext from "../context/AuthContext";
import SwiperCustom from './swiper';
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css";
import AdminNavLogin from './AdminNavLogin';
 
function AdminLogin() {
    const { auth } = useContext(AuthContext);
  return (
   <>
   <AdminNavLogin />
   {/* <AdminNavbar/> */}
   <SwiperCustom />
   <div className="categories">
        {/* <ul class="list-group align-left"> */}
        <ul class="list-group align-center">
          <li
            class="list-group-item d-flex justify-content-between align-items-center  text-decoration:
 none;
 "
          >
            <Link to="/addproductcat"> Add Category </Link>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <Link to="/addproduct"> Add Product</Link>
          </li>
         
        </ul>
      </div>
   </>
  )
}
 
export default AdminLogin