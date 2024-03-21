import React from "react";
import { mobileData } from "../components/data/mobiles";
import "../Styles/Pages.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function MobilePage() {
  return (
    <>
      <Navbar />
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
      </div>
    </>
  );
}

export default MobilePage;
