"use client"
import CartContext from "./CartContext";
import React, { useEffect, useState } from "react";

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    useEffect(() => {
      localStorage.setItem("cart",JSON.stringify(cart))
    }, [cart])
    
    return(
        <>
            <CartContext.Provider value={{cart,setCart}}>
                {children}
            </CartContext.Provider>
        </>
        
    )
}
export default CartContextProvider