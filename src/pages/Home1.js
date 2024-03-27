import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import Products from "../components/Products";
import "../Styles/Register.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
 
import Sidebar from "../components/Sidebar";
import Swiper from "swiper";
import SwiperCustom from "../components/swiper";
 
function Home1() {
  // const { auth } = useContext(AuthContext);
 
  return (
    <div>
      <Navbar1 />
      {/* <h1>Welcome, {auth.name}!</h1> */}
      <SwiperCustom />
      <div className="carousel">
        <div className="landing">
          <div className="categories">
            <ul class="list-group align-left">
              {/* <li class="list-group-item d-flex justify-content-between align-items-left  text-decoration: none;">
                <Link to="/mobiles"> Mobiles </Link>
              </li>
 
              <li class="list-group-item d-flex justify-content-between align-items-left">
                <Link to="/computers"> Computers</Link>
              </li>
 
              <li class="list-group-item d-flex justify-content-between align-items-left">
                <Link to="/furniture"> Furniture</Link>
              </li>
 
              <li class="list-group-item d-flex justify-content-between align-items-left">
                <Link to="/kitchen"> Kitchen</Link>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-left">
                <Link to="/Watches"> Watches</Link>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-left">
                <Link to="/Woman"> Women Clothing</Link>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-left">
                <Link to="/Men"> Men Clothing</Link>
              </li> */}
              <h2>CATEGORIES</h2>
              <Link
                to="/mobiles"
                class="btn  btn1 btn-block list-group-item d-flex justify-content-between align-items-left "
                role="button"
                aria-current="true"
              >
                {" "}
                MOBILES{" "}
              </Link>
 
              <Link
                to="/computers"
                class="btn  btn1 btn-block list-group-item d-flex justify-content-between align-items-left "
                role="button"
                aria-current="true"
              >
                LAPTOPS
              </Link>
 
              <Link
                to="/Woman"
                class="btn  btn1 btn-block list-group-item d-flex justify-content-between align-items-left "
                role="button"
              >
                WOMEN CLOTHING
              </Link>
 
              <Link
                to="/Men"
                class="btn  btn1 btn-block list-group-item d-flex justify-content-between align-items-left "
                role="button"
              >
                MEN CLOTHING
              </Link>
 
              <Link
                to="/Watches"
                class="btn btn1  btn-block list-group-item d-flex justify-content-between align-items-left "
                role="button"
              >
                WATCHES
              </Link>
 
              <Link
                to="/furniture"
                class="btn btn1  btn-block list-group-item d-flex justify-content-between align-items-left "
                role="button"
              >
                FURNITURE
              </Link>
 
              <Link
                to="/kitchen"
                class="btn btn1  btn-block list-group-item d-flex justify-content-between align-items-left "
                role="button"
              >
                KITCHEN
              </Link>
            </ul>
          </div>
 
          <Products />
        </div>
        <Footer />
      </div>
    </div>
  );
}
 
export default Home1;