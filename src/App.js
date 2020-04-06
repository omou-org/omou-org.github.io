import React from 'react';
import './App.css';

import { ThemeProvider } from '@material-ui/core/styles';
import { appBarTheme, theme } from './theme/theme'
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Routes } from "./routes";
import { primaryColor } from "./theme/colors";


const useStyles = makeStyles((appBarTheme) => ({
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
        marginLeft: "15px",
        color: "black",
        display:"inline-block"
    },
    footerWrapper:{
        backgroundColor: primaryColor,
        color: "white",
        position: "absolute",
        bottom: 0,
        width:"100%",
    },
    footer:{
        padding:"3%"
    }
}));

const MenuList = ({fontType}) => {
    const classes = useStyles();

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
    return MenuItems.map(({title, link}) => (
        <NavLink
            className={classes.link}
            to={link}
            key={title}
        >
            <Typography
                variant={fontType}
                align="center"
                className={classes.desktopMenuItem}
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

            <Toolbar style={{ backgroundColor: primaryColor }}>

                <NavLink className={classes.link} to="/">
                    <Typography variant="h3">
                        omou
                    </Typography>
                </NavLink>
                <div className={classes.grow} />
                <div className={classes.desktopMenu}>

                    {
                        MenuItems.map(({ title, link }) => (
                            <NavLink
                                className={classes.link}
                                to={link}
                            >
                                <Typography
                                    variant="h6"
                                    align="center"
                                    className={classes.desktopMenuItem}
                                >
                                    {title}
                                </Typography>
                            </NavLink>
                        ))

                    }
                </div>
            </Toolbar>
        </AppBar>
    </ThemeProvider>;
}

const Footer = () => {
    const classes = useStyles();
  return (
      <div
          className={classes.footerWrapper}
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
                    <MenuList fontType="body1"/>
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

                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
