import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor } from './colors';

export const appBarTheme = createMuiTheme({
    palette: {
        primary: { main: '#ffffff' },
        secondary: { main: '#a6a6a6' },
        background: {
            main: '#ffffff',
            default: '#ffffff',
        },
    },
    typography: {
        h4: {
            fontFamily: 'Montserrat',
            fontWeight: 700,
            color: primaryColor,
        },
    },
    overrides: {
        MuiAppBar: {
            root: {
                boxShadow: 'none',
            },
        },
    },
});

export const theme = createMuiTheme({
    palette: {
        primary: { main: primaryColor },
        secondary: { main: '#a6a6a6' },
        background: {
            main: '#ffffff',
            default: '#ffffff',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Montserrat',
            fontWeight: 700,
        },
        h2: {
            fontFamily: 'Montserrat',
            fontWeight: 700,
        },
        h3: {
            fontFamily: 'Montserrat',
            fontWeight: 700,
        },
        h4: {
            fontFamily: 'Montserrat',
            fontWeight: 700,
        },
    },
    overrides: {
        MuiButton: {
            containedPrimary: {
                color: 'white',
            },
        },
    },
});
