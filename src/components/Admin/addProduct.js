import { useState } from "react";
import axios from "axios";
import AdminNavbar from "../AdminNavbar";
import { useNavigate } from "react-router-dom";
//import '../Registerpage.css';
function AddProduct() {
  const [pname, setPname] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [pstock, setPstock] = useState("");

  const navigate = useNavigate();
 
  async function submit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8082/admin/products/add", {
        pname: pname,
        description: description,
        price: price,
        pstock: pstock,
      });
      alert("Product  added  Successfully");
      navigate("/adminhome");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  }
 
  return (
    <div>
      <AdminNavbar />
      <div class="container mt-4">
        <div class="card">
          <h1> Add Product </h1>
 
          <form>
            <div class="form-group">
              <label style={{ color: "white" }}>Product Name </label>
              <input
                type="category name "
                class="form-control"
                id="category_name"
                placeholder="Enter Product Name"
                value={pname}
                onChange={(event) => {
                  setPname(event.target.value);
                }}
              />
            </div>
 
            <div class="form-group">
              <label style={{ color: "white" }}>Product Description </label>
              <input
                type="product discription"
                class="form-control"
                id="product_discription"
                placeholder="Enter Product Description"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
 
            <div class="form-group">
              <label style={{ color: "white" }}>Product Price </label>
              <input
                type="product price"
                class="form-control"
                id="product_price"
                placeholder="Enter Product Price"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label style={{ color: "white" }}>Product stock </label>
              <input
                type="product stock"
                class="form-control"
                id="product_stock"
                placeholder="Enter Product Stock"
                value={pstock}
                onChange={(event) => {
                  setPstock(event.target.value);
                }}
              />
            </div>
 
            <button type="submit" class="btn btn-primary mt-4" onClick={submit}>
              {" "}
              Add{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default AddProduct;