import React from "react";
//import "../Styles/AdminHome.css";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/Footer";
import "../Styles/Register.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
 
import Sidebar from "../components/Sidebar";
import Swiper from "swiper";
import SwiperCustom from "../components/swiper";
 
function AdminHome() {
  return (
    <div>
    <AdminNavbar />
       <SwiperCustom />
      <div className="carousel">
        <div className="landing">
          <div className="categories">
            <ul class="list-group align-center"></ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
 
export default AdminHome;
 