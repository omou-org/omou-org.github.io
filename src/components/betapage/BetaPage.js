import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GoogleSheetsForm from './GoogleSheetsForm';

const useStyles = makeStyles((theme) => ({
    homepageBanner: {
        width: '100%',
        textAlign: 'center',
        color: 'black',
    },
    homepageText: {
        marginLeft: '20vh',
        [theme.breakpoints.down('md')]: {
            fontSize: '3vh',
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0',
        },
    },
    homepageSubText: {
        marginLeft: '20vh',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0',
        },
    },
}));

const BetaPage = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid
                xs={12}
                container
                justify="space-between"
                direction="row"
                alignItems="center"
                className={classes.homepageBanner}
            >
                <Grid item sm={8} lg={7}>
                    <Typography
                        variant="h4"
                        align="left"
                        className={classes.homepageText}
                    >
                        The OMOU EARLY ACCESS PROGRAM
                    </Typography>

                    <Typography
                        className={classes.homepageSubText}
                        align="left"
                    >
                        We understand that running a business is no easy task.
                        Let us help you handle all the stressful logistics that
                        comes with operating a tutoring center.
                    </Typography>
                </Grid>

                <Grid item alignContent="right">
                    <GoogleSheetsForm />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default BetaPage;
