import React from 'react';
import products from'../../../data/products.json';
import Link from 'next/link';
import './Productcard.css'
import Image from 'next/image';

function Productcard({star,lowprice,highprice, category}) {
    const filteredProducts=products.filter(product=>product.rating>=star && product.price>=lowprice && product.price<=highprice && (category === "" || product.category === category))
    function renderstars (rating){
        let base=Math.floor(rating);
        let remainder=rating-base;
        let stars=[]
        for (let i = 0; i < base; i++) {
            stars.push(<i class="ri-star-fill"></i>);
        }
        if(remainder>0){
            stars.push(<i class="ri-star-half-line"></i>)
        }
        return(
            <div>
                {stars}
            </div>
        )
    }
    return (
        <div className="product-container">
            {filteredProducts.map(product=>(
                <Link key={product.id} href={`/product/${product.id}`}>
                    <div className="product">
                        {/* <img src={`../../../public/${product.image}`} alt="" /> */}
                        <Image src={`${product.image}`} alt={product.name} width={400} height={300} />
                        <div className="productdetails">
                            <h3>{product.name}</h3>
                            <h4>${product.price}</h4>
                            <h4 className="stars">{renderstars(product.rating)}</h4>
                        </div>
                        <div className="quicknav">
                            <button>
                                <i class="ri-shopping-cart-2-line"></i>
                            </button>
                            <button>
                                <i class="ri-heart-3-line"></i>
                            </button>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
  )
}

export default Productcard