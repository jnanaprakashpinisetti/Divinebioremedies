import React from 'react';
import expertIcon from '../images/icons/expert-profissional.svg';
import customerIcon from '../images/icons/customer-satisfaction.svg';
import standerdIcon from '../images/icons/highe-standards.svg';
import customerCareIcon from '../images/icons/customer-support.svg';

export default function Choose() {
    return (
        <>
            <section className="choose-wrap">

                <h1 className="section-heading">
                    why Choose  <span className="blue">divine </span><span className="yellow">bio remedies</span>
                </h1>
                <div className="container">
                    <div className="row">
                    <div className="colmd-12">

                <h5 className='text-center'>At  <strong className="blue"> Divine Bio Remedies </strong>, we don’t just manufacture aqua health care products—we craft <strong>science-backed, 
                    sustainable solutions </strong> for a healthier tomorrow. Here’s why leading hospitals, industries, and households trust us</h5>
                    </div>
                    </div>
                    </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-wrap">
                                <img src={expertIcon} alt="Expert icon" />
                            </div>
                            <div className="info-wrap">
                                <h4>Uncompromising Purity & Safety</h4>
                                <p>Our products are formulated with 99.9% pathogen-free water and natural active ingredients.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="img-wrap">
                                <img src={customerIcon} alt="Customer icon" />
                            </div>
                            <div className="info-wrap">
                                <h4>Eco-Conscious Innovation</h4>
                                <p>Zero toxic residues – Safe for humans, gentle on the environment. Biodegradable formulations that align with global sustainability goals.</p>
                            </div>

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-wrap">
                                <img src={standerdIcon} alt="standerd icon" />
                            </div>
                            <div className="info-wrap">
                                <h4>Ethical & Transparent Practices</h4>
                                <p>We understand the challenges and demands of finding trusted professionals for your service requirements.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="img-wrap">
                                <img src={customerCareIcon} alt="customer care icon" />
                            </div>
                            <div className="info-wrap">
                                <h4>24 / 7 Customer support</h4>
                                <p>We are available to offer you services with 24/7 support</p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
