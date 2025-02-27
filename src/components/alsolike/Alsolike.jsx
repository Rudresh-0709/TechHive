import React from 'react';
import Products from "../../../data/products.json";
import Image from 'next/image';
import "./Alsolike.css"

function Alsolike({category,id}) {
    const simproduct=Products.filter(p=>category==p.category && id!=p.id);
  return (
    <div className='alsolike'>
        <h1>You Might Also Like</h1>
        <div className="similarproducts">
            {simproduct.map(prod => (
                <div key={prod.id} className="similarproduct">
                    <div className="prodimage">
                        <Image src={prod.image} alt={prod.name} width={400} height={300} />
                    </div>
                    <h2>{prod.name}</h2>
                    <h3>${prod.price}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Alsolike;