import React, { useState } from 'react';
import { Router, Routes, Route, Link, NavLink, browserHistory, IndexRoute } from 'react-router-dom';

import logo from '../images/Logo.png';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurProducts from './pages/OurProducts';
import Faq from './pages/Faq';
import ContactUs from './pages/ContactUs';
import Elements from './Elements/Elements';
import Rnd from './pages/Rnd'
import Certifications from './pages/Certifications'


export default function Navbar() {
 // Function to scroll to the top of the page
 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Adds smooth scrolling
    });
  };

	const [isActive, setActive] = useState(false);
	const toggleClass = () => {
		setActive(!isActive);
		scrollToTop()
	}

	const closeMenu = ()=> {
		document.querySelector(".navbar-collapse").classList.remove("show")
		toggleClass()

	}



	return (
		<>

			<header className="navbar-bg 	 scroll-change">
				<nav className="navbar navbar-expand-md container">
					{/* <a className="navbar-brand"> */}
					<NavLink to='/' className="navbar-brand"><img src={logo} alt="Divine Bio Remedies Logo" width="50px" /></NavLink>
					{/* </a> */}
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
						<i className={isActive ? "fa fa-close" : "fa fa-bars"} onClick={toggleClass} ></i>
						{/* <span className="navbar-toggler-icon"></span> */}
					</button>
					<div className="collapse navbar-collapse" id="collapsibleNavbar">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink to='/' className="nav-link" onClick={closeMenu}>Home </NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='About-Us' className="nav-link" onClick={closeMenu}>About Us </NavLink>
							</li>

							<li className="nav-item">
								<NavLink to='Our-products' className="nav-link" onClick={closeMenu}> Our Products</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='FAQs' className="nav-link"onClick={closeMenu} >FAQs </NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='Rnd' className="nav-link" onClick={closeMenu}>R & D </NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='Certifications' className="nav-link" onClick={closeMenu}>Certifications </NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='Contact' className="nav-link" onClick={closeMenu}>Contact Us </NavLink>
							</li>
						
						
						</ul>
					</div>
				</nav>
			</header>


			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="About-us" element={<AboutUs />} />
				<Route path="Our-products" element={<OurProducts />} />
				<Route path="FAQs" element={<Faq />} />
				<Route path="Rnd" element={<Rnd />} />
				<Route path="Certifications" element={<Certifications />} />
				<Route path="Contact" element={<ContactUs />} />
				<Route path="/Elements" element={<Elements />} />
			</Routes>
		</>
	)
}
