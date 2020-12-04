import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles({
    iconImage: {
        padding: '3vh 0 3vh 0',
    },
    headerText: {
        fontSize: '20px',
        fontWeight: 700,
        paddingTop: '5vh',

        textAlign: 'center',
        fontFamily: 'Montserrat',
    },
    descriptionText: {
        fontSize: '18px',
        fontWeight: 200,
        paddingTop: '2vh',
        textAlign: 'center',
        fontFamily: 'Montserrat',
    },
});

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
                        <Grid xs={12}>
                            <img
                                src={image}
                                alt=""
                                className={classes.iconImage}
                            ></img>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography className={classes.headerText}>
                                {title}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography className={classes.descriptionText}>
                            {description || ''}
                        </Typography>
                    </Grid>
                </Grid>
            ) : (
                <Grid item xs={8}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid xs={12}>
                            <img
                                src={image}
                                alt=""
                                className={classes.iconImage}
                            ></img>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography className={classes.headerText}>
                                {title}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.descriptionText}>
                            {description || ''}
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default Slideshow;
