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

const WorkingAtSynapes = () => {
    const classes = useStyles();
    return (
        <div>
            <div style={{ padding: "50px" }}>
                <h1 style={{textAlign:"center"}}>Working At Synapes</h1>
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2} direction="row"
                            justify="flex-start"
                            alignItems="center">
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img style={{ width: "100%" }} src="https://i.ibb.co/cN45S3j/career.jpg" alt="" />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container style={{ padding: "40px" }}>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography variant="body2" gutterBottom>
                                            <p style={{ color: "grey" }}>
                                                Our talented, diverse and driven teams work collaboratively to bring our pipeline of innovative medicines to life. Synapes has a vision of a better today and tomorrow for patients – a vision that drives our growth and success. The greatest job satisfaction for our associates is the knowledge that they improve the quality of life for patients through breakthrough science and innovation. </p>
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1">
                                            Search Careers
                                     </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            <p style={{ color: "grey" }}>
                                                Our performance-oriented culture and responsible business approach attract top experts in many areas, marketing and sales, finance and administration. Our talented associates have made us a global leader in healthcare. Synapes is committed to rewarding the people who invest their ideas and their time in our company.</p>
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

export default WorkingAtSynapes;