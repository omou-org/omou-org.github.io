import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, Button, MenuItem } from '@material-ui/core';
import { Switch, Route, Link } from 'react-router-dom';
import { primaryColor } from '../../theme/colors';
import {
    BrowserRouter as Router,
    NavLink,
    useLocation,
} from 'react-router-dom';

import Overview  from './features-pages/feature-components/Overview';
import Payment from './features-pages/feature-components/Payment';
import Accounts from './features-pages/feature-components/Accounts';
import Registration from './features-pages/feature-components/Registration';
import Scheduling from './features-pages/feature-components/Scheduling';

const useStyles = makeStyles({
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
        whiteSpace: 'no-wrap'
    },
    featureHeader: {
        fontFamily: 'Montserrat',
        fontSize: '72px',
        fontWeight: '400',
        lineHeight: '109px',
        letterSpacing: '0.03em'
    }
});

// const routes = [
//     {
//         title: 'overview',
//         link: '/overview',
//         sidebar: () => <div>overview</div>,
//         main: () => <h2>overview</h2>,
//     },

//     {
//         title: 'registration',
//         link: '/features/registration',
//         sidebar: () => <div>registration</div>,
//         main: () => <h2>registration</h2>,
//     },
//     {
//         title: 'scheduling',
//         link: '/scheduling',
//         sidebar: () => <div>scheduling</div>,
//         main: () => <h2>scheduling</h2>,
//     },
//     {
//         title: 'payments',
//         link: '/payments',
//         sidebar: () => <div>payments</div>,
//         main: () => <h2>payments</h2>,
//     },
//     {
//         title: 'accounts',
//         link: '/accounts',
//         sidebar: () => <div>Hello</div>,
//         main: () => <h2>accounts</h2>,
//     },
// ];

const routes = [
    {
        path: '/features',
        exact: true,
        sidebar: () => <div>home!</div>,
        // Render component in main
        main: () => <Overview />,
    },
    {
        path: '/registration',
        sidebar: () => <div>registration!</div>,
        main: () => <Registration />,
    },
    {
        path: '/scheduling',
        sidebar: () => <div>Simple Scheduling</div>,
        main: () => <Scheduling />,
    },
    {
        path: '/payments',
        sidebar: () => <div>payments!</div>,
        main: () => <Payment />,
    },
    {
        path: '/accounts',
        sidebar: () => <div>accounts!</div>,
        main: () => <Accounts />,
    },
];

const Features = ({}) => {
    const classes = useStyles();

    // feature data
    // need them to link

    return (
        <Router>
            <Grid style={{marginBottom: '40px'}} container>
                <Grid
                    container
                    justify="center"
                    alignContent="center"
                    direction="row"
                >
                    <Typography className={classes.featureHeader}>
                        <span style={{color: primaryColor}}>OMOU</span> FEATURES
                    </Typography>
                </Grid>

                <Grid 
                container item={12}>
                    <Grid
                        style={{
                            // background: 'green', 
                            position: 'relative' }}
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
                            <li>
                                <Link style={{textDecoration: 'none'}} to="/features">Overview</Link>
                            </li>
                            <li>
                                <Link style={{textDecoration: 'none'}} to="/registration">Registration</Link>
                            </li>
                            <li>
                                <Link style={{textDecoration: 'none'}} to="/scheduling">Simple Scheduling</Link>
                            </li>
                            <li>
                                <Link style={{textDecoration: 'none'}} to="/payments">Payments</Link>
                            </li>
                            <li>
                                <Link style={{textDecoration: 'none'}} to="/accounts">User Accounts</Link>
                            </li>
                        </ul>
                        {/* <Button>request demo</Button> */}
                    </Grid>
                    <div style={{ flex: 1, padding: '10px' }}>
                        <Switch>
                            {routes.map((route, index) => (
                                // Render more <Route>s with the same paths as
                                // above, but different components this time.
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
