import React from 'react'
import {womanData} from './data/woman'
import '../Styles/Products.css'

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

export default Woman