import React from "react";
import "../Styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import "../Styles/Register.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Swiper from "swiper";
import SwiperCustom from "../components/swiper";

function Home() {
  return (
    <>
      <Navbar />
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
              <h2 >CATEGORIES</h2>
              <a
                href="/mobiles"
                class="btn  btn1 btn-block list-group-item d-flex justify-content-between align-items-left "
                role="button"
                aria-current="true"
              >
                {" "}
                MOBILES{" "}
              </a>

              <a
                href="/computers"
                class="btn  btn1 btn-block list-group-item d-flex justify-content-between align-items-left "
                role="button"
                aria-current="true"
              >
                LAPTOPS
              </a>

              <a
                href="/Woman"
                class="btn  btn1 btn-block list-group-item d-flex justify-content-between align-items-left "
                role="button"
              >
                WOMEN CLOTHING
              </a>

              <a
                href="/Men"
                class="btn  btn1 btn-block list-group-item d-flex justify-content-between align-items-left "
                role="button"
              >
                MEN CLOTHING
              </a>

              <a
                href="/Watches"
                class="btn btn1  btn-block list-group-item d-flex justify-content-between align-items-left "
                role="button"
              >
                WATCHES
              </a>

              <a
                href="/furniture"
                class="btn btn1  btn-block list-group-item d-flex justify-content-between align-items-left "
                role="button"
              >
                FURNITURE
              </a>

              <a
                href="/kitchen"
                class="btn btn1  btn-block list-group-item d-flex justify-content-between align-items-left "
                role="button"
              >
                KITCHEN
              </a>
            </ul>
          </div>

          <Products />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
