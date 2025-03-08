"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import UserContext from '@/contexts/UserContext'
import CartContext from '@/contexts/CartContext'
import Dslr from '@/components/Productimg/dslr'
import "./cart.css"

function cart() {
  const {user}=useContext(UserContext)
  const {setCart,cart}=useContext(CartContext)
  const increaseCount = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item.productId]: {
        ...prevCart[item.productId], // Copy existing item
        count: prevCart[item.productId].count + 1 // Increment count
      }
    }));
  };
  const decreaseCount =(item)=>{
    setCart((prevCart)=>{
      const currentCount =prevCart[item.productId].count
      if(currentCount==1){
        const updatedCart={...prevCart}
        delete updatedCart[item.productId]
        return updatedCart
      }
      else{
        return{
          ...prevCart,
          [item.productId]:{
            ...prevCart[item.productId],
            count:prevCart[item.productId].count-1
          }
        }
      }
    })
  }
  const getTotalPrice = (cart) => {  // Ensure cart is an array
    return Object.values(cart).reduce((total, item) => total + item.price * item.count, 0);
  };
  return (
    <div className='cartpage'>
        <Dslr quote="  SHOPPING CART  "/>
        <section>
          <div className="cartdiv">
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul key={""}>
                    {Object.values(cart).map(item => (
                      <div className="cart-item">
                          {/* Product Image */}
                          <img src={item.image} alt={item.name} className="cart-item-image" />
              
                          {/* Product Details */}
                          <div className="cart-item-details">
                              <h3>{item.name}</h3>
                              <div className="cartfunc">
                                <button onClick={() => removeFromCart(item.productId)} className="remove-btn">REMOVE</button>
                                <span>|</span>
                                <button >ADD TO WATCHLIST</button>
                              </div>
                          </div>
                          <div className="productquantity">
                            <div className="counter">
                              <button onClick={()=> decreaseCount(item)}>-</button>
                              <h4>{item.count}</h4>
                              <button onClick={()=> increaseCount(item)}>+</button>
                            </div>
                            <div className="productprice">
                              <h2>$ {item.price}</h2>
                            </div>
                          </div>
                          
                      </div>
                    ))}
                </ul>
            )}
          </div>
          <div className="pricediv">
            <div className="billheading">
              <h3>ORDER SUMMARY</h3>
            </div>
            <div className="pricetotal">
              <h3>Subtotal</h3>
              <h2>$ {getTotalPrice(cart)}</h2>
            </div>
            <div className="pricetotal">
              <h3>Delivery Charges</h3>
              <h2>$ {Math.floor(getTotalPrice(cart)*1/100)}</h2>
            </div>
            <div className="coupon">
              <h3>Coupon</h3>
              <input type="text" />
            </div>
            <div className="finaltotal">
              <h3>TOTAL</h3>
              <h2>$ {(getTotalPrice(cart))+(Math.floor(getTotalPrice(cart)*1/100))}</h2>
            </div>
            <div className="coupon">
              <h3>Address</h3>
              <textarea id='addressinput' type="text" />
            </div>
            <button className='checkout'>CHECKOUT</button>
          </div>
        </section>
        
    </div>
    
  )
}

export default cart