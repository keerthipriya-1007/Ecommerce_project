import React from 'react'
import {computerData} from './data/computers.js'
import '../Styles/Products.css'
import { Link } from 'react-router-dom'

function Computer() {
    const firstfiveimgc=computerData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
 <h2>Computers</h2>
<div className='proSection'>
       
       {
          firstfiveimgc.map((item)=>{
               return(
                   <div className='imgBox'>
                     <Link to={`/computers/${item.id}`}> 
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

export default Computer