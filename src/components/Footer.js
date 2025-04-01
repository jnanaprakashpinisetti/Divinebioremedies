import React, { useState } from 'react';
import { Router, Routes, Route, Link, NavLink, browserHistory, IndexRoute } from 'react-router-dom';

import facebook from '../images/icons/social-media/facebook.svg';
import twitter from '../images/icons/social-media/twitter.svg';
import instagram from '../images/icons/social-media/instagram.svg';
import cell from '../images/icons/social-media/cell.svg';
import email from '../images/icons/social-media/email.svg';
import location from '../images/icons/social-media/location.svg';
import youtube from '../images/icons/social-media/youtube.svg';

export default function Footer() {

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Adds smooth scrolling
    });
  };

  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive)
    scrollToTop()
  }

  const closeMenu = () => {
    document.querySelector(".navbar-collapse").classList.remove("show")
    toggleClass()

  }
  return (
    <>
      <footer>
        <div className="footer-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <h4> Links</h4>
                <ul>
                  <NavLink to='/' className="nav-link" onClick={closeMenu}>Home </NavLink>
                  <NavLink to='About-Us' className="nav-link" onClick={closeMenu}>About Us </NavLink>
                  <NavLink to='Our-services' className="nav-link" onClick={closeMenu}> Our Services</NavLink>
                  <NavLink to='FAQs' className="nav-link" onClick={closeMenu} >FAQs </NavLink>
                  <NavLink to='Contact' className="nav-link" onClick={closeMenu}>Contact Us </NavLink>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>Our Products</h4>
                <div className="services">

                  <ul>
                    <li>Product-1</li>
                    <li>Product-2</li>
                    <li>Product-3</li>
                    <li>Product-4</li>
                    <li>Product-5</li>
                  </ul>
                </div>

              </div>
              <div className="col-md-3">
                <h4>Follow US</h4>
                <div className="followus">
                  <ul>
                    <li><a href="" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" />Facebook</a></li>
                    <li><a href="" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" />Instagram</a></li>
                    <li><a href="" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" />Twitter</a></li>
                    <li><a href="" target="_blank" rel="noreferrer"><img src={youtube} alt="youtube" />YouTube</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <h4>Contact Us</h4>
                <div className="contact-us">
                  <ul>
                    <li> <a href='tell:9705567799' className="call"><img src={cell} alt="location" />97055 67799</a></li>
                    <li><a href='mailto:divinebioremedies@gmail.com'><img src={email} alt="location" />divinebioremedies@gmail.com</a></li>
                    <li className="address">
                      <img src={location} alt="location" /> <span>Address Here</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="copy-wright">
          <div className="container">
            <p> &copy; 2025 Divine Bio Remedies | All rights received</p>
          </div>
        </div>
      </footer>

    </>
  )
}
