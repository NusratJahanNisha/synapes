import React from 'react';
import { ButtonBase, Grid, makeStyles, Paper, Typography } from '@material-ui/core';


// -----------------------Why us section of CAREER page---------------------------


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


const Why = () => {
    const classes = useStyles();
    return (
        <div>
            <p style={{ color: "grey" }}>Our people are our future" People are the pivot in our organizational planning. Human Resource plays a key role and human capital forms the most crucial part of our organisation portfolio of privileged assets.</p>
            <div style={{ padding: "50px" }}>
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2} direction="row"
                            justify="flex-start"
                            alignItems="center">
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img style={{ width: "100%" }} src="https://i.ibb.co/ZTR91bx/why.jpg" alt="" />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container style={{ padding: "40px" }}>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            WHY Synapes ?
                                     </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            <p style={{ color: "grey" }}>Whether it’s helping invent the next breakthrough treatment or simply challenging and supporting one another for mutual betterment, our culture is about applied curiosity. We are dedicated to our team members’ growth and development, and empower each of them to reach their full potential regardless of function, geography or experience level. </p>
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1">
                                            Why synapes ? Because we are:
                                     </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            <p style={{ color: "grey" }}>
                                                Committed to fostering development and rewarding talent <br />
                                                Dedicated to diversity and inclusion at every level of our organization <br />
                                                Adept at recognizing unique skill sets and nurturing our employees’ talents </p>
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

export default Why;