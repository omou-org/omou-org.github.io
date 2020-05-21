import React from 'react';
import './App.css';

import { ThemeProvider } from '@material-ui/core/styles';
import { appBarTheme, theme } from './theme/theme'
import { AppBar, makeStyles, Toolbar, Typography, Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router, NavLink, useLocation } from "react-router-dom";
import { Routes } from "./routes";
import { primaryColor } from "./theme/colors";


const useStyles = makeStyles({
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
        padding: "3%"
    },
    active: {
        textDecoration: "underline",
    }
});

const MenuList = ({ fontType }) => {
    const classes = useStyles();
    const location = useLocation();
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
                    <MenuList fontType="h6" />
                </div>
            </Toolbar>
        </AppBar>
    </ThemeProvider>;
}

const Footer = () => {
    const classes = useStyles();
    return (
        <div
            style={{
                backgroundColor: primaryColor,
                color: "white",
                marginTop: "25px",
                width:"100%",
            }}
        >
            <Container
                maxWidth={"lg"}
                className={classes.footer}
            >
                <Grid
                    container
                    alignItems="flex-end"
                >
                    <Grid item md={2} xs={12}>
                        <Typography variant="h3">
                            omou
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <MenuList fontType="body1" />
                    </Grid>
                    <Grid item md={2} xs={12}>
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
                    {/*<Footer />*/}
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
