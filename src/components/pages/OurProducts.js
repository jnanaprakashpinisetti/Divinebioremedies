import React, { useEffect } from 'react';
import diprows from '../../images/products/di-pro-ws.png'
import diminforte from '../../images/products/di-min-forte.png'
import diMinNano from '../../images/products/di-min-non.png'
import ceon from '../../images/products/ceon.png'
import superActive from '../../images/products/super.png'

import allProducts from '../../images/products/All-Products-mobile.jpg'
import Watsapp from '../Watsapp';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

const OurProducts = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [])

    return (
        <div className="products">
            <Helmet>
                <title>Divine Bio Remedies | www.divinebioremedies.com</title>
                <meta name='Baby care services' content='Baby care services' />

            </Helmet>
            <Watsapp />
            <div className="hero-banner mt-80">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 visable-mobile">
                            <img src={allProducts} alt='all products' />

                        </div>
                    </div>
                </div>
            </div>

            <div className="container product-list">
                <h2>DI PRO-WS</h2>
                <div className="row">
                    <div className="col-md-4">
                        <span className='composition'>Composition:-</span>
                        <p>
                            DI PRO WS is a beneficial microbial consortium which contains Bacillus spp.,Lactobacillus spp.,Bifidobacterium spp., Saccharomyces spp.,Cellulomonas spp.,along with various enzymes like alpha amylase, cellulose, hemi-celluloseand protease.</p>
                        <span className='composition'>Dosage:-</span>
                        <p>1Kg per hector in water application</p>
                        <span className='composition'>Direction of usage :-</span>
                        <p>Mix 1 Kg of Di pro-ws in 50 Litre of Jaggery
                            water soak it for overnight and apply throughout  the pond or advised by aqua consultant</p>
                    </div>
                    <div className="col-md-4">
                        <span className='composition'>Benifets :-</span>
                        <ul>
                            <li>Improves the water quality.</li>
                            <li>Improves the feed conversion rate.</li>
                            <li>Enhances  the growth of aquatic animals.</li>
                            <li>Improves the metabolic rate.</li>
                            <li>Clears the pond bottom sludge and  degrades the organic matter.</li>
                            <li>Maintains Phytoplankton and zoo plankton Balance.</li>
                            <li>Degrades Toxic gasses in the pond water.</li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <img src={diprows} alt="diprows" />

                    </div>

                </div>
            </div>

            <div className="light-blue">
                <div className="container product-list">
                    <h2>DI-MIN FORTE</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={diminforte} alt="diprows" />

                        </div>
                        <div className="col-md-4">
                            <span className='composition'>Composition:-</span>
                            <p>
                                Zinc Sulphate, Copper Sulphate, Magnesium Sulphate,Di Calcium Phosphate, Manganese Sulphate, Potassium Chloride, Methionine, LR-Lysine, Sodium, Nitrate Ferrous Sulphate,Cerevisiae strains, Probiotics .</p>
                            <span className='composition'>Dosage:-</span>
                            <p>5 to 10kg per Acre or advised by aqua consultant.</p>
                            <span className='composition'>Direction of usage :-</span>
                            <p>Dissolve appropriate quantity of Di-min forte in pond water and apply over the pond and run the aerators.</p>
                        </div>
                        <div className="col-md-4">
                            <span className='composition'>Benifets :-</span>
                            <ul>
                                <li>High bio-availability and reduce the mineral loss in Metabolism.</li>
                                <li>Improves the water quality and bio-plankton.</li>
                                <li>Heavy metal free and improves the growth hormonal and enzymatic activities.</li>
                                <li>Helps in muscle contractions and constituents of exoskleleton.</li>
                                <li>Helps the pre-moulting of the shrimp and avoid the soft-shelling of the shrimp.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>




            <div className="container product-list">
                <h2>Di-min Nano</h2>
                <div className="row">
                    <div className="col-md-4">
                        <span className='composition'>Composition:-</span>
                        <p>
                            Nano Magnesium, Nano Manganese,Nano Calcium, Nano Zinc,Nano Ferrous, Nano Chromium, Nano cobalt,Nano Selenium, Nano Molybdenum,Amino acids, Pro-biotics, Vitamins and Enzymes.</p>
                        <span className='composition'>Dosage:-</span>
                        <p>1 Litre per acre</p>
                        <span className='composition'>Direction of usage :-</span>
                        <p>Water Application : 1 Litre per 1 acre, Feed application : 5 to 10ml per 1 kg feed or advised by Aqua Consultant.</p>
                    </div>
                    <div className="col-md-4">
                        <span className='composition'>Benifets :-</span>
                        <ul>
                            <li>High bio-availability and reduce the mineral loss in Metabolism.</li>
                            <li>Improves the water quality and bio-plankton.</li>
                            <li>Heavy metal free and improves the growth hormonal and enzymatic activities.	</li>
                            <li>Helps in muscle contractions and constituents of exoskleleton.</li>
                            <li>Helps the pre-moulting of the shrimp and avoid the soft-shelling of the shrimp.</li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <img src={diMinNano} alt="di Min Nano" />
                    </div>
                </div>
            </div>


            <div className="light-blue">
                <div className="container product-list">
                    <h2>CEON (Vitamin-C)</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={ceon} alt="ceon (vitamin-c" />

                        </div>
                        <div className="col-md-4">
                            <span className='composition'>Composition:-</span>
                            <p>
                                Ceon is a superior vitamin c complex</p>
                            <span className='composition'>Dosage:-</span>
                            <p>5 to 10 grams per 1 kg of Feed</p>
                            <span className='composition'>Direction of usage :-</span>
                            <p>Mix required quantity of CEON in the feed by using binding gel or as recommended by aqua consultant.</p>
                        </div>
                        <div className="col-md-4">
                            <span className='composition'>Benifets :-</span>
                            <ul>
                                <li>Enhances immunity power.</li>
                                <li>Improves the growth rate and disease resistance	capacity of the animal.</li>
                                <li>Prevents the bacterial and Viral infections attack.</li>
                                <li>Improves the collagen formation in the shrimp body and helps in wound repair.</li>
                                <li>improves free moulting and increases muscle strength.</li>
                                <li>Instant relief from stress.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>


            <div className="container product-list">
                <h2>SUPER ACTIVE</h2>
                <div className="row">
                    <div className="col-md-4">
                        <span className='composition'>Composition:-</span>
                        <p>
                            Mixture of sodium per Carbonate, Sodium per Borates, Calcium peroxide having high capacity of releasing Oxygen</p>
                        <span className='composition'>Dosage:-</span>
                        <p>1 kg per Acre in the one metre depth or advised by aqua consultant</p>
                        <span className='composition'>Direction of usage :-</span>
                        <p>Apply required quantity of Super Active uniformly over the pond</p>
                    </div>
                    <div className="col-md-4">
                        <span className='composition'>Benifets :-</span>
                        <ul>
                            <li>improves O2 levels and maintains for a longer period</li>
                            <li>Makes the animal very active</li>
                            <li>Acts as fastest life saving substance and avoids mass mortality</li>
                            <li>reduce the running mortality caused by low DO</li>
                            <li>increased DO levels in pond will allow the beneficial microorganisms grow better in the pond environment</li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <img src={superActive} alt="super Active" />
                    </div>
                </div>
            </div>























        </div>
    );
}

export default OurProducts;
