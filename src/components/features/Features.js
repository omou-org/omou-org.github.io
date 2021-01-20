import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Button,
    Hidden,
    List,
    ListItem,
} from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import { primaryColor } from '../../theme/colors';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import Overview from './features-pages/feature-components/Overview';
import Payment from './features-pages/feature-components/Payment';
import Accounts from './features-pages/feature-components/Accounts';
import Registration from './features-pages/feature-components/Registration';
import Scheduling from './features-pages/feature-components/Scheduling';

const useStyles = makeStyles((theme) => ({
    sideBar: {
        position: 'absolute',
        top: '0px',
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: '28px',
        lineHeight: '43.77px',
        fontVariant: 'all-small-caps',
        letterSpacing: '0.03em',
        marginLeft: '20px',
        whiteSpace: 'no-wrap',
    },
    featureHeader: {
        fontFamily: 'Montserrat',
        fontSize: '60px',
        fontWeight: '400',
        lineHeight: '109px',
        letterSpacing: '0.03em',
        padding: '4vh 4vh 0 4vh',
    },
    requestDemoBtn: {
        color: 'white',
        width: '250px',
        height: '45px',
        background: primaryColor,
        border: `1px solid ${primaryColor}`,
        borderRadius: '20px',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginTop: '50px',
    },
    linkStyle: {
        color: 'black',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '1vh',
            fontSize: '20px',
            fontFamily: 'Montserrat',
        },
    },
}));

const sideBarRoutes = [
    {
        path: '/features',
        exact: true,
        title: 'overview',
        main: () => <Overview />,
    },
    {
        path: '/registration',
        exact: true,
        title: 'registration',
        main: () => <Registration />,
    },
    {
        path: '/scheduling',
        exact: true,
        title: 'simple scheduling',
        main: () => <Scheduling />,
    },
    {
        path: '/payments',
        exact: true,
        title: 'payments',
        main: () => <Payment />,
    },
    {
        path: '/accounts',
        exact: true,
        title: 'accounts',
        main: () => <Accounts />,
    },
];

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
};

const Features = () => {
    const classes = useStyles();

    return (
        <Router>
            <Grid style={{ marginBottom: '40px' }}>
                <Grid
                    container
                    justify="center"
                    alignContent="center"
                    direction="row"
                >
                    <Typography className={classes.featureHeader}>
                        <span style={{ color: primaryColor }}>OMOU</span>{' '}
                        FEATURES
                    </Typography>
                </Grid>

                <Grid
                    container
                    justify="center"
                    alignContent="center"
                    direction="row"
                    item={12}
                >
                    <Hidden mdUp>
                        <List style={flexContainer} alignItems="center">
                            {sideBarRoutes.map(({ path, title }, index) => (
                                <ListItem>
                                    <NavLink
                                        key={index}
                                        activeStyle={{
                                            color: primaryColor,
                                            textDecoration: 'none',
                                        }}
                                        className={classes.linkStyle}
                                        to={path}
                                    >
                                        {title}
                                    </NavLink>
                                </ListItem>
                            ))}
                        </List>
                    </Hidden>

                    <Hidden smDown>
                        <Grid
                            style={{ position: 'relative' }}
                            item
                            xs={2}
                            container
                            direction="column"
                            justify="center"
                            alignItems="flex-start"
                        >
                            <ul
                                className={classes.sideBar}
                                style={{ listStyleType: 'none', padding: 0 }}
                            >
                                {sideBarRoutes.map(({ path, title }, index) => (
                                    <li>
                                        <NavLink
                                            key={index}
                                            activeStyle={{
                                                color: primaryColor,
                                                textDecoration: 'none',
                                            }}
                                            className={classes.linkStyle}
                                            to={path}
                                        >
                                            {title}
                                        </NavLink>
                                    </li>
                                ))}
                                <li>
                                    <Button className={classes.requestDemoBtn}>
                                        request demo
                                    </Button>
                                </li>
                            </ul>
                        </Grid>
                    </Hidden>
                    <div style={{ flex: 1, padding: '10px' }}>
                        <Switch>
                            {sideBarRoutes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={route.main}
                                />
                            ))}
                        </Switch>
                    </div>
                </Grid>
            </Grid>
        </Router>
    );
};

export default Features;
