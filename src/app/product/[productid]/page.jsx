"use client";
import { useParams,redirect } from "next/navigation";
import Products from "../../../../data/products.json";
import "./page.css";
import Image from "next/image";
import Alsolike from "@/components/alsolike/Alsolike";
import { useContext, useState } from "react";
import UserContext from "@/contexts/UserContext";
import CartContext from "@/contexts/CartContext";

export default function Page(){
    const {user} = useContext(UserContext)
    const {setCart} = useContext(CartContext)
    const params = useParams();
    const productId = parseInt(params.productid, 10);
    function renderstars (rating){
        let base=Math.floor(rating);
        let remainder=rating-base;
        let stars=[]
        for (let i = 0; i < base; i++) {
            stars.push(<i className="ri-star-fill"></i>);
        }
        if(remainder>0){
            stars.push(<i className="ri-star-half-line"></i>)
        }
        return(
            <div>
                {stars}
            </div>
        )
    }
    const handlecart = ()=>{
        if(!user){
            redirect('/auth/login')
        }
        else{
            setCart(prevCart=>{
                const newcart= {...prevCart}

                if (newcart[productId]){
                    newcart[productId].count+=1;
                }
                else{
                    newcart[productId]={
                        productId,
                        name: product.name,
                        price:product.price,
                        image: product.image,
                        count: 1
                    }
                }
                return newcart
            })
            redirect('/cart')
        }
    }

    // Find the product by ID
    const product = Products.find(p => p.id === productId);
    return(
        <div>
            <div className="product">
                <div className="product-image" style={{backgroundImage:`url("/assets/images/27230.jpg")`}}>
                    <Image src={product.image} width={300} height={300} alt="product image"></Image> 
                </div>
                <div className="productinfo">
                    <div className="product-details">
                        <h2>{product.name}</h2>
                        <div className="productdiv">
                            <div className="pricestar">
                                <h4 className="stars">{renderstars(product.rating)}</h4>
                                <h3>$ {product.price}</h3>
                            </div>
                            <div className="wishlist">
                                <button>
                                    <i className="ri-heart-3-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="productdescription">
                        <p>{product.description}</p>
                    </div>
                    <div className="productbutton">
                        <div className="sharecart">
                            <button className="share"><i className="ri-share-line"></i></button>
                            <button className="cart" onClick={handlecart}>ADD TO CART</button>
                        </div>
                        <div className="buy">
                            <button>BUY IT NOW</button>
                        </div>
                    </div>
                    <div className="delivery">
                        <span><i className="ri-truck-line"></i> </span>
                        <p>Estimate delivery times: 12-26 days (International), 3-6 days (India).</p>
                    </div>
                    <div className="return">
                        <span><i className="ri-reply-all-line"></i> </span>
                        <p>Return within 45 days of purchase. Duties & taxes are non-refundable.</p>
                    </div>
                </div>

            </div>
            <Alsolike category={product.category} id={product.id}/>
        </div>
    )
}