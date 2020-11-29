import { Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';


//-------------------Welcome section of HOME page--------------------- 


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Welcome = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root} style={{ padding: "40px" }}>
                <h1 style={{ textAlign: "center" }}>Welcome To Synapes Life Sciences Pvt. Ltd.</h1>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} lg={4}>
                        <Paper className={classes.paper} style={{ textAlign: "left" }}>
                            <img style={{ width: "100%" }} src="https://i.ibb.co/k2PnJRT/values.jpg" alt="" />
                            <h2 style={{ color: "black", textAlign: "center" }}>Our Values</h2>
                            <p style={{ textAlign: "center" }}>Our core values are driven by a desire to improve life, achieve scientific excellence, operate with the highest standards of integrity
                            </p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                        <Paper className={classes.paper} style={{ textAlign: "left" }}>
                            <img style={{ width: "100%" }} src="https://i.ibb.co/tcKsv3f/health.jpg" alt="" />
                            <h2 style={{ color: "black", textAlign: "center" }}>Improving Life</h2>
                            <p style={{ textAlign: "center" }}>We embrace our quest to tackle health challenges because we are inspired by the differences we can make in the lives of people around the world.
                            </p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                        <Paper className={classes.paper} style={{ textAlign: "left" }}>
                            <img style={{ width: "100%" }} src="https://i.ibb.co/9wbcnC8/ethics.jpg" alt="" />
                            <h2 style={{ color: "black", textAlign: "center" }}>Ethics & Integrity</h2>
                            <p style={{ textAlign: "center" }}>We are committed to the highest standards of ethics and integrity. We are responsible to our customers, to Merck employees, to the environments .
                            </p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Welcome;