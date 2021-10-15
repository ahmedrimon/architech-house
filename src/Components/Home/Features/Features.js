import React from 'react';
import './Features.css';

import { faBorderStyle, faTruck, faPalette } from '@fortawesome/free-solid-svg-icons';
// import {  faInstallod  } from '@fortawesome/free-brands-svg-icons';

import FeaturesData from '../FeaturesData/FeaturesData';

const Features = () => {
    const FeatureData = [
        {
            icon: faBorderStyle,
            title: 'Latest Styles'
        },
        {
            icon: faPalette,
            title: 'Installation'
        },
        {
            icon: faTruck,
            title: 'Local Delivery'
        },
        {
            icon: faBorderStyle,
            title: 'Cad Design'
        }
        
    ]
    return (
        <div className="conatainer mt-5 text-center">
            <h5>High quality furniture and showers in Gloucester. We stock all the latest designs from the UK's best</h5>
            <h5>manufacturers. Come and see our showroom today!</h5>
            <div className="container feature-container d-flex mt-5">
                {
                    FeatureData.map(feature => <FeaturesData feature={feature}></FeaturesData>)
                }
            </div>
            
        </div>
    );
};

export default Features;