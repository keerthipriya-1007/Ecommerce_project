import React, { useContext } from "react";
import { menData } from "../components/data/men";
import "../Styles/Pages.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";
import Navbar1 from "../components/Navbar1";
import AuthContext from "../context/AuthContext";


function Menclothingpage() {
  
  const { cartItems } = useCart();
  const {auth} = useContext(AuthContext);
  return (
    <>
     {auth!==null?<Navbar1 /> : <Navbar/>}
  
      <div className="pageSection">
        {menData.map((item) => {
          return (
            <div>
              <Link to={`/Men/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt="-" />
                </div>
              </Link>

              <div className="proModel">
                {item.company}
                {item.model}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Menclothingpage;
