import { Container, Grid } from '@material-ui/core';
import React from 'react';
import './Footer.css';


// -----------------Footer section of ALL pages-----------------


const Footer = () => {
    return (
        <div className="footer" style={{ padding: "40px" }}>
            <Container>
                <Grid container spacing={1}>
                    <Grid container style={{ padding: "25px" }} xs={12} sm={6} md={4} spacing={3}>
                        <Grid
                            direction="column"
                            justify="flex-end"
                            alignItems="center"
                        >
                            <h1 style={{ color: "white" }}>About</h1>
                            <p style={{ color: "lightGrey" }}>Synapes Life Sciences Pvt. Ltd. is rated as the fastest growing pharmaceutical organization. The vision that it has believed in "to Save Lives Through Life Saving Drugs" has earned it tremendous goodwill of being a respected and reputed. In addition, professional ethics govern policies regarding Finance and Accounting, Human Resource, Sales and Marketing, Production .</p>
                        </Grid>
                    </Grid>
                    <Grid container style={{ padding: "30px" }} xs={12} sm={6} md={4} spacing={3}>
                        <Grid
                            direction="column"
                            justify="flex-end"
                            alignItems="center"
                        >
                            <h1 style={{ color: "white" }}>Contact Details</h1>
                            <h5 style={{ color: "white" }}> 310 Aggarwal Chamber, Plot No.4, Sector 12, Dwarka, New Delhi-110078</h5>
                            <h5 style={{ color: "white" }}>Call Us Now  </h5>
                            <h5 style={{ color: "lightGrey" }}>011-49124675</h5>
                            <h5 style={{ color: "white" }}>Send Mail Us</h5>
                            <h5 style={{ color: "lightGrey" }}>synapeslifesc@gmail.com</h5>
                        </Grid>
                    </Grid>
                    <Grid container style={{ padding: "50px" }} xs={12} sm={6} md={4} spacing={3}>
                        <Grid
                            direction="column"
                            justify="flex-end"
                            alignItems="center"
                        >
                            <h1 style={{ color: "white" }}> Usefull Links</h1>
                            <h5 style={{ color: "lightGrey" }}> > Home</h5>
                            <h5 style={{ color: "lightGrey" }}> > About</h5>
                            <h5 style={{ color: "lightGrey" }}> > Products</h5>
                            <h5 style={{ color: "lightGrey" }}> > Enquiry</h5>
                            <h5 style={{ color: "lightGrey" }}> > Contact us</h5>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Footer;