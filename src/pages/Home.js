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
            
              <h2 >CATEGORIES</h2>
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
    </>
  );
}

export default Home;
