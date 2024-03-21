import React from "react";
import "../Styles/Dropdownprofile.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
function Dropdownprofile() {
  return (
    <div className="dd">
      <div className="flex">
        <ul>
          {/* <ul class="list-group align-center"> */}
          <li class="list-group-item    text-decoration:none;">
            <Link to="/">Profile</Link>
          </li>
          <li class="list-group-item  ">
            <Link to="/"> Logout</Link>
          </li>
        </ul>
        {/* </ul> */}
      </div>
    </div>
  );
}
export default Dropdownprofile;