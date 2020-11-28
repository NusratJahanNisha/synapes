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



const OurStrategy = () => {
    const classes = useStyles();
    return (
        <div style={{ padding: "50px" }}>
            <h1 style={{ textAlign: "center" }}>Our Strategy</h1>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2} direction="row"
                        justify="flex-start"
                        alignItems="center">
                        <Grid item xs={12} sm container style={{ padding: "20px" }}>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Our mission is to discover new ways to improve and extend people's lives!
                                     </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        <p style={{ color: "grey" }}>We believe synapes is well prepared for a world with a growing, aging population and continuously evolving healthcare needs. We have a clear mission, focused strategy and strong culture, all of which we expect will support the creation of value over the long term for our company, our shareholders and society. Our strategy is to use science-based innovation to deliver better patient outcomes. We aim to lead in growing areas of healthcare.</p>
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1">
                                        Better patient outcomes
                                     </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        <p style={{ color: "grey" }}>We seek to develop medicines and products that can produce positive real-world outcomes for patients and healthcare providers. The benefits can range from improving the cost-¬effectiveness of high-quality care to pro¬longing lives. We are developing services and technol¬o¬gies to augment the benefits of our core products, often in collaboration with healthcare providers and technology companies.</p>
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1">
                                        Lead in growing areas of healthcare
                                     </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        <p style={{ color: "grey" }}>We aim to develop innovative products in growing areas of healthcare where we can make a real difference. We focus on patented medicines, critical care and neurological – segments where we have the innovation power and global scale necessary to compete effectively.</p>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item style={{ padding: "20px" }} >
                            <ButtonBase className={classes.image} >
                                <img style={{ width: "100%" }} src="https://i.ibb.co/wWX7j11/our-strategy.jpg" alt="" />
                            </ButtonBase>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    );
};

export default OurStrategy;