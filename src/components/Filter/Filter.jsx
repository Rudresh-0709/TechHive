"use client";
import React, { useState } from 'react'
import './Filter.css'
import Products from '../../../data/products.json'
import Link from 'next/link'

const uniqueCategories = [...new Set(Products.map(product => product.category))];

function Filter({setstar ,sethighprice, setlowprice, setCategory, activecategory, setActivecategory}) {

    const handlelowprice=(e)=>{
        if(e.target.value){
            setlowprice(e.target.value)
        }
        else{
            setlowprice(0)
        }
    }
    const handlehighprice=(e)=>{
        if(e.target.value){
            sethighprice(e.target.value)
        }
        else{
            sethighprice(9999)
        }
    }
    const handlecategory=(category)=>{

        if(activecategory===category){
            setCategory("")
            setActivecategory("")
        }
        else{
            setCategory(category);
            setActivecategory(category);
        }
    }
  return (
    <div className="filter-div">
        <div className="category-filter filters">
            <h2>Categories</h2>
            {uniqueCategories.map(category => (
                <button 
                    onClick={()=>handlecategory(category)} 
                    key={category}
                    id={activecategory===category?"active":""}
                    > 
                    {category}
                </button>
            ))}
        </div>
        <div className="rating-filter filters">
            <h2>Rating</h2>
            <button onClick={()=>setstar(3)}>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i> +
            </button>
            <button onClick={()=>setstar(4)}>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i> +
            </button>
            <button onClick={()=>setstar(5)}>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
            </button>
        </div>
        <div className="price-filter filters">
            <h2>Price Range</h2>
            <div className="pricerange">
            <input type="number" name="lowprice" id="" onChange={handlelowprice}/>
            <h3>-</h3>
            <input type="number" name="highprice" onChange={handlehighprice}/>
            </div>

        </div>
    </div>

  )
}

export default Filter