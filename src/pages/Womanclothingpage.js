import React from "react";
import { womanData } from "../components/data/woman";
import "../Styles/Pages.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Womanclothingpage() {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {womanData.map((item) => {
          return (
            <div>
              <Link to={`/woman/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt="-" />
                </div>
              </Link>

              <div className="proModel">
                {item.company}
                {item.model}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Womanclothingpage;
