import { Container } from '@material-ui/core';
import React from 'react';
import ContactBanner from './ContactBanner/ContactBanner';
import ContactInfo from './ContactInfo/ContactInfo';
import MessageUs from './MessageUs/MessageUs';
import  Delhi  from './Map/Delhi';

const ContactUs = () => {
    return (
        <div>
            <Container>
            <ContactBanner></ContactBanner>
            <ContactInfo></ContactInfo>
            <MessageUs></MessageUs>
            <Delhi></Delhi>
            </Container>
        </div>
    );
};

export default ContactUs;