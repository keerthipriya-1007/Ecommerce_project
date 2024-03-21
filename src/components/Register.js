import {  useState } from "react";
import axios from "axios";  
import "../Styles/Registerpage.css";
function Register() {
 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
 
    async function submit(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/users/register", {
          username: username,
          email: email,
          password: password,
          address: address,
          });
          alert("User Registation Successfully");
 
        } catch (err) {
            console.log(err);
          alert(err);
        }
      }
 
    return (
    <div>
    <div class="container mt-4" >
    <div class="card">
            <h1>User Registration</h1>
   
    <form>
        <div class="form-group">
          <label> Name</label>
          <input type="text"  class="form-control" id="employeename" placeholder="Enter Name"
         
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          />
 
        </div>
 
        <div class="form-group">
          <label>Email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
         
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
         
          />
 
        </div>
 
        <div class="form-group">
            <label>Password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
           
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
           
            />
          </div>
 
          <div class="form-group">
            <label>Address</label>
            <input type="address"  class="form-control" id="address" placeholder="Enter Address"
           
            value={address}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
           
            />
          </div>
 
        <button type="submit" class="btn btn-primary mt-4" onClick={submit} > submit</button>
       
      </form>
    </div>
    </div>
     </div>
    );
  }
 
  export default Register;