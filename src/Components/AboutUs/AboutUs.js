import { Container } from '@material-ui/core';
import React from 'react';
import Banner from './Banner/Banner';
import GetToKnow from './GetToKnow/GetToKnow';
import MissionAndVision from './MissionAndVision/MissionAndVision';
import OurStrategy from './OurStrategy/OurStrategy';
import OurValues from './OurValues/OurValues';
import Responsibility from './Responsibility/Responsibility';

const AboutUs = () => {
    return (
        <div>
            <Container>
            <Banner></Banner>
            <GetToKnow></GetToKnow>
            <MissionAndVision></MissionAndVision>
            <OurStrategy></OurStrategy>
            <Responsibility></Responsibility>
            <OurValues></OurValues>
            </Container>

        </div>
    );
};

export default AboutUs;