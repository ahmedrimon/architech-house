import React from 'react';

import one from '../../../Images/one.jpg'
import two from '../../../Images/two.jpg'
import three from '../../../Images/three.jpg'
import four from '../../../Images/four.jpg'
import five from '../../../Images/five.jpg'
import six from '../../../Images/six.jpg'

const Projects = () => {
    return (
        <div className="container text-center mt-4">
            <h4>Recent Projects</h4>
            <div className="mt-3" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <div>
                    <h5>Brushed Brass</h5>
                    <p>Brushed brass is really popular at the moment. We think this is going to look great!</p>
                </div>
                <div className="d-flex">
                    <img style={{width: '300px', marginLeft: '350px', padding: '19px'}} src={one} alt=""/>
                    <img style={{width: '300px', padding: '19px'}} src={two} alt=""/>
                </div>
            </div>
            <div className="mt-3" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <div>
                    <h5>CAD Wetroom</h5>
                    <p>We recently drew this up for one of our customers. Can't wait to see what it looks like!</p>
                </div>
                <div className="d-flex">
                    <img style={{width: '300px', marginLeft: '350px', padding: '19px'}} src={three} alt=""/>
                    <img style={{width: '300px', padding: '19px'}} src={four} alt=""/>
                </div>
            </div>
            <div className="mt-3" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <div>
                    <h5>Black Out Features</h5>
                    <p>Stand out from the crowd! Great use of black taps and showers to create an ultra modern feel in this bathroom.</p>
                </div>
                <div className="d-flex">
                    <img style={{width: '300px', marginLeft: '350px', padding: '19px'}} src={five} alt=""/>
                    <img style={{width: '300px', padding: '19px'}} src={six} alt=""/>
                </div>
            </div>
            
            
        </div>
    );
};

export default Projects;