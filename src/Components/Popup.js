import React from 'react';
import nat8 from '../Media/nat-8.jpg';
import nat9 from '../Media/nat-9.jpg';

const Popup = () => (
    <div className="popup" id='popup'>
        <div className="popup__content">
            <div className="popup__left">
                <img src={nat8} alt="Tour img" className='popup__img'/>
                <img src={nat9} alt="Tour img" className='popup__img'/>  
            </div>
            <div className='popup__right'>
                <a href="#popular-tours" className="popup__close">&times;</a>
                <h2 className="heading-secondary">Start Booking Now</h2>
                <h3 className='heading__tertiary u-margin-bottom-small u-margin-top-extrasmall'>Imporntant - please read the terms and conditions first.</h3>
                <p className='popup__txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Mauris pellentesque pulvinar pellentesque habitant. 
                Vitae nunc sed velit dignissim. Tempus egestas sed sed risus. Ipsum nunc aliquet bibendum enim facilisis. 
                Justo donec enim diam vulputate ut pharetra. Libero justo laoreet sit amet cursus sit amet dictum sit. 
                Eget nunc scelerisque viverra mauris in. Rhoncus est pellentesque elit ullamcorper dignissim. Porttitor 
                rhoncus dolor purus non. Sed augue lacus viverra vitae congue eu consequat ac felis. Ullamcorper a lacus 
                vestibulum sed arcu non odio euismod. Arcu non sodales neque sodales ut. Lacus viverra vitae congue eu 
                consequat ac felis donec et.  
                </p>
                <a href="#" className="btn btn--green">Book now!</a>
            </div>
        </div>
    </div>
);

export default Popup;