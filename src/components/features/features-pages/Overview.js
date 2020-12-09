import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, Button } from '@material-ui/core';

import {
    BrowserRouter as Router,
    NavLink,
    useLocation,
} from 'react-router-dom';

const useStyles = makeStyles({});

export const Overview = () => {
    const classes = useStyles();

    // feature data
    // need them to link

    const MenuList = ({ fontType }) => {
        const classes = useStyles();
        const location = useLocation();

        return (
            <div>
                <h2>Home</h2>
            </div>
        );
    };
};
