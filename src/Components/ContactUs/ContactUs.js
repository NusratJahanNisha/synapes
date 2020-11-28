import { Container } from '@material-ui/core';
import React from 'react';
import ContactBanner from './ContactBanner/ContactBanner';
import ContactInfo from './ContactInfo/ContactInfo';

const ContactUs = () => {
    return (
        <div>
            <Container>
            <ContactBanner></ContactBanner>
            <ContactInfo></ContactInfo>
            </Container>
        </div>
    );
};

export default ContactUs;