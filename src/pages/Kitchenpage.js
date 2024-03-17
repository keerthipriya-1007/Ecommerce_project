import React from 'react'
import { kitchenData } from '../components/data/kitchen'
import '../Styles/Pages.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Kitchenpage() {
  return (
    <>
    <Navbar />
    <div className='pageSection'>
        {kitchenData.map((item)=>{
            return(
                <div>
                    <Link to={`/kitchen/${item.id}`}> 
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

export default Kitchenpage
