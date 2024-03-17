import React from 'react'
import {womanData} from './data/woman'
import '../Styles/Products.css'
import { Link } from 'react-router-dom'

function Woman() {
    const firstfiveimg=womanData.slice(0,5)
    return (
      <>
      <div className='proTitle'>
      <h2>Woman</h2>
      <div className='proSection'>
         
         {
            firstfiveimg.map((item)=>{
                 return(
                     <div className='imgBox'>
                        <Link to={`/woman/${item.id}`}> 
                         <img className='Proimage'src={item.image} alt={item.description} />
                         </Link></div>
                 )
             })
         }
 
     </div>
     </div>
      </>
      
    )
}

export default Woman