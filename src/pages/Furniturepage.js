import React from 'react'
import { furnitureData } from '../components/data/furniture'
import '../Styles/Pages.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Furniturepage() {
  return (
    <>
    <Navbar />
    <div className='pageSection'>
        {furnitureData.map((item)=>{
            return(
                <div>
                    <Link to={`/furniture/${item.id}`}> 
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

export default Furniturepage