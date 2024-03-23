import React from 'react'
import './scss/Footer.scss'
import { FaTiktok,FaInstagram, FaFacebook ,FaTwitter } from "react-icons/fa";
import { footerdata } from './Data';
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
            <div className="grid">
                {
                    footerdata.map((item)=>{
                        return(
                            <div className="items">
                                <div className="title">
                                    <h1>{item.titlemain}</h1>
                                </div>
                                <div className="list">
                                    <div className="icon" id={item.class}>
                                        <span>{item.call}</span>
                                        <h3>{item.first}</h3>
                                    </div>
                                    <div className="icon"  id={item.class}>
                                        <span>{item.mail}</span>
                                        <h3>{item.second}</h3>
                                    </div>
                                    <div className="icon"  id={item.class}>
                                        <span>{item.location}</span>
                                        <h3>{item.third}</h3>
                                    </div>
                                    <div className="icon">
                                      
                                        <h3>{item.fourth}</h3>
                                    </div>
                                
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
   </div>
    </div>
  )
}

export default Footer