import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';


// ----------------------Carousel of HOME page---------------------------------


const Carousel = () => {
    let Carousel = require('3d-react-carousal').Carousel;
    let slides = [
        <img style={{ height: "450px" }} src="https://i.ibb.co/jTLdCym/logo2.png" alt="1" />,
        <img style={{ height: "450px" }} src="https://i.ibb.co/309Q4f1/slide1.png" alt="2" />,
        <img style={{ height: "450px" }} src="https://i.ibb.co/C77j70c/slide3.jpg" alt="3" />,
        <img style={{ height: "450px" }} src="https://i.ibb.co/sbgTKY7/slide2.png" alt="4" />,
        <img style={{ height: "450px" }} src="https://i.ibb.co/Hdz1w9j/slide3.png" alt="5" />,
        <img style={{ height: "450px" }} src="https://i.ibb.co/LYszj0b/slide2.webp" alt="6" />,
        <img style={{ height: "450px" }} src="https://i.ibb.co/tcKsv3f/health.jpg" alt="7" />];
    return (
        <div style={{ paddingTop: "5px" }}>
            <div style={{ padding: "50px" }}><Carousel slides={slides} autoplay={false} interval={1000} /></div>
            <Grid style={{ paddingTop: "50px" }}
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                <Button style={{ marginLeft: "5px" }} variant="contained" color="primary">
                    <Link to="/aboutUs" style={{ textDecoration: "none", color: "white" }}>    Learn More</Link>
                </Button>
                <Button variant="outlined" color="primary">
                    <Link to="/contactUs" style={{ textDecoration: "none" }}> Contact Us</Link>
                </Button>
            </Grid>
        </div>
    );
};

export default Carousel;