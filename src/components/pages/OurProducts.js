import React, { useEffect } from 'react';
import diprows from '../../images/products/di-pro-ws.png'
import diminforte from '../../images/products/di-min-forte.png'
import diMinNano from '../../images/products/di-min-non.png'
import ceon from '../../images/products/ceon.png'
import superActive from '../../images/products/super.png'
import saprsaprolyt from '../../images/products/saprolyt-g.png'
import germiKill from '../../images/products/gremi-kill.png'
import safeShild from '../../images/products//safe-sheeld.png'

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

            {/***** DI PRO-WS *****/}
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

            {/***** DI-MIN FORTE *****/}
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



            {/***** DI-NIN-Nano *****/}
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

            {/***** CEON *****/}
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

            {/***** SUPER ACTIVE *****/}
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



            {/***** SAPROLYT-G *****/}
            <div className="light-blue">
                <div className="container product-list">
                    <h2>SAPROLYT-G</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={saprsaprolyt} alt="ceon (saprsaprolyt-g" />

                        </div>
                        <div className="col-md-4">
                            <span className='composition'>Composition:-</span>
                            <p>
                                Sio 60-65%,Al2o 12-18%,Fe2o2 23% Cao 15-18%, MGO 2.5%,Na2o 1-2 %,Probiotics, Yucca extract.</p>
                            <span className='composition'>Dosage:-</span>
                            <p>5 to 10 kg per acre in every 15 days.For pond preparation 20 kg per acre.</p>
                            <span className='composition'>Direction of usage :-</span>
                            <p>Direct pond application and broadcast uniformly throughout the pond or as advised by the aqua consultant.</p>
                        </div>
                        <div className="col-md-4">
                            <span className='composition'>Benifets :-</span>
                            <ul>
                                <li>Removes  toxic  gases  like  ammonia  and Hydrogen sulphide and keeps the pond  bottom fresh.</li>
                                <li>Releases  oxygen  improves  DO  levels in the pond and regulates  the COD and BOD levels in the pond</li>
                                <li>Clears harmful Algae </li>
                                <li>Reduce  turbidity  and  improves  water quality</li>
                                <li>prevents the sludge formation at the pond bottom and keeps the pond bottom clean and free from pathogenic microbes</li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>



            {/***** GERMI KILL *****/}
            <div className="container product-list">
                <h2>GERMI KILL</h2>
                <div className="row">
                    <div className="col-md-4">
                        <span className='composition'>Composition:-</span>
                        <p>
                            Alkylbenzyl Dimethyl Ammonium Chlorides (Benzyl konium Chloride 80%)</p>
                        <span className='composition'>Dosage:-</span>
                        <p>1 Ltr per Acre or as advised by the aqua consultant</p>
                        <span className='composition'>Direction of usage :-</span>
                        <p>Mix Required Quantity of Germi kill in pond water and broad cast throughout the pond. Apply During the Hot weather and run the aerators for best result or as advised by the aqua consultant</p>
                    </div>
                    <div className="col-md-4">
                        <span className='composition'>Benifets :-</span>
                        <ul>
                            <li>A powerful disinfectant which controls and prevent pathogenic loads in the pond.</li>
                            <li>Controls external infections of the animal .</li>
                            <li>Acts well on protozoan infections.	</li>
                            <li>Helps for good water quality and enhance moulting.</li>
                            <li>It can be used in wide range of pH conditions and helps in promoting good water quality for better growth of the animal.</li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <img src={germiKill} alt="germi Kill" />
                    </div>
                </div>
            </div>


            {/*****  SAFE SHIELD *****/}
            <div className="light-blue">
                <div className="container product-list">
                    <h2> SAFE SHIELD</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={safeShild} alt="ceon (safe Shild" />

                        </div>
                        <div className="col-md-4">
                            <span className='composition'>Composition:-</span>
                            <p>
                                Safe Shield is a nano-tech based universal disinfectant .</p>
                            <span className='composition'>Dosage:-</span>
                            <p>1 Litre per acre </p>
                            <span className='composition'>Direction of usage :-</span>
                            <p>Mix required quantity of Safe Shield with pond water and broadcast uniformly throughout the pond or as advised by the aqua consultant.</p>
                        </div>
                        <div className="col-md-4">
                            <span className='composition'>Benifets :-</span>
                            <ul>
                                <li>Nano particles attack the microbial cell walls/protein coats and breaks it ,thus disrupting its genetic material.</li>
                                <li>Kills the pathogenic bacteria, virus and fungal infections</li>
                                <li>Shows immediate effect when compared to the conventional sanitizer</li>
                                <li>Environmentally safe and non-toxic</li>
                                <li>No left over residues in the pond</li>
                                <li>Nano sized particles are proven to be showing better efficacy when compared to its basic elemental counterparts. </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/***** DIODINE *****/}
            <div className="container product-list">
                <h2>DIODINE</h2>
                <div className="row">
                    <div className="col-md-4">
                        <span className='composition'>Composition:-</span>
                        <p>
                            Nonyl alkyl Phenoxy poly Ethylene Oxide Iodine.</p>
                        <span className='composition'>Dosage:-</span>
                        <p>500 ml per Acre</p>
                        <span className='composition'>Direction of usage :-</span>
                        <p>Required Quantity of Diodine-20 with dry sand and broadcast uniformly throughout the pond (or) Recommended by aqua consultant
                        </p>
                    </div>
                    <div className="col-md-4">
                        <span className='composition'>Benifets :-</span>
                        <ul>
                            <li>Improves the metabolic rate.</li>
                            <li>Excellent water disinfectant which reduces the pathogenic microbial loads in the pond water and pond bottom.</li>
                            <li>controls tail rot and abnormal antennae damage.</li>
                            <li>Effectively kills  bacteria, Fungi, Protozoa,Viruses, spores, algae.</li>
                            <li>Helps in removing the gill infection in the animal.</li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <img src={germiKill} alt="germi Kill" />
                    </div>
                </div>
            </div>








        </div>
    );
}

export default OurProducts;
