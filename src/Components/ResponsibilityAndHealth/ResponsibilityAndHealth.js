import { Container } from '@material-ui/core';
import React from 'react';
import Footer from '../CommonSections/Footer/Footer';
import Navbar from '../CommonSections/Navbar/Navbar';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import HealthBanner from './HeathBanner/HealthBanner';


// ------------------------Whole RESPONSIBILITY AND HEALTH page---------------------


const ResponsibilityAndHealth = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HealthBanner></HealthBanner>
            <Container>
                <DescriptionSection></DescriptionSection>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ResponsibilityAndHealth;