import React from 'react';
import { ButtonBase, Grid, makeStyles, Paper, Typography } from '@material-ui/core';


// --------------------Mission vision section of ABOUT US page------------------------


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


const MissionAndVision = () => {
    const classes = useStyles();
    return (
        <div style={{ padding: "50px" }}>
            <h1 style={{ textAlign: "center" }}>Our Mission And Vision</h1>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2} direction="row"
                        justify="flex-start"
                        alignItems="center">
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img style={{ width: "100%" }} src="https://i.ibb.co/cT2Mvz0/mission-Vision.jpg" alt="" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container style={{ padding: "40px" }}>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Our mission is to discover new ways to improve and extend people's lives!
                                     </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        <p style={{ color: "grey" }}>We use science-based innovation to address some of society's most challenging healthcare issues. We discover and develop breakthrough treatments and find new ways to deliver them to as many people as possible. We also aim to provide a shareholder return that rewards those who invest their money, time and ideas in our company. <br /> Our vision is to be a trusted leader in changing the practice of medicine. </p>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    );
};

export default MissionAndVision;