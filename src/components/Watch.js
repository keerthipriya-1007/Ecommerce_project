import React from "react";
import { watchData } from "./data/watch";
import "../Styles/Products.css";
import { Link } from "react-router-dom";

function Watch() {
  const firstfiveimgc = watchData.slice(0, 4);
  return (
    <>
      <div className="proTitle">
        <h2>WATCHES</h2>
        <div className="proSection">
          {firstfiveimgc.map((item) => (
            <div className="mobile-card" key={item.id}>
              {" "}
              {/* Add unique key for accessibility */}
              <Link to={`/watches/${item.id}`}>
                <div className="card-image">
                  <img src={item.image} alt={item.description || "Watches"} />{" "}
                  {/* Descriptive alt text */}
                </div>
              </Link>
              <div className="card-content">
                <h5>
                  {item.price && `₹${item.price}`}{" "}
                  {/* Conditionally display price */}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Watch;
