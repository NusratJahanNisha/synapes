import { Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';


// -------------------------Contact Info section of CONTACT US page----------------


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

const ContactInfo = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ padding: "40px" }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} lg={4}>
                    <Paper className={classes.paper} style={{ textAlign: "left" }}>
                        <h4 style={{ color: "#4ED0F3" }}>Synapes Life Sciences Pvt. Ltd.</h4>
                        <p><span style={{ color: "#4ED0F3" }}>Street: </span> 10 Aggarwal Chamber</p>
                        <p><span style={{ color: "#4ED0F3" }}>City: </span> Plot No.4, Sector 12, Dwarka</p>
                        <p><span style={{ color: "#4ED0F3" }}> Country: </span>  New Delhi-110078</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <Paper className={classes.paper} style={{ textAlign: "left" }}>
                        <h4 style={{ color: "black" }}>24/7 Quick Contact</h4>
                        <p><span style={{ color: "#4ED0F3" }}>Phone: </span> 011-49124675</p>
                        <p><span style={{ color: "#4ED0F3" }}>Email:  </span> synapeslifesc@gmail.com</p>
                        <p><span style={{ color: "#4ED0F3" }}> Website:</span>www.synapeslifesc.in</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <Paper className={classes.paper} style={{ textAlign: "left" }}>
                        <h4 style={{ color: "black" }}>Working Hours</h4>
                        <p><span style={{ color: "#4ED0F3" }}>Mon - Fri Day:  </span> 09.00am to 18.00pm</p>
                        <p><span style={{ color: "#4ED0F3" }}>Saturaday: </span> 10.00am to 16.00pm</p>
                        <p><span style={{ color: "#4ED0F3" }}>Sunday: </span>  Closed</p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default ContactInfo;