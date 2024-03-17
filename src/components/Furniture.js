import React from 'react'
import {furnitureData} from './data/furniture'
import '../Styles/Products.css'
import { Link } from 'react-router-dom'

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
                          <Link to={`/furniture/${item.id}`}> 
                         <img className='Proimage'src={item.image} alt={item.description} />
                        </Link> </div>
                 )
             })
         }
 
     </div>
     </div>
      </>
      
    )
}

export default Furniture