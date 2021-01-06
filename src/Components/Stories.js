import React from 'react';
import nat8 from '../Media/nat-8.jpg';
import nat9 from '../Media/nat-9.jpg';
import myVid from '../Media/video(2).mp4';
import webm from '../Media/video.webm';

const Stories = () => (
    <section className="section-stories">
        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={myVid} type='vidoe/mp4'></source>
                <source src={webm} type='video/webm'></source>
                Your browser is not supported.
            </video>
        </div>
        <div className="u-center-txt u-margin-bottom-big">
            <h2 className="heading-secondary">We make people genuenly happy</h2>
        </div>

        <div className="row">
            <div className="story">
                <figure className="story__shape">
                    <img src={nat8} alt="nat-8" className='story__image'/>
                    <figurecaption className="story__caption">Mary Smith</figurecaption>
                </figure>
                <div className="story__txt">
                    <h3 className="heading-tertiary u-margin-bottom-small">I had the best weekend ever with my family!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Porro sed saepe sint repellat autem qui adipisci rem praesentium sapiente maiores 
                        temporibus quas unde rerum sit vitae, inventore architecto
                    </p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="story">
                <figure className="story__shape">
                    <img src={nat9} alt="nat-8" className='story__image'/>
                    <figurecaption className="story__caption">Jack Wilson</figurecaption>
                </figure>
                <div className="story__txt">
                    <h3 className="heading-tertiary u-margin-bottom-small">WOW! My life is completly different now!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Porro sed saepe sint repellat autem qui adipisci rem praesentium sapiente maiores 
                        temporibus quas unde rerum sit vitae, inventore architecto
                    </p>
                </div>
            </div>
        </div>
        
        <div className="u-center-txt u-margin-top-big">
            <a href='#' className="btn-text">Read alll stories &rarr;</a>
        </div>

    </section>
);

export default Stories;