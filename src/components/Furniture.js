import React from 'react'
import {furnitureData} from './data/furniture'
import '../Styles/Products.css'

function Furniture() {
    const firstfiveimg=furnitureData.slice(0,5)
    return (
      <>
      <div className='proTitle'>
      <h2>Furniture</h2>
      <div className='proSection'>
         
         {
            firstfiveimg.map((item)=>{
                 return(
                     <div className='imgBox'>
                         <img className='Proimage'src={item.image} alt={item.description} />
                         </div>
                 )
             })
         }
 
     </div>
     </div>
      </>
      
    )
}

export default Furniture