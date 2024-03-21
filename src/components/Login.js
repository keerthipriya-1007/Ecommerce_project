import {  useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/Loginpage.css";
import AuthContext from "../context/AuthContext";
import Navbar1 from "./Navbar1";
 
 
function Login() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {auth,setAuth} = useContext(AuthContext);
 
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/users/login", {
            email: email,
            password: password,
            }).then((res) =>
            {
             console.log(res.data);
             
             if (res.data.message == "Email not exits")
             {
               alert("Email not exits");
             }
             else if(res.data.message == "Login Success")
             {
                setAuth({email,name : res?.data?.name})
                navigate('/home1');
             }
              else
             {
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
         catch (err) {
          console.error(err);
          alert(err);
        }
     
      }
 
    return (
       <div>
        <Navbar1 />
            <div class="container">
            <div class="row">
                <h2>Login</h2>
             <hr/>
             </div>
 
             <div class="row">
             <div class="col-sm-6">
 
            <form>
        <div class="form-group">
          <label>Email</label>
          <input type="Email"  class="form-control" id="email" placeholder="Enter Email"
         
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
         
          />
 
        </div>
 
        <div class="form-group">
            <label>Password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter Password"
           
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
           
            />
          </div>
                  <button type="submit" class="btn btn-primary" onClick={login} >Login</button>
              </form>
 
            </div>
            </div>
            </div>
 
     </div>
    );
  }
 
  export default Login;