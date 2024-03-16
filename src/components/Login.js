import React from "react";
import { useForm } from "react-hook-form";



const Login = ({ method }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <p className="title1">USER LOGIN</p>
      <form class="App1" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userRole">User Role</label>
        <select id="userRole" {...register("userRole", { required: true })}>
          <option value="Select Role">Select Role</option>
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
        </select>
        {errors.userRole && (
          <span style={{ color: "red" }}>* Please select a user role.</span>
        )}
 
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
 
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          {...register("password")}
        />
 
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="submit"
            value="Login"
            style={{ padding: "5px 10px", fontSize: "14px" }}
          />
        </div>
 
        <p>New user? Register here </p>
        <button
          onClick={() => {
            method("register");
          }}
        >
          Register
        </button>
      </form>
    </>
  );
};
 
export default Login;