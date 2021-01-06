import React from 'react';
import logo from '../Media/logo-green-2x.png';

const Footer = () => (
    <footer className='footer'>
        <div className="footer__logo-box">
            <img src={logo} alt="Full logo" className='footer__logo'/>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <div className="footer__navigation">
                    <ul className="footer_list">
                        <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Privacy police</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-1-of-2">
                <p className="footer__copyright">
                    Built by &nbsp; <a href="#" className="footer__link">Greyland Miller</a>
                    &nbsp; For this online corse &nbsp; <a href="#" className="footer__link">
                    &nbsp; Advanced CSS and SASS. &nbsp; </a> . Copyright &copy; By Jonas Schmedtmann. 
                    You are 100% aloud to use this webpage for both comercial and personal use, but not 
                    to claim it as your own design. The credit to the origional auther is of 
                    corse highly appricated!
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;