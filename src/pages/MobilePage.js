import React, { useContext } from "react";
import { mobileData } from "../components/data/mobiles";
import "../Styles/Pages.css";
import Navbar1 from "../components/Navbar1";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import AuthContext from "../context/AuthContext";

function MobilePage() {
  const { cartItems } = useCart();
  const {auth} = useContext(AuthContext);
  return (
    <>
{auth!==null?<Navbar1 /> : <Navbar/>}
     
      <div className="pageSection">
        {mobileData.map((item) => {
          return (
            <div>
              <Link to={`/mobiles/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt="-" />
                </div>
              </Link>

              <div className="proModel">
                {item.company},{item.model}
              </div>
            </div>
          );
        })}

{/* <         Link to="/cart">
          <i className="bi bi-cart  white-icon large-icon"></i>
            <span>{cartItems.length}</span>
          </Link> */}

        


    
      </div>
    </>
  );
}

export default MobilePage;
