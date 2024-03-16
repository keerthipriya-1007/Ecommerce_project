import React from 'react'
import '../Styles/Home.css'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
       <Navbar />
       <div className='landing'>

      
       <div className='categories'>
  <ul class="list-group align-left">
  <li class="list-group-item d-flex justify-content-between align-items-left" >
  <Link to="/mobiles"> Mobiles</Link>
   
   
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-left">
  <Link to="/computers"> computers</Link>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-left">
  <Link to="/furniture"> furniture</Link>
  
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-left">
  <Link to="/books">books</Link>
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-left">
  <Link to="/kitchen"> kitchen</Link>
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-left">
  <Link to="/Watches"> Watches</Link>
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-left">
  <Link to="/Womanclothing"> Woman Clothing</Link>
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-left">
  <Link to="/Menclothing"> Men Clothing</Link>
    
  </li>
</ul>
       </div>
       
        <Products />
        </div>
       
    </div>
    
   
  )
}

export default Home