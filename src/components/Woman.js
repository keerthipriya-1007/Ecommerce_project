import React from "react";
import { womanData } from "./data/woman";
import "../Styles/Products.css";
import { Link } from "react-router-dom";

function Woman() {
  const firstfiveimg = womanData.slice(0, 4);
  return (
    <>
      <div className="proTitle">
        <h2>WOMEN</h2>
        <div className="proSection">
          {firstfiveimg.map((item) => (
            <div className="mobile-card" key={item.id}>
              {" "}
              {/* Add unique key for accessibility */}
              <Link to={`/woman/${item.id}`}>
                <div className="card-image">
                  <img src={item.image} alt={item.description || "Women"} />{" "}
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
export default Woman;
