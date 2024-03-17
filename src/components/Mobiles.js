import React from 'react'
import { mobileData } from './data/mobiles'
import '../Styles/Products.css'
import { Link } from 'react-router-dom'
function Mobiles() {
    const firstfiveimg=mobileData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h2>Mobiles</h2>
    <div className='proSection'>
       
       {
          firstfiveimg.map((item)=>{
               return(
                
                     
                   <div className='imgBox'>
                   <Link to={`/mobiles/${item.id}`}> 
                       <img className='Proimage' src={item.image} alt={item.description} />
                       </Link>
                       </div>
                      
                      
               )
           })
       }

   </div>
   </div>
    </>
    
  )
}

export default Mobiles