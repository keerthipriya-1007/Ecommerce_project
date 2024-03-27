import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/Loginpage.css";
import AuthContext from "../context/AuthContext";
import Navbar from "./Navbar";
 
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
 
  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8082/api/v1/users/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);
 
            if (res.data.message == "Email doesn't exist") {
              alert("Email doesn't exist");
            } else if (res.data.message == "Login Success") {
              setAuth({ email, name: res?.data?.name });
              navigate("/home1");
            } else {
              alert("Incorrect Email and Password not match");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      console.error(err);
      alert(err);
    }
  }
 
  return (
    <div>
      <Navbar />
      <div class="container mt-4">
        <div class="card">
          <div class="row">
            <h1>Login</h1>
          </div>
 
          <div class="row">
            <form>
              <div class="form-group">
                <label style={{ color: "white" }}> Email</label>
                <input
                  type="Email"
                  class="form-control"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
 
              <div class="form-group">
                <label style={{ color: "white" }}>Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <button type="submit" class="btn btn-primary" onClick={login}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Login;