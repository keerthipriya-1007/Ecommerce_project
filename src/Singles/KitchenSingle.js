

import React from 'react'
import { kitchenData } from '../components/data/kitchen'
import { useParams } from 'react-router-dom'
import '../Styles/Singles.css'
import Navbar from '../components/Navbar'
import UserCart from '../components/UserCart'
import { useCart } from '../context/CartContext'
function KitchenSingle() {
    const {id}=useParams()

    const{addToCart, cartItem} = useCart()
    const product=kitchenData.find((item)=>item.id===id)
  return (
    <div>
        <Navbar />
        <div className='ind-section'>
    <div className='ind-image'>
        <img src={product.image} alt=" "/>
    </div>
    <div className='ind-details space'>
    <div className='ind-company space'>
        <h3>{product.company}</h3>
    </div>
    <div className='ind-model space'>
        <h3>{product.model}</h3>
    </div>
    <div className='ind-price space'>
        <h3>{product.price}</h3>
    </div>
    <div className='ind-desc space'>
        <p>{product.description}</p>
    </div>
    <button className="my-button-class"  onClick={()=>addToCart(product)}>Add to Cart</button>

    </div>
   
    
    </div>
    </div>
  )
}

export default KitchenSingle