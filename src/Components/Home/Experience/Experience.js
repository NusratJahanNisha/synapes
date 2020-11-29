import { Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
const Experience = () => {
    const classes = useStyles();
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>We have 25 years of experience</h1>
            <h3 style={{ textAlign: "center", color: "grey" }}>We have rich experience in critical care segment, neurology segment and nephology segment, We are covering all the major hospitals and customers.</h3>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}> <p style={{ fontSize: "70px", color: "black" }}>50+</p>
                        Medicines</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}> <p style={{ fontSize: "70px", color: "black" }}>100+</p> <br />
                        Expert Technicians</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}><p style={{ fontSize: "70px", color: "black" }}>853+</p> <br />
                        Happy Customers</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}><p style={{ fontSize: "70px", color: "black" }}>1000+</p> <br />
                        Cups of Coffee</Paper>
                </Grid>
            </Grid>





        </div >
    );
};

export default Experience;