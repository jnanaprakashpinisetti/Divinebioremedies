import React, { useEffect } from 'react';

import cook from '../../images/img/cook-maid.jpg';
import babyCare from '../../images/img/baby-care.jpg';
import oldAgeCare from '../../images/img/old-age-care.jpg';
import physotherophy from '../../images/img/physotherophy.jpg';
import patentCare from '../../images/img/patent-care.jpg';
import officeCleaing from '../../images/img/office-cleaning.jpg';
import serviceMobileHero from '../../images/img/services-mobile.jpg'
import Watsapp from '../Watsapp';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

const OurProducts = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [])

    return (
        <div className="services">
            <Helmet>
                <title>Divine Bio Remedies | www.divinebioremedies.com</title>
                <meta name='Baby care services' content='Baby care services' />

            </Helmet>
            <Watsapp />
            {/* <div className="hero-banner mt-80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <h2 className="section-heading">Best<span className="blue"> Home Care Services  </span> <span className="d-desktop"></span> In  <span className="yellow">Hyderabad</span></h2>
                           
                            <h5>We provide baby care, old-age care, cooking, physiotherapy, and office cleaning services at the best price and with high quality.</h5>
                        </div>
                        <div className="col-md-6 visable-mobile">
                            <img src={serviceMobileHero} alt='jenceo services'/>

                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Home Care Services in Hyderabad</h2>
                        <p>The need for home care services in Hyderabad is growing rapidly as people’s work and personal lives are becoming increasingly intertwined, making it difficult for them to care for the elderly and those in need. JenCeo has partnered with the most reputable home care services to provide affordable, high-quality care. Our caretakers are highly qualified and trained in maintaining hygiene and promoting overall health.</p>
                    </div>
                </div>
            </div> */}

           
 
           
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
            

            <h1>Page under development </h1>

             



        </div>
    );
}

export default OurProducts;
