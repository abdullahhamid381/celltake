import React from 'react'
import './scss/Hero.scss'
const Hero = () => {
  return (
   <div className="hero-parent-div">
   <div className="hero-width">
   <div className='text'>
    <h1>Discover Pre-Loved Mobile Gems Across  <span>Pakistan <div className="img">
      <img src="./images/world-flag.png" alt="" />
    </div></span>   </h1>
  
    </div>
    <div className="img">
        <img src="./images/hero.png" alt="" />
    </div>
   </div>
   </div>
  )
}

export default Hero