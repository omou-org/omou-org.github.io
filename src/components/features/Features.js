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

import { Overview } from './features-pages/Overview';

const useStyles = makeStyles({});

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
//         title: 'scheduleing',
//         link: '/scheduleing',
//         sidebar: () => <div>scheduleing</div>,
//         main: () => <h2>scheduleing</h2>,
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
        main: () => <h2>Home</h2>,
    },
    {
        path: '/registration',
        sidebar: () => <div>registration!</div>,
        main: () => <h2>registration</h2>,
    },
    {
        path: '/scheduleing',
        sidebar: () => <div>scheduleing!</div>,
        main: () => <h2>scheduleing</h2>,
    },
    {
        path: '/payments',
        sidebar: () => <div>payments!</div>,
        main: () => <h2>payments</h2>,
    },
    {
        path: '/accounts',
        sidebar: () => <div>accounts!</div>,
        main: () => <h2>accounts</h2>,
    },
];

const Features = ({}) => {
    const classes = useStyles();

    // feature data
    // need them to link

    const MenuList = ({ fontType }) => {
        const classes = useStyles();
        const location = useLocation();

        return routes.map(({ title, link }) => (
            <div>
                <ul>
                    <li>
                        <Link to={link}>{title}</Link>
                    </li>
                </ul>
            </div>
        ));
    };

    return (
        <Router>
            <Grid container>
                <Grid
                    container
                    justify="center"
                    alignContent="center"
                    direction="row"
                >
                    <Typography>
                        OMOU <span>FEATURES</span>
                    </Typography>
                </Grid>

                <Grid container item={12}>
                    <Grid
                        item
                        xs={2}
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li>
                                <Link to="/features">Home</Link>
                            </li>
                            <li>
                                <Link to="/registration">registration</Link>
                            </li>
                            <li>
                                <Link to="/scheduleing">scheduleing</Link>
                            </li>
                            <li>
                                <Link to="/registration">registration</Link>
                            </li>
                            <li>
                                <Link to="/accounts">accounts</Link>
                            </li>
                        </ul>
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
                                    children={<route.main />}
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
