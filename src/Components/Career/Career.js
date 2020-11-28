import { Container } from '@material-ui/core';
import React from 'react';
import CareerBanner from './CareerBanner/CareerBanner';
import EmployeeBenefits from './EmployeeBenefits/EmployeeBenefits';
import Why from './Why/Why';
import WorkingAtSynapes from './WorkingAtSynapes/WorkingAtSynapes';

const Career = () => {
    return (
        <div>
            <Container>
            <CareerBanner></CareerBanner>
            <Why></Why>
            <EmployeeBenefits></EmployeeBenefits>
            <WorkingAtSynapes></WorkingAtSynapes>
            </Container>

        </div>
    );
};

export default Career;