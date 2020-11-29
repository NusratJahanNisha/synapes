import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';


// ---------------------Navbar of ALL pages---------------------------

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <div style={{ marginBottom: "78px" }} className={classes.root}>
            <AppBar position="fixed" style={{ background: "#121F2C", color: "white" }}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <img style={{ height: "70px", width: "100px" }} src="https://i.ibb.co/LvfRVLq/logo.png" alt="" />
                    </Typography>
                    <Button color="inherit">  <Link style={{ textDecoration: "none", color: "white" }} to="/home">Home</Link></Button>
                    <Button color="inherit"> <Link style={{ textDecoration: "none", color: "white" }} to="/aboutUs"> ABOUT US</Link></Button>
                    <Button color="inherit">  <Link style={{ textDecoration: "none", color: "white" }} to="/products">PRODUCTS</Link></Button>
                    <Button color="inherit"> <Link style={{ textDecoration: "none", color: "white" }} to="/career">CAREERS</Link></Button>
                    <Button color="inherit"><Link style={{ textDecoration: "none", color: "white" }} to="/responsibilityAndHealth">RESPONSIBILITY AND HEALTH
                    </Link></Button>
                    <Button color="inherit"> <Link style={{ textDecoration: "none", color: "white" }} to="/contactUs"> CONTACT US</Link></Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;