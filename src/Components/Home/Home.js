import { Container } from '@material-ui/core';
import React from 'react';
import Footer from '../CommonSections/Footer/Footer';
import Navbar from '../CommonSections/Navbar/Navbar';
import About from './About/About';
import Carousel from './Carousel/Carousel';
import Experience from './Experience/Experience';
import Feedback from './Feedback/Feedback';
import Welcome from './Welcome/Welcome';


// -------------------------Whole HOME page---------------------------------


const Home = () => {
    return (
        <div>
            <Container>
                <Navbar></Navbar>
                <Carousel></Carousel>
                <Welcome></Welcome>
                <About></About>
                <Experience></Experience>
                <Feedback></Feedback>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Home;