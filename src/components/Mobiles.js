import React from "react";
import { mobileData } from "./data/mobiles";
import "../Styles/Products.css";
import { Link } from "react-router-dom";
function Mobiles() {
  const firstfiveimg = mobileData.slice(0, 4);
  return (
    <>
      <div className="proTitle">
        <h2>MOBILES</h2>
        <div className="proSection">
          {firstfiveimg.map((item) => (
            <div className="mobile-card" key={item.id}>
              {" "}
              <Link to={`/mobiles/${item.id}`}>
                <div className="card-image">
                  <img
                    src={item.image}
                    alt={item.description || "Mobile phone"}
                  />{" "}
                </div>
              </Link>
              <div className="card-content">
                <h5>{item.model}</h5>
                {item.price && (
                  <div>
                    <p>₹{item.price}</p>
                    {item.oldPrice && (
                      <span className="old-price">₹{item.oldPrice}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
 
export default Mobiles;
 