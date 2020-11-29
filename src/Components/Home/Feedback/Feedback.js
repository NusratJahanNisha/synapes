import { Avatar, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';


// ------------------------Feedback section of Home page-------------------------------


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'auto',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 500,
        maxHeight: 200,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));

const Feedback = () => {
    const classes = useStyles();
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Customer Feedback</h1>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar> <img style={{ width: "100%" }} src="https://i.ibb.co/bPGQMPw/thumb-2.png" alt="" /> </Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography > <b>  Jenifer Hurly,</b> <br />
                                Thank you, just want to say that everyone that I've  ever  dealt with Synapes Life Science Pvt. Ltd. Including you, have  provided THE BEST customer service. Probably the best  I've had from any industry ever.</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar> <img style={{ width: "100%" }} src="https://i.ibb.co/fXHcpxC/thumb-2.png" alt="" /> </Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography ><b>  Lara Handerson,</b> <br />Always a pleasure dealing with Synapes Life Sciences Pvt. Ltd. Your customer service is unbeatable. You should be teaching ALL other companies how to handle their customers so well.</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar> <img style={{ width: "100%" }} src="https://i.ibb.co/bPGQMPw/thumb-2.png" alt="" /> </Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography> <b>  Jenifer Hurly,</b> <br />
                                Thank you, just want to say that everyone that I've  ever  dealt with Synapes Life Science Pvt. Ltd. Including you, have  provided THE BEST customer service. Probably the best I've had from any industry ever.</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    );
};

export default Feedback;