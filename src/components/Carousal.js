import React from 'react';
import carousal from "../images/carousal/carousal-mobile.jpg";

export default function MyCarousal() {
    return (

        <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ul className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
            </ul>

            <div className="carousel-inner">
            <div className="carousel-item carousel-1 active">
                    <div className="innet-text">
                    <h2 className='section-heading'><span className='blue'>Premium</span> <span className='yellow'>Aqua Health Care</span> Solutions</h2>
                        <h5>Manufacturing High-Quality Water-Based Health & Hygiene Products for a Healthier World</h5>
                    </div>
                    <img className="d-mobile" src={carousal} alt="nursing" />

                </div>

                <div className="carousel-item carousel-2">
                    <div className="innet-text">
                    <h2 className='section-heading'><span className='blue'>Pure Water</span> <br></br> <span className='yellow'>Healthy Living </span></h2>
                        <h5>Innovative Aqua Health Solutions for a Germ-Free, Hydrated World</h5>
                    </div>
                    <img className="d-mobile" src={carousal} alt="patientCare" />

                </div>

                <div className="carousel-item carousel-3">
                    <div className="innet-text">
                        <h2 className='section-heading'><span className='blue'>Science-Backed</span> <span className='yellow'> Planet-Friendly</span></h2>
                       <h5>Eco-Conscious Manufacturing for Safer Homes & Businesses.</h5>
                    </div>
                    <img className="d-mobile" src={carousal} alt="Old age care" />
                </div>

                <div className="carousel-item carousel-4">
                    <div className="innet-text">
                    <h2 className='section-heading'><span className='blue'>Trusted by</span> <br></br> <span className='yellow'>Professionals Worldwide </span></h2>
                        <h5>Gentle, reliable, and expert baby care at home. Ensuring your little ones are safe, happy, and well-cared for in Hyderabad.</h5>
                    </div>
                    <img className="d-mobile" src={carousal} alt="baby care" />

                </div>
                <div className="carousel-item carousel-5">

                    <div className="innet-text">
                        <h2 className='section-heading'><span className='blue'>Heading</span> <span className='yellow'> sub heading</span></h2>
                        <h5>Loren pisum Loren pisum Loren pisum Loren pisum Loren pisum Loren pisum Loren pisum Loren pisum .</h5>
                    </div>
                    <img className="d-mobile" src={carousal} alt="cook" />

                </div>

            </div>

            <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>

    )
}
