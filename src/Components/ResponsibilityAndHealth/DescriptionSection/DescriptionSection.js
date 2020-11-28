import React from 'react';
import { ButtonBase, Grid, makeStyles, Paper, Typography } from '@material-ui/core';

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
const DescriptionSection = () => {
    const classes = useStyles();
    return (
        <div>
            <div style={{ padding: "50px" }}>
                <h1 style={{ textAlign: "center" }}>Working At Synapes</h1>
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2} direction="row"
                            justify="flex-start"
                            alignItems="center">
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img style={{ width: "100%" }} src="https://i.ibb.co/0Qr9mH8/health.jpg" alt="" />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container style={{ padding: "40px" }}>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography variant="body2" gutterBottom>
                                            <p style={{ color: "grey" }}>

                                                At Synapes, we believe every individual deserves the opportunity to live the healthiest life possible. That’s why we strive to strengthen health systems, increase access to our medicines and foster socially responsible entrepreneurship to help find sustainable solutions for patients in need around the world. We also realize the power of individuals to drive meaningful change in today’s global health landscape. It's these singular voices that inspire us to make the best use of our people, our products and our funding to address complex public health challenges. Here you will find the stories of our partners, patients, caregivers, colleagues, and others who inspire us with their efforts to change lives and make the world a healthier place.
                                            </p>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </div>
        </div>
    );
};

export default DescriptionSection;