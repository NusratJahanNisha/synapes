import React from 'react';
import { Grid, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: "5px 5px 5px 5px lightgrey",
    },
}));


const GetToKnow = () => {
    const classes = useStyles();
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Get To Know Synapes</h1>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper className={classes.paper}>
                            <img style={{ width: "100%", height: "150px" }} src="https://i.ibb.co/Th4m02z/mission.jpg" alt="" />
                            <h3 style={{ textAlign: "center", color: "black" }}>Our Mission</h3>
                            <p style={{ color: "grey", textAlign: "left" }}>Our mission is to discover new ways to improve and extend people’s lives. Our vision is to be a trusted leader in changing the practice of medicine.We use science-based innovation to address some of society's most challenging healthcare issues.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper className={classes.paper}>
                            <img style={{ width: "100%", height: "150px" }} src="https://i.ibb.co/k2PnJRT/values.jpg" alt="" />
                            <h3 style={{ textAlign: "center", color: "black" }}>Our Values</h3>
                            <p style={{ color: "grey", textAlign: "left" }}>Strong values define our culture and help us execute the Synapes Life Sciences strategy in line with our mission and vision. We have introduced Values and Behaviors that describe the professional behaviors we expect from our employees.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper className={classes.paper}>
                            <img style={{ width: "100%", height: "150px" }} src="https://i.ibb.co/ZJ5rQnr/inno.jpg" alt="" />
                            <h3 style={{ textAlign: "center", color: "black" }}>Our Strategy</h3>
                            <p style={{ color: "grey", textAlign: "left" }}>Our strategy is to use science-based innovation to deliver better patient outcomes. We aim to lead in growing areas of healthcare. We are well prepared for a world with a growing, aging population and continuously evolving healthcare needs.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper className={classes.paper}>
                            <img style={{ width: "100%", height: "150px" }} src="https://i.ibb.co/znsLxjP/leadership.jpg" alt="" />
                            <h3 style={{ textAlign: "center", color: "black" }}>Our Leadership</h3>
                            <p style={{ color: "grey", textAlign: "left" }}>In the context of an increasingly challenging healthcare environment, we are reinforcing our culture, boosting our skills and building a diverse workforce with talented leaders to produce better results for patients.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper className={classes.paper}>
                            <img style={{ width: "100%", height: "150px" }} src="https://i.ibb.co/3yn0pbf/company-history.jpg" alt="" />
                            <h3 style={{ textAlign: "center", color: "black" }}>Company History</h3>
                            <p style={{ color: "grey", textAlign: "left" }}>Synapes Life Sciences was created by Shandilya Group and the group has a rich experience of more than 25 years in various fields.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper className={classes.paper}>
                            <img style={{ width: "100%", height: "150px" }} src="https://i.ibb.co/prNNCQv/business.jpg" alt="" />
                            <h3 style={{ textAlign: "center", color: "black" }}>Our Business</h3>
                            <p style={{ color: "grey", textAlign: "left" }}>Synapes Life Sciences healthcare portfolio is strategically aligned to deliver positive impact to our patients.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper className={classes.paper}>
                            <img style={{ width: "100%", height: "150px" }} src="https://i.ibb.co/NxcRb70/responsibility.jpg" alt="" />
                            <h3 style={{ textAlign: "center", color: "black" }}>Our Responsibility</h3>
                            <p style={{ color: "grey", textAlign: "left" }}>We apply our expertise in science and innovation to society’s biggest health challenges. Responsibility is a core part of our business strategy.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper className={classes.paper}>
                            <img style={{ width: "100%", height: "150px" }} src="https://i.ibb.co/fMYD6n4/contact-us.jpg" alt="" />
                            <h3 style={{ textAlign: "center", color: "black" }}>Contact Us</h3>
                            <p style={{ color: "grey", textAlign: "left" }}>Whether you're a customer, job seeker, health or media professional or an investor, find the best way to contact us.</p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default GetToKnow;