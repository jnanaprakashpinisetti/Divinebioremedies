import React, { useState, useEffect } from 'react';


import securityIcon from '../images/icons/security-icon.svg';
import reliabilityIcon from '../images/icons/reliability-icon.svg';
import productivityIcon from '../images/icons/productivity-icon.svg';
import MinssionIcon from '../images/icons/mission-icon.svg';

export default function Card() {

  return (
    <section className="home-cards">
      <div className="section-heading">
        <h1 >
          <span className="blue">What We Do</span> <span className="yellow">SUSTAINABILITY</span>
        </h1>
      </div>
      <div className="container ">
        <div className="row">

          {/* First Card */}
          <div className="col-md-3" >
            <div className="card " >
              <div className="img-wrapper">
                <img src={securityIcon} alt="Nursing" />
                <h3>SECURITY</h3>
              </div>
              <div className="card-body">
                <p>Maintaining the highest safety, health and environment standards for the betterment of the company and its employees as well as consumers</p>
              </div>
            </div>
          </div>


          {/* Second Card */}
          <div className="col-md-3" >
            <div className="card " >
              <div className="img-wrapper">
                <img src={reliabilityIcon} alt="Old Age Care" />
                <h3>RELIABILITY</h3>
              </div>
              <div className="card-body">
                <p>Using the right technology and ensuring reliable supply chain plans for on-time delivery in order to be the ‘Reliable Partners’ in the business</p>
              </div>

            </div>
          </div>

          {/* Third Card */}

          <div className="col-md-3" >
            <div className="card " >
              <div className="img-wrapper">
                <img src={productivityIcon} alt="baby care" />
                <h3>PRODUCTIVITY</h3>
              </div>
              <div className="card-body">
                <p>Striving to continuously improve our productivity ratios by focusing on operational excellence where the procedures are clearly defined</p>
              </div>

            </div>
          </div>


          {/* Fourth Card */}
          <div className="col-md-3" >
            <div className="card " >
              <div className="img-wrapper">
                <img src={MinssionIcon} alt="cook / maid" />
                <h3>VISION & MISSION</h3>
              </div>
              <div className="card-body">
                <p>Our aim is to enhance our reputation by providing high quality services. Serving for mutual benefit is the main motto</p>
              </div>

            </div>
          </div>




        </div>
      </div>
    </section>

  )
}
