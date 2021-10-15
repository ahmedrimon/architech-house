import React from 'react';
import './AboutUs.css';

import alience from '../../../Images/alliance.jpg';
import bristan from '../../../Images/bristan.jpg';
import eastbrook from '../../../Images/eastbrook.jpg';
import grohi from '../../../Images/grohi.jpg';

const AboutUs = () => {
    return (
        <div className="about-container">
            <div>
                <h2>About Us</h2>
                <ul className="about-list">
                    <li>Family Run</li>
                    <li>Over 30 years in house experience in the bathroom industry</li>
                    <li>Years of building relationships with suppliers which has allowed us to earn a bigger discount that we can pass down directly to the supplier</li>
                    <li>Deal both with the trade and the general publicDeal both with the trade and the general public</li>
                    <li>We can design, supply and install. Or we have the option of supply only</li>
                    <li>Years of working in the trade has allowed us to recognise the best tradesmen in the local area.</li>
                    <li>Supply quality products from the leading manufactures in the bathroom industry.</li>
                    <li>Regularly use CAD computer aided design to help customers visualise their bathroom</li>
                </ul>
            </div>
            <div>
                <h2>Our Showroom and Suppliers</h2>
                <div>
                    <p>See the quality of our goods for yourself by visiting our showroom. Whether you need a whole new bathroom or just a new shower, we’re here to offer all the interior design</p>
                    <p>and technical advice you could possibly require.</p>
                </div>
                <div>
                    <p>Once you choose our services, we come to visit your home free of charge and our planner will draw up a diagram of your proposed new bathroom. Just sit back and let us</p>
                    <p>take the required measurements to ensure all your new fittings fit perfectly into your existing space. There is no upper or lower limit to what we can supply, so either get in</p>
                    <p>touch or come to see us for all your bathroom needs.</p>
                    <p>Contact Aqua Bathrooms Direct Ltd for first-rate bathroom suppliers that offers the secret for a relaxing and indulgent new bathroom.</p>
                    <div style={{padding: '2px'}}>
                        <img style={{padding: '3px'}} src={alience} alt=""/>
                        <img style={{padding: '3px'}} src={bristan} alt=""/>
                        <img style={{padding: '3px'}} src={eastbrook} alt=""/>
                        <img style={{padding: '3px'}} src={grohi} alt=""/>
                    </div>
                    <div>
                        <p>We use a large range of suppliers that allows us to get the right product for our customers at the right price</p>
                        <p>We also use a large range of suppliers to help us in keeping up with the latest trends and fashions in the bathroom industry</p>
                        <p>For customers looking for a traditional bathroom suite we use suppliers such as Heritage, Burlingtons, Armitage Shanks, Twyfords and others. These suppliers are the</p>
                        <p>For customers looking for a modern/contemporary bathroom we would use suppliers such as Britton Bathrooms, Tavistock, Higlife Bathrooms, Eastbrook and many</p>
                        <p>We offer a wide range of shower enclosures from a contract 6mm glass enclosure to a Merlyn 10mm glass enclosure. We also offer everything in between.</p>
                        <p>Large choice of brassware and showers, from Highlife Bathrooms to Grohe.</p>
                    </div>
                    
                </div>

            </div>
            
                
            
            
        </div>
    );
};

export default AboutUs;