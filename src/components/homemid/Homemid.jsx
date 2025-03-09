import React from 'react'
import './Homemid.css'

function Homemid() {
  return (
    <div className='homemid'>
        <div className="leftside">
            <div className="laptop">
                <div className="laptopinfo">
                    <h2>Laptops</h2>
                    <p>Enhance your productivity with high-performance laptops. Perfect for work and play.</p>
                </div>
            </div>
            <div className="bottomleft">
                <div className="speaker">
                    <div className="speakerinfo">
                        <h2>Speakers</h2>
                        <p>Experience rich, immersive sound with premium speakers</p>
                    </div>
                </div>
                <div className="smartwatch">
                <div className="smartwatchinfo">
                        <h2>Smartwatches</h2>
                        <p>Stay connected and track your fitness with the latest in smartwatch technology.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="rightside">
            <div className="headphone">
            <div className="headphoneinfo">
                    <h2>Headphones</h2>
                    <p>
                        Enjoy your music in crystal-clear sound quality with wireless headphones.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homemid