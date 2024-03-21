import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Navbar from "../components/Navbar";
 
function Home1() {
 
  const {auth} = useContext(AuthContext);
 
  return (
    <div>
   
      <h1>Welcome, {auth.name}!</h1>
     
    </div>
  );
}
 
export default Home1;