import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import ContactUs from '../ContactUs/ContactUs';

const Contact = () => {
    return (
        <div>
           <Navbar></Navbar>
           <ContactUs></ContactUs>
           <Footer></Footer>
        </div>
    );
};

export default Contact;