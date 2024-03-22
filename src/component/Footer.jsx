import React from 'react'
import './scss/Footer.scss'
import { FaTiktok,FaInstagram, FaFacebook ,FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-parent">
   <div className="back">
   <div className="width">
            <div className="logo-icon">
                <div className="logo">
                    <img src="./images/logo.png" alt="" />
                </div>
                <div className="icon">
                    <span>Follow us</span>
                    <h6><FaTiktok /></h6>
                    <h6><FaInstagram /></h6>
                    <h6><FaFacebook /></h6>
                    <h6><FaTwitter /></h6>
                </div>
            </div>
            </div>
   </div>
    </div>
  )
}

export default Footer