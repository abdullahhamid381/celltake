import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import './scss/WantSell.scss'
const WantSell = () => {
  return (
   <div className="want-sell-parent">
    <div className="want-sell-width">
      <div className="flex">
      <div className="text">
            <h1>Want to sell your mobile?</h1>
          <div className="points">
          <li>Add your post for free in 3 steps.</li>
            <li>
Receive Offers from Verified Buyers.
</li>
            <li>
Sell Your Phone at the Best Price.</li>
          </div>
          <div className="login-navbar">
           
<input type="button" value={'Post an ad'} />
<span><FaLongArrowAltRight /></span>
          </div>
        </div>
        <div className="img">
            <img src="./images/wantsell.png" alt="" />
        </div>
      </div>
    </div>
   </div>
  )
}

export default WantSell