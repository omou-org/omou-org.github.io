import React from 'react';
import './App.css';
import {ThemeProvider} from '@material-ui/core/styles';
import {appBarTheme, theme} from './theme/theme'
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import {Routes} from "./routes";
import {primaryColor} from "./theme/colors";
import Button from "@material-ui/core/esm/Button/Button";

const useStyles = makeStyles((appBarTheme)=>({
    link:{
        textDecoration:"none",
        textDecorationColor:"inherit",
    },
    grow: { // create gap between left and right components on the app bar
        flexGrow: 1,
    },
    desktopMenu: {
        display:"flex"
    },
    desktopMenuItem: {
        marginLeft: "10px",
        color: "black",
    }
}));

function NavigationBar() {
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

    return <ThemeProvider theme={appBarTheme}>
        <AppBar
            color="primary"
            position="static">
            <Toolbar style={{backgroundColor: primaryColor}}>
                <NavLink className={classes.link} to="/">
                    <Typography
                        variant="h3">
                        omou
                    </Typography>
                </NavLink>
                <div className={classes.grow}/>
                <div className={classes.desktopMenu}>
                    {
                        MenuItems.map(({title, link}) => (
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

function App() {
	return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App">
                    <NavigationBar/>
                    <Routes/>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
