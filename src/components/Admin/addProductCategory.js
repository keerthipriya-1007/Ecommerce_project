import React, { useState } from "react";
import axios from "axios";
import AdminNavbar from "../AdminNavbar";
import { useNavigate } from "react-router-dom";

function AddProductCategory() {
  const [cname, setCname] = useState("");

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8082/admin/prodcat/add", {
        cname: cname,
      });
      alert("Product category added Successfully");
      navigate("/adminhome");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  }

  return (
    <div>
      <AdminNavbar />
      <div className="container mt-4">
        <div className="card">
          <h1> Add Product Category </h1>

          <form>
            <div className="form-group">
              <label style={{ color: "white" }}>Category Name</label>
              <input
                type="category name"
                className="form-control"
                id="category_name"
                placeholder="Enter Category Name"
                value={cname}
                onChange={(event) => {
                  setCname(event.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-4"
              onClick={submit}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProductCategory;
