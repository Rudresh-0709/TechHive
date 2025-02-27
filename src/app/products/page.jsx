"use client";
import Filter from "@/components/Filter/Filter";
import Productcard from "@/components/Product-list/Productcard";
import Dslr from "@/components/Productimg/dslr";
import React, { useState } from "react";
import './page.css';

export default function Products(){
    const [category, setCategory] = useState("")
    const [star, setstar] = useState(3);
    const[lowprice,setlowprice] = useState(0);
    const [highprice, sethighprice] = useState(9999);
    const [activecategory, setActivecategory] = useState("");
    return(

        <div className="product-page">
            <Dslr></Dslr>
            <div className="allproducts">
                <Filter setstar={setstar} setlowprice={setlowprice} sethighprice={sethighprice} setCategory={setCategory} activecategory={activecategory} setActivecategory={setActivecategory}></Filter>
                <Productcard star={star} lowprice={lowprice} highprice={highprice} category={category}></Productcard>
            </div>
        </div>
    )   
}