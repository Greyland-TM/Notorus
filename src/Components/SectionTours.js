import React from 'react';
import imgFirst from '../Media/nat-1-large.jpg';
import imgSecond from '../Media/nat-2-large.jpg';
import imgThrid from '../Media/nat-3-large.jpg';

const SectionTours = () => (
    <main>
        <section className="section-about">
            <div className='u-center-txt u-margin-bottom-big'>
                <h2 className="heading-secondary">Exciting tours for adventurous people</h2>
            </div>

            <div className='row'>
                <div className='col-1-of-2'>

                    <h3 className="heading-tertiary u-margin-bottom-small">Your going to fall in love with nature.</h3>
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Porro sed saepe sint repellat autem qui adipisci rem praesentium sapiente maiores 
                    temporibus quas unde rerum sit vitae, inventore architecto.</p>

                    <h3 className="heading-tertiary u-margin-bottom-small">Live adventurous like you never have before.</h3>
                    <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Odit corrupti repellendus esse architecto libero aspernatur ut iste dolor facere neque, 
                    distinctio eligendi asperiores delectus necessitatibus porro?</p>

                    <a href='#' className="btn-text">Learn More &rarr;</a>

                </div>
                <div className='col-1-of-2'>
                    <div className="composition">
                        <img src={imgThrid} alt="p1" className="composition__photo composition__photo--P1"/>
                        <img src={imgSecond} alt="P2" className="composition__photo composition__photo--P2"/>
                        <img src={imgFirst} alt="p3" className="composition__photo composition__photo--P3"/>
                    </div> 
                </div>
            </div>
        </section>
    </main>
);

export default SectionTours