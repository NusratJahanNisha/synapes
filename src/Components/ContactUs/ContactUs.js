import { Container } from '@material-ui/core';
import React from 'react';
import ContactBanner from './ContactBanner/ContactBanner';
import ContactInfo from './ContactInfo/ContactInfo';
import MessageUs from './MessageUs/MessageUs';
import Delhi from './Map/Delhi';
import Navbar from '../CommonSections/Navbar/Navbar';
import Footer from '../CommonSections/Footer/Footer';


// --------------------------Whole CONTACT US page-------------------

const ContactUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ContactBanner></ContactBanner>
            <Container>
                <ContactInfo></ContactInfo>
                <MessageUs></MessageUs>
                <Delhi></Delhi>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;