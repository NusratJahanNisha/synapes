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
const EmployeeBenefits = () => {
    const classes = useStyles();
    return (
        <div style={{ padding: "50px" }}>
            <h1 style={{ textAlign: "center" }}>Employee Benefits</h1>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2} direction="row"
                        justify="flex-start"
                        alignItems="center">
                        <Grid item xs={12} sm container style={{ padding: "20px" }}>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Talented teams, performance-based compensation
                                     </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        <p style={{ color: "grey" }}>The success of Synapes depends on the performance and dedication of our Group company associates. We strive to be an employer of choice that attracts, retains and motivates talented and performance-driven people in our affiliates around the world. Each associate is given a fixed salary based on job characteristics, market competitiveness and the associate’s skills. Salary growth depends on the associate's individual performance and level compared to the benchmark. Synapes benefits programs are an integral part of the total compensation policy and strategy and are designed to meet the challenges of the growing, global competition for talent. These programs support the overall business objectives and strategy of Synapes. Benefits are aligned with local legislation and practices in each country and are established to provide a framework of security for associates.</p>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item style={{ padding: "20px" }} >
                            <ButtonBase className={classes.image} >
                                <img style={{ width: "100%" }} src="https://i.ibb.co/8KpPRKz/Employee-Benefits.jpg" alt="" />
                            </ButtonBase>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    );
};

export default EmployeeBenefits;