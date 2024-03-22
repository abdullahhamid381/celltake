import React, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaLongArrowAltRight } from "react-icons/fa";
import "./scss/Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="nav-bar-parent">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon" style={{ color: 'black' }}>
                <AiOutlineClose />{" "}
              </span>
            ) : (
              <span className="icon" >
                <GiHamburgerMenu />
              </span>
            )}
          </div>
          <div className="logo-div">
            <div className="nav-logo">
              <img src="./images/logo.png" alt="" />

            </div>
          </div>


          <div className="button-link">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <div className="nav-icon" onClick={handleClick}>
                {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

                {click ? (
                  <span className="icon" style={{ color: 'black' }}>
                    <AiOutlineClose />{" "}
                  </span>
                ) : (
                  <span className="icon" >
                    <GiHamburgerMenu />
                  </span>
                )}
              </div>
              <div className="nav-logo hide-logo">
                <img src="./images/logo.png" alt="" />

              </div>
              <li className="nav-item">
                <div

                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  <Link to='/' className="link">
                    Browse mobiles
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  <Link to='' className="link">
                    Compare mobiles
                  </Link>
                </div>
              </li>
              <div style={{ display: 'flex' }}>
                <li className="nav-item">
                  <div
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    <input type="button" value={"Sign in"} />
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    <input type="button" value={"Sign up"} />
                  </div>
                </li>
              </div>
              <div className='hide-item-post' >
                <li className="nav-item hide-item-post">

                  <div className="login-navbar hide-post" >

                    <input type="button" value={'Post an ad'} />
                    <span><FaLongArrowAltRight /></span>
                  </div>

                </li>
              </div>

            </ul>
            <div className="login-navbar">

              <input type="button" value={'Post an ad'} />
              <span><FaLongArrowAltRight /></span>
            </div>
          </div>


        </div>
      </nav>
    </div>
  );
}

export default Navbar;
