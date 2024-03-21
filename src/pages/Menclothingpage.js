import React from "react";
import { menData } from "../components/data/men";
import "../Styles/Pages.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Menclothingpage() {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {menData.map((item) => {
          return (
            <div>
              <Link to={`/Men/${item.id}`}>
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

export default Menclothingpage;
