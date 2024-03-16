import React from "react";
import { useForm } from "react-hook-form";
 
const Register = ({ method }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  // const [currentPage, setCurrentPage] = useState("resigter");
 
  const onSubmit = (data) => console.log(data);
 
  return (
    <>
      <p className="title">ADD USER</p>
      <form class="App" onSubmit={handleSubmit(onSubmit)}>
        <i class="fa fa-user"></i>
        <label htmlFor="userRole">User Role</label>
        <select id="userRole" {...register("userRole", { required: true })}>
          <option value="" selected disabled>
            Select Role
          </option>
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
        </select>
        {errors.userRole && (
          <span style={{ color: "red" }}>* Please select a user role.</span>
        )}
 
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <span style={{ color: "red" }}>* Username is required</span>
        )}
 
        <i class="fa fa-envelope-o" aria-hidden="true"></i>
        <label for="email">Email Id</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span style={{ color: "red" }}>* Email is mandatory</span>
        )}
 
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          {...register("password")}
        />
 
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          rows="4"
          placeholder="Enter your complete address"
          {...register("address")}
        />
        {errors.address && (
          <span style={{ color: "red" }}>* Please enter your address</span>
        )}
 
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="submit"
            value="Register"
            style={{ padding: "5px 10px", fontSize: "14px" }}
            onClick={() => {
              method("login");
            }}
          />
        </div>
        <p>Already a user ?</p>
        <button
          onClick={() => {
            method("login");
          }}
        >
          Log in
        </button>
      </form>
    </>
  );
};
 
export default Register;