// // import { createContext, useContext, useState } from "react";

// // const CartContext=createContext()

// //  const CartProvider=({children})=>{
// //     const[ cartItems, setCartItems]=useState([])

// // const addToCart=(item)=>{
// //     setCartItems([...cartItems,item])
// // }

// // const removeFromCart=(item)=>{
// //     setCartItems(cartItems.filter((apple)=> apple!==item))
// // }

// // return(
// //    // <CartContext.Provider value={{cartItems,addToCart, removeFromCart}}>
// //         <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>

// //         {children}
// //     </CartContext.Provider>

// // )
// // }

// // export const useCart=()=>{
// //     return useContext(CartContext)
// // }

// // export default CartProvider

// import { createContext, useContext, useState } from "react";
// import '../Styles/Products.css'

// const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);

//   };

//   const removeFromCart = (item) => {
//     setCartItems(cartItems.filter((apple) => apple !== item));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };

// export default CartProvider
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // const addToCart = (item) => {
  //   const existingItemIndex = cartItems.findIndex(
  //     (cartItem) => cartItem.id === item.id
  //   );
  //   console.log(existingItemIndex);

  //   if (existingItemIndex !== -1) {
  //     const updatedCartItems = [...cartItems];
  //     console.log(updatedCartItems);
  //     updatedCartItems[existingItemIndex].quantity += 1;
  //     updatedCartItems[existingItemIndex].price = item.price; 
  //     setCartItems(updatedCartItems);
  //   } else {
  //     setCartItems([...cartItems, { ...item, quantity: 1, price: item.price }]);
  //   }
  // };

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      updatedCartItems[existingItemIndex].price = Number(item.price); // convert price to number
      setCartItems(updatedCartItems);
    } else {
      setCartItems([
        ...cartItems,
        { ...item, quantity: 1, price: Number(item.price) },
      ]); // add price property here
    }
  };
  const updateQuantity = (item, newQuantity) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: newQuantity }
        : cartItem
    );
    setCartItems(updatedCartItems);
  };


  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      if (typeof item.price === "number") {
        return total + item.price * item.quantity;
      } else {
        console.error(`Invalid price for item: ${JSON.stringify(item)}`);
        return total;
      }
    }, 0);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
