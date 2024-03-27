import React , { useContext } from "react";
import { womanData } from "../components/data/woman";
import { useParams } from "react-router-dom";
import "../Styles/Singles.css";
import Navbar from "../components/Navbar";
import UserCart from "../components/UserCart";
import { useCart } from "../context/CartContext";
import Navbar1 from "../components/Navbar1";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

function WomanclothingSingle() {
  const { id } = useParams();
  const {auth} = useContext(AuthContext);
  const { addToCart, cartItem } = useCart();
  const product = womanData.find((item) => item.id === id);
  return (
    <div>
      {auth!==null?<Navbar1 /> : <Navbar/>}
      <div className="ind-section">
        <div className="ind-image">
          <img src={product.image} alt=" " />
        </div>
        <div className="ind-details space">
          <div className="ind-company space">
            <h3>{product.company}</h3>
          </div>
          <div className="ind-model space">
            <h3>{product.brand}</h3>
          </div>
          <div className="ind-price space">
            <h3>₹{product.price}</h3>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <button
            className="my-button-class"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default WomanclothingSingle;
