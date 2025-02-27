import React from "react";
import './Navbar.css';
import Link from "next/link"



const Navbar =() =>{
    return(
        <div className="navbar">
            <div>
                <Link href={"/"}>
                    <div className="navbar__logo"></div>
                </Link>
            </div>
            <div className="nav-links">
                <ul>
                    <Link href={"/"}>
                        <li>HOME</li>
                    </Link>
                    <Link href={"/shop"}>
                        <li>SHOP</li>
                    </Link>
                    <Link href={"/products"}>
                        <li>PRODUCTS</li>
                    </Link>
                    <Link href={"/contact"}>
                        <li>CONTACT</li>
                    </Link>
                </ul>
            </div>
            <div className="navbar__menu">
                <ul>
                    <li>
                        <Link href={"/profile"}>
                            <i className="ri-user-3-line"></i>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/wishlist"}>
                            <i className="ri-heart-line"></i>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/cart"}>
                            <i className="ri-shopping-cart-2-line"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
