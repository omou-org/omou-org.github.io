import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    iconImage: {
        padding: '4vh 0 3vh 0',
    },
    headerText: {
        fontSize: '20px',
        fontWeight: 700,
        paddingTop: '5vh',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
            paddingTop: '1vh',
        },
    },
    descriptionText: {
        fontSize: '15px',
        fontWeight: 200,
        paddingTop: '2vh',
        textAlign: 'center',
        fontFamily: 'Montserrat',
    },
    betaHeaderText: {
        fontSize: '30px',
        fontWeight: 500,
        paddingTop: '10vh',

        textAlign: 'center',
        fontFamily: 'Montserrat',
    },
}));

// TODO
// is this a slide show or just 3 icons.

const Slideshow = ({ image, description, title, type, link }) => {
    const classes = useStyles();

    return (
        <>
            {type === 'beta' ? (
                <Grid item xs={4}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            <img
                                src={image}
                                alt=""
                                className={classes.iconImage}
                            ></img>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography className={classes.betaHeaderText}>
                                {title}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            ) : (
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid
                        container
                        direction="column"
                        justify="space-around"
                        alignItems="center"
                    >
                        <Grid xs={12}>
                            <img
                                src={image}
                                alt=""
                                className={classes.iconImage}
                            ></img>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography className={classes.headerText}>
                                {title}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={8}>
                            <Typography className={classes.descriptionText}>
                                {description || ''}
                            </Typography>
                        </Grid>
                    </Hidden>
                </Grid>
            )}
        </>
    );
};

export default Slideshow;
