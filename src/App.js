import React, { useState } from 'react';
import './App.css';

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { appBarTheme, theme } from './theme/theme'
import { AppBar, Toolbar, Typography, Container, Grid, Button, Menu, MenuItem, Hidden, Drawer, IconButton, List, } from "@material-ui/core";
import { BrowserRouter as Router, NavLink, useLocation } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';

import { primaryColor } from "./theme/colors";

const drawerWidth = 150;




function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App">
                "hello"
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
