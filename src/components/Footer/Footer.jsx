import React from 'react'
import Link from 'next/link'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="company">
          <div className="section1">
            <Link href={"/"}>
              <div className="navbar__logo"></div>
            </Link>
            <div className="call">
              <h4>CALL US FREE</h4>
              <h2>9800 18 18</h2>
            </div>
            <div className="address">
              <h3>Address : 211 M.G. Road, Mumbai</h3>
              <h3>Email : TechHive@gmail.com</h3>
              <h3>Fax : (+91) 123 456 7890</h3>
            </div>
          </div>
          <div className="section2">
            <h2>INFO</h2>
            <ul>
              <li>Custom Service</li>
              <li>F.A.Q.'s</li>
              <li>Ordering Tracking</li>
              <li>Contact us</li>
              <li>Events</li>
            </ul>
          </div>
          <div className="section2">
            <h2>SERVICES</h2>
            <ul>
              <li>Privacy Policy</li>
              <li>Your Account</li>
              <li>Advanced Search</li>
              <li>Tern & Condition</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="section2">
            <h2>ACCOUNT</h2>
            <ul>
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Discount</li>
              <li>Gift vouchers</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="section3">
            <h2>NEWSLETTER</h2>
            <p>Share contact information, store details, and brand content with your customers.</p>
            <div className="newsemail">
              <input type="email" name="email" id="email" />
              <i class="ri-mail-line"></i>
            </div>
            <div className="socialicon">
              <i class="ri-instagram-line"></i>
              <i class="ri-facebook-circle-line"></i>
              <i class="ri-linkedin-box-line"></i>
              <i class="ri-whatsapp-line"></i>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer