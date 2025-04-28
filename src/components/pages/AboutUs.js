import React, {useEffect} from 'react';

import aboutUs from '../../images/img/about-us-mobile.jpg';
import Watsapp from '../Watsapp';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
        useEffect(() => {
            ReactGA.pageview(window.location.pathname)
        }, [])
    return (
        <div className="about-us mt-80">
              <Helmet>
              <title>Divine Bio Remedies | www.divinebioremedies.com</title>
                <meta name='Baby care services' content='Baby care services'/>
                              
              </Helmet>
              <Watsapp/>

            <div className="hero-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h2 className="section-heading"><span className="blue"> About </span><span className="yellow">Us</span></h2>
                            <h5>"At Aqua Healthcare, we empower healthier lives through innovative water-based solutions. Our mission is to provide pure, scientifically advanced aqua products that enhance well-being, promote independence, and deliver trusted care—one drop at a time.</h5>
                        </div>

                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
<h1>Page under development</h1>

                    </div>
                    <div className="col-sm-4">
                        {/* <img src={aboutUs} alt="ourstory" /> */}
                    </div>
                </div>

            </div>
            <hr/>
            
            {/* <div className="container">
            <h2>Guaranteed Comfort</h2>
            <ul>
                <li>We serve our customers with utmost dignity and try our best to make them feel comfortable and reduce their anxiety.</li>
                <li>We aim to fully understand your precise needs and preferences before our service begins.</li>
                <li>Only when you are happy with the support plan we have agreed together, will we select a care worker to meet you.</li>
                <li> It will be someone with appropriate experience, qualifications and skills, and you will always be able to change your care worker if you wish.</li>
                <li>You'll find that you will soon get to know your career and feel comfortable with them.</li>
                <li>You'll also get to know your local JenCeo Field Care Supervisor, who will make regular visits to your home to check that you are entirely happy with the support you are receiving.</li>
                <li>And you are encouraged to speak to us at any time if you have any concerns about your safety or wellbeing or wish to change the way your support is arranged.</li>
            </ul>
            </div> */}
        </div>
    );
}

export default AboutUs;
