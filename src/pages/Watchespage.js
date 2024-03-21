

import React from 'react'
import { watchData } from '../components/data/watch'
import '../Styles/Pages.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function WatchesPage() {
  return (
    <>
    <Navbar />
    <div className='pageSection'>
        {watchData.map((item)=>{
            return(
                <div>
                    <Link to={`/watches/${item.id}`}> 
                    <div className="pageImg">
                    <img src={item.image} alt="-" />

                   </div>
                    </Link>
                  
                   <div className='proModel'>
                    {item.brand}{item.model}
                    </div>
                </div>
            )
        })
        }
        
    </div>
    </>
  )
}

export default WatchesPage