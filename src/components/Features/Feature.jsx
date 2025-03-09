import React from 'react'
import "./Feature.css"

function Feature() {
  return (
    <div className='featuresection'>
        <div className="features">
            <div className="feature">
                <i className="ri-timer-flash-line"></i>
                <h3>Quick and Easy Store Pickup</h3>
            </div>
            <div className="feature">
                <i className="ri-truck-line"></i>
                <h3>Free shipping over $35</h3>
            </div>
            <div className="feature">
                <i class="ri-money-dollar-circle-line"></i>
                <h3>Best Price Guarantee</h3>
            </div>
            <div className="feature">
                <i class="ri-checkbox-multiple-line"></i>
                <h3>Latest and Great Tech</h3>
            </div>
        </div>
    </div>
  )
}

export default Feature