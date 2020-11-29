import { Container } from '@material-ui/core';
import React from 'react';
import Footer from '../CommonSections/Footer/Footer';
import Navbar from '../CommonSections/Navbar/Navbar';
import Banner from './Banner/Banner';
import GetToKnow from './GetToKnow/GetToKnow';
import MissionAndVision from './MissionAndVision/MissionAndVision';
import OurStrategy from './OurStrategy/OurStrategy';
import OurValues from './OurValues/OurValues';
import Responsibility from './Responsibility/Responsibility';


// ------------------------Whole ABOUT US page-------------------------------


const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Container>
                <GetToKnow></GetToKnow>
                <MissionAndVision></MissionAndVision>
                <OurStrategy></OurStrategy>
                <Responsibility></Responsibility>
                <OurValues></OurValues>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;