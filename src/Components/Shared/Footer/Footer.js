import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="container footer-container">
            <div className="footer-inside d-flex">
                <FontAwesomeIcon className="footer-icon" icon={faFacebook} />
                <FontAwesomeIcon className="footer-icon" icon={faTwitter} />
                <FontAwesomeIcon className="footer-icon" icon={faInstagramSquare} />
            </div>
            <div className="footer-inside mt-3">
                <div>
                    <p>Aqua Direct Ltd</p> <br/>
                    <p>11 Bamel Way, Gloucester, Gloucestershire GL3 4BH</p>
                </div>
                <div>
                    <p>T: 01452 613221</p>
                    <p>E: aquadirectltd@gmail.com</p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;