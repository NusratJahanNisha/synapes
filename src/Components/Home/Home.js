import { Container } from '@material-ui/core';
import React from 'react';
import About from './About/About';
import Experience from './Experience/Experience';
import Welcome from './Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Container>
                <Welcome></Welcome>
                <About></About>
                <Experience></Experience>
            </Container>
        </div>
    );
};

export default Home;