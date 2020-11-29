import React from 'react';
import { Button, ButtonBase, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


// -----------------Our values section of ABOUT US page-------------------


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 1100,
    },
    image: {
        height: 300,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));


const OurValues = () => {
    const classes = useStyles();
    return (
        <div>
            <div style={{ padding: "50px" }}>
                <h1 style={{ textAlign: "center" }}>Our Values</h1>
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2} direction="row"
                            justify="flex-start"
                            alignItems="center">
                            <Grid item xs={12} sm container style={{ padding: "40px" }}>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography variant="body2" gutterBottom>
                                            <p style={{ color: "grey" }}>Strong values define our culture and help us execute the Novartis strategy in line with our mission and vision.</p>
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1">
                                            Innovation
                                     </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            <p style={{ color: "grey" }}>By experimenting and delivering solutions</p>
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1">
                                            Quality
                                     </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            <p style={{ color: "grey" }}>By taking pride in doing ordinary things extraordinarily well</p>
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1">
                                            Performance
                                     </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            <p style={{ color: "grey" }}>By prioritizing and making things happen with urgency</p>
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1">
                                            Courage
                                     </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            <p style={{ color: "grey" }}>By speaking up, giving and receiving feedback</p>
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1">
                                            Integrity
                                     </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            <p style={{ color: "grey" }}>By advocating and applying high ethical standards every day</p>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item
                            >
                                <ButtonBase className={classes.image}>
                                    <img style={{ width: "100%", height: "100%" }} src="https://i.ibb.co/xMknWC7/our-values.jpg" alt="" />
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </div>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                style={{ paddingRight: "80px", paddingLeft: "80px", margin: "40px" }}
            >
                <h2>Synapes Life Sciences Pvt. Ltd. the right solution for you and your business</h2>
                <Button variant="outlined" color="primary">
                    <Link style={{ textDecoration: "none" }} to="/contactUs"> Contact</Link>
                </Button>
            </Grid>
        </div>
    );
};

export default OurValues;