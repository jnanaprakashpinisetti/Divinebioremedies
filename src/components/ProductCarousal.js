import React from 'react';
import product1 from "../images/products/Product-1.jpg";
import product2 from "../images/products/Product-2.jpg";
import product3 from "../images/products/Product-3.jpg";
import product4 from "../images/products/Product-4.jpg";
import product5 from "../images/products/Product-5.jpg";

export default function ProductCarousal() {
    return (
        <div className='productCarousel'>
            <h1 className="section-heading"><span className="blue"> OUR  </span> <span className="yellow">Products</span></h1>
            <div id="myProductCarousel" className="carousel slide" data-ride="carousel">

                <ul className="carousel-indicators">
                    <li data-target="#myProductCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myProductCarousel" data-slide-to="1"></li>
                    <li data-target="#myProductCarousel" data-slide-to="2"></li>
                    <li data-target="#myProductCarousel" data-slide-to="3"></li>
                    <li data-target="#myProductCarousel" data-slide-to="4"></li>
                </ul>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                  
                        <img className="" src={product1} alt="nursing" />

                    </div>

                    <div className="carousel-item ">
                  
                        <img className="" src={product2} alt="patientCare" />

                    </div>

                    <div className="carousel-item ">
               
                        <img className="" src={product3} alt="Old age care" />
                    </div>

                    <div className="carousel-item ">
                
                        <img className="" src={product4} alt="baby care" />

                    </div>
                    <div className="carousel-item ">

                   
                        <img className="" src={product5} alt="cook" />

                    </div>

                </div>

                <a className="carousel-control-prev" href="#myProductCarousel" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#myProductCarousel" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>

        </div>
    )
}
