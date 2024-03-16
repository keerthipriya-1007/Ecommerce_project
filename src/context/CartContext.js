// import { createContext, useContext, useState } from "react";



// const CartContext=createContext()

//  const CartProvider=({children})=>{
//     const[ cartItems, setCartItems]=useState([])


// const addToCart=(item)=>{
//     setCartItems([...cartItems,item])
// }

// const removeFromCart=(item)=>{
//     setCartItems(cartItems.filter((apple)=> apple!==item))
// }


// return(
//    // <CartContext.Provider value={{cartItems,addToCart, removeFromCart}}>
//         <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>

//         {children}
//     </CartContext.Provider>

// )
// }

// export const useCart=()=>{
//     return useContext(CartContext)
// }

// export default CartProvider

 

import { createContext, useContext, useState } from "react";
import '../Styles/Products.css'

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  
    
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((apple) => apple !== item));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider