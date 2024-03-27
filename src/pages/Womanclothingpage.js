import React , { useContext } from "react";
import { womanData } from "../components/data/woman";
import "../Styles/Pages.css";
import Navbar from "../components/Navbar";

import { useCart } from "../context/CartContext";
import Navbar1 from "../components/Navbar1";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";


function Womanclothingpage() {
  
  const { cartItems } = useCart();
  const {auth} = useContext(AuthContext);
  return (
    <>
     {auth!==null?<Navbar1 /> : <Navbar/>}
    
      <div className="pageSection">
        {womanData.map((item) => {
          return (
            <div>
              <Link to={`/woman/${item.id}`}>
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

export default Womanclothingpage;
