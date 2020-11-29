import React from 'react';
import { Button, ButtonBase, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


// ----------------------------About us section of HOME page---------------------


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


const About = () => {
    const classes = useStyles();
    return (
        <div>
            <div style={{ padding: "50px" }}>
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2} direction="row"
                            justify="flex-start"
                            alignItems="center">
                            <Grid item xs={12} sm container style={{ padding: "40px" }}>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            <h1>About Synapes Life Sciences</h1>
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            <p style={{ color: "grey" }}>We seek to develop medicines and products that can produce positive real-world outcomes for patients and healthcare providers. The benefits can range from improving the cost-¬effectiveness of high-quality care to pro¬longing lives. We are developing services and technol¬o¬gies to augment the benefits of our core products, often in collaboration with healthcare providers and technology companies. We are committed to creating a culture of integrity and we believe that, as a global leader in healthcare, we have a responsibility to serve as a role model in how we conduct our business. We focus our corporate responsibility work on two areas that underscore our mission, expanding access to healthcare and doing business responsibly. We care for our associates, contribute to our local communities, and strive to operate with high integrity and transparency. </p>
                                            <Button variant="outlined" color="primary">
                                                <Link to="/aboutUs" style={{ textDecoration: "none" }}> Know More</Link>
                                            </Button>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img style={{ width: "100%" }} src="https://i.ibb.co/7Wz8gz0/home-4.png" alt="" />
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </div>
        </div>
    );
};

export default About;