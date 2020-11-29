import { Container } from '@material-ui/core';
import React from 'react';
import Footer from '../CommonSections/Footer/Footer';
import Navbar from '../CommonSections/Navbar/Navbar';
import CareerBanner from './CareerBanner/CareerBanner';
import EmployeeBenefits from './EmployeeBenefits/EmployeeBenefits';
import Why from './Why/Why';
import WorkingAtSynapes from './WorkingAtSynapes/WorkingAtSynapes';


// -------------------------Whole CAREER page------------------------------

const Career = () => {
    return (
        <div>
            <Navbar></Navbar>
            <CareerBanner></CareerBanner>
            <Container>
                <Why></Why>
                <EmployeeBenefits></EmployeeBenefits>
                <WorkingAtSynapes></WorkingAtSynapes>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Career;