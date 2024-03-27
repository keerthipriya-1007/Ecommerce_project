import React from "react";
import { menData } from "./data/men";
import "../Styles/Products.css";
import { Link } from "react-router-dom";
function Men() {
  const firstfiveimg = menData.slice(0, 4);
  return (
    <>
      <div className="proTitle">
        <h2>MEN</h2>
        <div className="proSection">
          {firstfiveimg.map((item) => (
            <div className="mobile-card" key={item.id}>
              {" "}
              {/* Add unique key for accessibility */}
              <Link to={`/men/${item.id}`}>
                <div className="card-image">
                  <img
                    src={item.image}
                    alt={item.description || "Men"}
                  />{" "}
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

export default Men;
