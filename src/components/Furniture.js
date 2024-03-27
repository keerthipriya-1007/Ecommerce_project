import React from "react";
import { furnitureData } from "./data/furniture";
import "../Styles/Products.css";
import { Link } from "react-router-dom";

function Furniture() {
  const firstfiveimg = furnitureData.slice(0, 4);
  return (
    <>
      <div className="proTitle">
        <h2>FURNITURE</h2>
        <div className="proSection">
          {firstfiveimg.map((item) => (
            <div className="mobile-card" key={item.id}>
              {" "}
              {/* Add unique key for accessibility */}
              <Link to={`/furniture/${item.id}`}>
                <div className="card-image">
                  <img src={item.image} alt={item.description || "Furniture"} />{" "}
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

export default Furniture;
