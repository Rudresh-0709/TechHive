import React from 'react'
import Link from 'next/link'
import './Footer.css'

function Footer() {
  return (
    <div>
        <div className="company">
            <Link href={"/"}>
                <div className="navbar__logo"></div>
            </Link>
        </div>
    </div>
  )
}

export default Footer