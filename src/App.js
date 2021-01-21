import React, { useState } from 'react';
import './App.css';

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { appBarTheme, theme } from './theme/theme';
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Button,
    Menu,
    MenuItem,
    Hidden,
    Drawer,
    IconButton,
    List,
} from '@material-ui/core';
import {
    BrowserRouter as Router,
    NavLink,
    useLocation,
} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { Routes } from './routes';
import { primaryColor } from './theme/colors';
import ScrollToTop from './ScrollToTop';

const drawerWidth = 150;
const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        textDecorationColor: 'inherit',
    },
    appBar: {
        boxShadow: 'none',
        position: 'static',
        width: '100%',
    },
    grow: {
        // create gap between left and right components on the app bar
        flexGrow: 1,
    },
    desktopMenu: {
        display: 'flex',
    },
    desktopMenuItem: {
        fontFamily: 'Montserrat',
        marginLeft: '20px',
        color: 'white',
        paddingTop: '20px',
        fontWeight: '500',
        fontSize: '14px',
    },
    footer: {
        padding: '3%',
    },
    active: {
        textDecoration: 'underline',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
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

const NavMenuItems = [
    {
        title: 'Home',
        link: '/',
    },

    {
        title: 'Features',
        link: '/features',
    },
    {
        title: 'About Us',
        link: '/about-us',
    },
    {
        title: 'Team',
        link: '/meet-team',
    },
    {
        title: 'Contact Us',
        link: '/contact-us',
    },
];
const FooterMenuItems = [
    {
        title: 'Home',
        link: '/',
    },

    {
        title: 'Features',
        link: '/features',
    },
    {
        title: 'About Us',
        link: '/about-us',
    },
    {
        title: 'Team',
        link: '/meet-team',
    },
    {
        title: 'Contact Us',
        link: '/contact-us',
    },
    {
        title: 'Early access program',
        link: '/early-access-program',
    },
];

const MenuList = (MenuItems) => {
    const classes = useStyles();
    const location = useLocation();

    return MenuItems.map(({ title, link }) => (
        <NavLink className={classes.link} to={link} key={title}>
            <Typography
                align="center"
                className={`${classes.desktopMenuItem} ${
                    location.pathname === link ? classes.active : ''
                }`}
            >
                {title.toUpperCase()}
            </Typography>
        </NavLink>
    ));
};

function NavigationBar() {
    const classes = useStyles();
    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleDrawerToggle(e) {
        e.preventDefault();
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <div>
            <List>
                {NavMenuItems.map(({ link, title }) => (
                    <NavLink className={classes.link} to={link} key={title}>
                        <Typography
                            style={{ lineHeight: '5vh' }}
                            align="center"
                            className={`${classes.desktopMenuItem} ${
                                location.pathname === link ? classes.active : ''
                            }`}
                        >
                            {title}
                        </Typography>
                    </NavLink>
                ))}
            </List>
        </div>
    );

    return (
        <ThemeProvider theme={appBarTheme}>
            <AppBar
                color={location.pathname === '/' ? 'transparent' : 'primary'}
                position="static"
            >
                <Toolbar>
                    <NavLink className={classes.link} to="/">
                        <Typography variant="h4">omou</Typography>
                    </NavLink>
                    <div className={classes.grow} />
                    <div className={classes.desktopMenu}></div>
                    <Hidden xsDown>
                        <NavLink
                            to="/features"
                            style={{
                                textDecoration: 'none',
                                marginLeft: '10px',
                            }}
                        >
                            <Button>Features</Button>
                        </NavLink>
                        <Button
                            aria-controls="about-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            About
                        </Button>
                        <Menu
                            id="about-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            disableScrollLock={true}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <NavLink
                                    to="about-us"
                                    style={{
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                >
                                    About Us
                                </NavLink>
                            </MenuItem>

                            <MenuItem onClick={handleClose}>
                                <NavLink
                                    to="meet-team"
                                    style={{
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Meet the Team
                                </NavLink>
                            </MenuItem>
                        </Menu>
                        <NavLink
                            to="/contact-us"
                            style={{
                                textDecoration: 'none',
                                marginLeft: '10px',
                            }}
                        >
                            <Button>Contact Us</Button>
                        </NavLink>
                    </Hidden>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

                    <Hidden smUp>
                        <IconButton
                            onClick={handleDrawerToggle}
                            className={classes.closeMenuButton}
                        >
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
        </ThemeProvider>
    );
}

const Footer = () => {
    return (
        <div
            style={{
                backgroundColor: '#333333',
                color: primaryColor,
                width: '100%',
                paddingTop: '2em',
            }}
        >
            <Grid container direction="row" justify="space-between">
                <Grid
                    item
                    md={4}
                    xs={4}
                    style={{ marginLeft: '2%', paddingTop: '3em' }}
                >
                    <NavLink
                        to="/"
                        style={{
                            textDecoration: 'none',
                            color: 'white',
                        }}
                    >
                        <Typography
                            variant="h3"
                            style={{
                                marginBottom: '1.5vh',
                                fontFamily: 'Roboto',
                                fontWeight: 500,
                            }}
                        >
                            omou
                        </Typography>
                        <Typography
                            style={{
                                fontSize: '18px',
                                fontFamily: 'Montserrat',
                            }}
                        >
                            Centralize your entire business. Omou is built so
                            that your team can schedule classes, manage
                            invoices, and communicate with parents and students.
                        </Typography>
                    </NavLink>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        style={{
                            alignItems: 'baseline',
                            paddingRight: '2em',
                            paddingBottom: '2em',
                        }}
                    >
                        {MenuList(FooterMenuItems)}
                    </Grid>
                    {/* <Grid item>
                        <Typography variant="body1" style={{ color: 'black' }}>
                            © 2020 Omou
                        </Typography>
                    </Grid> */}
                </Grid>
            </Grid>
        </div>
    );
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <ScrollToTop>
                    <div className="App">
                        <NavigationBar />
                        <Routes />
                        <Footer />
                    </div>
                </ScrollToTop>
            </Router>
        </ThemeProvider>
    );
}

export default App;
