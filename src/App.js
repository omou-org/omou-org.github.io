import React, { useState } from 'react';
import './App.css';

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { appBarTheme, theme } from './theme/theme'
import { AppBar, Toolbar, Typography, Container, Grid, Button, Menu, MenuItem, Hidden, Drawer, IconButton, List, ListItem, ListItemText } from "@material-ui/core";
import { BrowserRouter as Router, NavLink, useLocation } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import { Routes } from "./routes";
import { primaryColor } from "./theme/colors";

const drawerWidth = 150;
const useStyles = makeStyles(theme => (

    {
        link: {
            textDecoration: "none",
            textDecorationColor: "inherit",
        },
        grow: { // create gap between left and right components on the app bar
            flexGrow: 1,
        },
        desktopMenu: {
            display: "flex"
        },
        desktopMenuItem: {
            marginLeft: "20px",
            color: "black",
            display: "inline-block",
            fontWeight: "400"
        },
        footer: {
            padding: "3%",
        },
        active: {
            textDecoration: "underline",
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        drawerPaper: {
            width: drawerWidth
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        closeMenuButton: {
            marginRight: 'auto',
            marginLeft: 0,
        },
    }));


const MenuItems = [
    {
        title: "Features",
        link: "/features",
    },
    {
        title: "About Us",
        link: "/about-us",
    },
    {
        title: "Contact Us",
        link: "/contact-us",
    },
];


const MenuList = ({ fontType }) => {
    const classes = useStyles();
    const location = useLocation();



    return MenuItems.map(({ title, link }) => (
        <NavLink
            className={classes.link}
            to={link}
            key={title}
        >
            <Typography
                variant={fontType}
                align="center"
                className={`${classes.desktopMenuItem} ${location.pathname == link ? classes.active : ""}`}
            >
                {title}
            </Typography>
        </NavLink>
    ));
}



function NavigationBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navBarList = ['Features', 'About', 'Contact Us'];
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    function handleDrawerToggle(e) {
        e.preventDefault();
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <div>
            <List>
                {MenuItems.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );



    return <ThemeProvider theme={appBarTheme}>
        <AppBar
            color="primary"
            position="static">
            <Toolbar>
                <NavLink className={classes.link} to="/">
                    <Typography variant="h3">
                        omou
                    </Typography>
                </NavLink>
                <div className={classes.grow} />
                <div className={classes.desktopMenu}>

                </div>
                <Hidden xsDown>
                    <NavLink to="/features" style={{ textDecoration: "none", marginLeft: "10px" }}>
                        <Button>
                            Features
                             </Button>
                    </NavLink>
                    <Button aria-controls="about-menu" aria-haspopup="true" onClick={handleClick}>
                        About
                             </Button>
                    <Menu
                        id="about-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} >
                            <NavLink
                                to="about-us"
                                style={{ color: "black", textDecoration: "none" }}
                            >About Us</NavLink>
                        </MenuItem>

                        <MenuItem onClick={handleClose}  >
                            <NavLink
                                to="meet-team"
                                style={{ color: "black", textDecoration: "none" }}
                            >Meet the Team</NavLink>

                        </MenuItem>
                    </Menu>
                    <NavLink to="/contact-us" style={{ textDecoration: "none", marginLeft: "10px" }}>
                        <Button
                            variant="contained"
                            size="large"
                            style={{ color: "white", backgroundColor: "#43B5D9", }}
                        >
                            Contact Us
                             </Button>
                    </NavLink>
                </Hidden>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

                <Hidden smUp >
                    <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                        <MenuIcon style={{ color: primaryColor }} />
                    </IconButton>
                    <Drawer
                        variant="temporary"
                        anchor="right"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </Toolbar>
        </AppBar>
    </ThemeProvider>;
}

const Footer = () => {
    return (
        <div
            style={{
                backgroundColor: "#FFFFFF",
                color: primaryColor,
                // marginTop: "25px",
                width: "100%",
            }}
        >
            <Container
                maxWidth={"lg"}
                style={{
                    padding: "3%"
                }}
            >
                <Grid
                    container
                    alignItems="flex-end"
                >
                    <Grid item md={12} xs={12}>
                        <Typography variant="h3" style={{marginBottom:"1.5vh"}}>
                            omou
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <MenuList fontType="body1" />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Typography variant="body1">
                            © 2020 Omou
                    </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App">
                    <NavigationBar />
                    <Routes />
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
