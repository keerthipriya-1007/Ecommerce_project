import React from "react";
import { kitchenData } from "./data/kitchen";
import "../Styles/Products.css";
import { Link } from "react-router-dom";
function Kitchen() {
  const firstfiveimg = kitchenData.slice(0, 4);
  return (
    <>
      <div className="proTitle">
        <h2>KITCHEN</h2>
        <div className="proSection">
          {firstfiveimg.map((item) => (
            <div className="mobile-card" key={item.id}>
              {" "}
              {/* Add unique key for accessibility */}
              <Link to={`/kitchen/${item.id}`}>
                <div className="card-image">
                  <img src={item.image} alt={item.description || "Kitchen"} />{" "}
                  {/* Descriptive alt text */}
                </div>
              </Link>
              <div className="card-content">  
              <h5>{item.model}</h5>  
              {item.price && (<p>₹{item.price}</p>  )} 
            </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Kitchen;
