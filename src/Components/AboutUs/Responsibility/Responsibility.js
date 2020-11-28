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
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));



const Responsibility = () => {
    const classes = useStyles();
    return (
        <div style={{ padding: "50px" }}>
            <h1 style={{ textAlign: "center" }}>Corporate Responsibility</h1>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2} direction="row"
                        justify="flex-start"
                        alignItems="center">
                        <Grid item
                        >
                            <ButtonBase className={classes.image}>
                                <img style={{ width: "100%", height: "100%" }} src="https://i.ibb.co/rQ71HQn/our-responsibility.jpg" alt="" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container style={{ padding: "40px" }}>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Our commitment: improving health through responsible business.
                                     </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        <p style={{ color: "grey" }}>We are committed to creating a culture of integrity and we believe that, as a global leader in healthcare, we have a responsibility to serve as a role model in how we conduct our business. We focus our corporate responsibility work on two areas that underscore our mission, expanding access to healthcare and doing business responsibly. We care for our associates, contribute to our local communities, and strive to operate with high integrity and transparency.</p>
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1">
                                        Our commitment: improving health through responsible business.
                                     </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        <p style={{ color: "grey" }}>
                                            Our commitment: improving health through responsible business.
                                            We are committed to creating a culture of integrity and we believe that, as a global leader in healthcare, we have a responsibility to serve as a role model in how we conduct our business. We focus our corporate responsibility work on two areas that underscore our mission, expanding access to healthcare and doing business responsibly. We care for our associates, contribute to our local communities, and strive to operate with high integrity and transparency.Our commitment: improving health through responsible business.
                                            We are committed to creating a culture of integrity and we believe that, as a global leader in healthcare, we have a responsibility to serve as a role model in how we conduct our business. We focus our corporate responsibility work on two areas that underscore our mission, expanding access to healthcare and doing business responsibly. We care for our associates, contribute to our local communities, and strive to operate with high integrity and transparency. We aim to improve global health. Through our business, we make an important contribution to society: We discover and develop innovative medicines. Novartis collaborates with others to help address some of the world’s greatest health challenges. We focus our corporate responsibility work on two areas that underscore our mission of caring and curing: expanding access to healthcare and doing business responsibly.</p>
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1">
                                        Expanding access to healthcare
                                     </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        <p style={{ color: "grey" }}>We work to control and eliminate diseases such as malaria and critical care diseases new business approaches to reach underserved patients, and find new treatments and adaptive solutions to improve health in developing countries.</p>
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1">
                                        Doing business responsibly
                                     </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        <p style={{ color: "grey" }}>This is a core part of synapes. We are committed to creating a culture of integrity and demonstrate ethical leadership.</p>
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

export default Responsibility;