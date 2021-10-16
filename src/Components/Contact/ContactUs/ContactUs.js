import React from 'react';

import GoogleMapReact from 'google-map-react';

const ContactUs = () => {

    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };

    return (
        <div className="mt-4 text-center">
            <div>
                <h4>Get in touch</h4>
                <p>Thank you for taking the time to visit our website and we hope that we can be of service to you. Should you have any questions or queries or would like some further <br/>
                information then <b>please use the "Get A Quote Today"</b> button above and one of our dedicated team will get back in contact with you ASAP.</p>
            </div>
            <div>
                <h4>Opening Hours</h4>
                <p>Monday – Friday 8.30am – 5.30pm <br/> Saturday 9.00am – 2.30pm <br/> Sunday CLOSED</p>
                <p>T: 01452 613221 <br/>E: aquaarchitectdirectltd@gmail.com</p>
                <p>Aqua architect Direct Ltd <br/> 11 Bamel Way, Gloucester, Gloucestershire GL3 4BH</p>

            </div>
            <div style={{ height: '500px', width: '1000px', marginLeft: '430px'}}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDHdJnLoIfE0hgrybVdZscs2Met6fNHRJg' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default ContactUs;