import React from 'react';
import '../css/icon-font.css';

const Features = () => (
    <section className="section-features">

        <div className="row">
            <div className="col-1-of-4">
                <div className='feature-box-container'>
                <div className="feature-box">
                    
                    <i className='feature-box__icon icon-basic-world'></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                    <p className="feature-box__text">Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Porro sed saepe sint repellat 
                        autem qui adipisci rem praesentium.
                    </p>

                </div>
                </div>
            </div>

            <div className="col-1-of-4">
            <div className='feature-box-container'>
                <div className="feature-box">
                    
                <i className='feature-box__icon icon-basic-compass'></i>
                <h3 className="feature-box__head heading-tertiary u-margin-bottom-small">Meet nature</h3>
                <p className="feature-box__text">Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Porro sed saepe sint repellat 
                autem qui adipisci rem praesentium.
                </p>

                </div>
                </div>
            </div>

            <div className="col-1-of-4">
                <div className='feature-box-container'>
                    <div className="feature-box">
                        
                    <i className='feature-box__icon icon-basic-map'></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                    <p className="feature-box__text">Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Porro sed saepe sint repellat 
                    autem qui adipisci rem praesentium.
                    </p>

                    </div>
                </div>
            </div>

            <div className="col-1-of-4">
            <div className='feature-box-container'>
                <div className="feature-box">
                    
                <i className='feature-box__icon icon-basic-heart'></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                <p className="feature-box__text">Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Porro sed saepe sint repellat 
                autem qui adipisci rem praesentium.
                </p>

                </div>
            </div>
            </div>
        </div>
    </section>
);

export default Features;