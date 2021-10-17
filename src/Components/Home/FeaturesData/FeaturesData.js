import React from 'react';
import './FeatureData.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FeaturesData = ({feature}) => {
    return (
        <div className="col-md-4">
                <FontAwesomeIcon className="feature-icon" icon={feature.icon} />
                <h2>{feature.title}</h2>
                <a href="/project">
                    <button className="main-button mt-2">Show Me More</button>
                </a>
                
            
        </div>
    );
};

export default FeaturesData;