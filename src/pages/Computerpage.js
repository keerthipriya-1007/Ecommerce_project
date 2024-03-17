import React from 'react'
import { computerData } from '../components/data/computers'
import '../Styles/Pages.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Computerpage() {
  return (
    <>
    <Navbar />
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