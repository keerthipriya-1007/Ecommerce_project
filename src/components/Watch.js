import React from 'react'
import { watchData } from './data/watch'
import '../Styles/Products.css'
import { Link } from 'react-router-dom'

function Watch() {
    const firstfiveimgc=watchData.slice(0,5)
    return (
      <>
      <div className='proTitle'>
   <h2>Watches</h2>
  <div className='proSection'>
         
         {
            firstfiveimgc.map((item)=>{
                 return(
                     <div className='imgBox'>
                          <Link to={`/watches/${item.id}`}> 
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

export default Watch