import React,  { useContext }  from 'react'
import { computerData } from '../components/data/computers'
import '../Styles/Pages.css'
import Navbar from '../components/Navbar'
import Navbar1 from '../components/Navbar1'
import { Link } from 'react-router-dom'
import { useCart } from "../context/CartContext";
import AuthContext from "../context/AuthContext"
function Computerpage() {
  const { cartItems } = useCart();
  const {auth} = useContext(AuthContext);
  return (
    <>
   {auth!==null?<Navbar1 /> : <Navbar/>}
    <div className='pageSection'>
        {computerData.map((item)=>{
            return(
                <div>
                    <Link to={`/computers/${item.id}`}> 
                    <div className="pageImg">
                    <img src={item.image} alt="-" />

                   </div>
                    </Link>
                  
                   <div className='proModel'>
                    {item.company},{item.model}
                    </div>
                </div>
            )
        })
        }
        
    </div>
    </>
  )
}

export default Computerpage