import React from "react";
import { computerData } from "./data/computers.js";
import "../Styles/Products.css";
import { Link } from "react-router-dom";

function Computer() {
  const firstfiveimgc = computerData.slice(0, 4);
  return (
    <>
      <div className="proTitle">
        <h2>LAPTOPS</h2>
        <div className="proSection">
          {firstfiveimgc.map((item) => (
            <div className="mobile-card" key={item.id}>
              {" "}
              {/* Add unique key for accessibility */}
              <Link to={`/computers/${item.id}`}>
                <div className="card-image">
                  <img
                    src={item.image}
                    alt={item.description || "Mobile phone"}
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

export default Computer;
