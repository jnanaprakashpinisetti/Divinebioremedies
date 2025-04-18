import React from 'react';
import facebook from '../images/icons/social-media/facebook.svg';
import twitter from '../images/icons/social-media/twitter.svg';
import instagram from '../images/icons/social-media/instagram.svg';
import cell from '../images/icons/social-media/cell.svg';
import email from '../images/icons/social-media/email.svg';
import location from '../images/icons/social-media/location.svg';
import youtube from '../images/icons/social-media/youtube.svg';


const TopNav = () => {
    return (
        <div className="topNav">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 left">

                      <ul className="socilaMedia">
                            <li><a href="#">follow us: </a></li>
                            <li><a href="" target="_blank" rel="noreferrer" > <img src={facebook} alt="facebook" /></a></li>
                            <li><a href="" target="_blank"   rel="noreferrer"><img src={twitter} alt="twitter" /></a></li>
                            <li><a href="" target="_blank"  rel="noreferrer" ><img src={instagram} alt="instagram" /></a></li>
                            <li><a href="" target="_blank"  rel="noreferrer" ><img src={youtube} alt="youtube" /></a></li>
                        </ul> 

                    </div>
                    <div className="col-md-6 right">
                        <ul>
                            <li><a href="tell:9705567799"><img src={cell} alt="call icon" />97055 67799</a></li>
                            <li><a href="mailto:divinebioremedies@gmail.com"><img src={email} alt="email icon" />divinebioremedies@gmail.com</a></li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default TopNav;
