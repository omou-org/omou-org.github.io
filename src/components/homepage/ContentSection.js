import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, Button, Hidden } from '@material-ui/core';
import wave from './homeimages/wave.svg';
import { primaryColor } from '../../theme/colors';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    image: {
        width: '100%',
        height: 'auto',
        maxWidth: '900px',
        backgroundColor: 'black',
        border: '1px solid #FFFFF',
        boxSizing: 'border-box',
        filter: ' drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    },
    contentContainer: {
        paddingTop: '10em',
    },
    contentContainerRight: {
        width: '102%',
        padding: '5em',
        paddingBottom: '10em',
        backgroundColor: ' #FAFAFA',
    },
    contentContainerLeft: {
        width: '102%',
        padding: ' 5em',
        paddingBottom: '10em',
        paddingTop: '4vh',

        backgroundColor: ' #FFFFFF',
    },
    contentTitle: {
        textTransform: 'uppercase',
    },
    rightContent: {
        fontSize: '18px',
        paddingTop: '10vh',
        textAlign: 'left',
        paddingLeft: '4em',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
    },
    contactUsButton: {
        background: primaryColor,
        color: 'white',
        width: '472px',
        height: '64px',
        borderRadius: '20px',
        fontSize: '18px',
        fontWeight: 'bold',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        '&:hover': {
            backgroundColor: '#A0A0A0',
            color: '#FFF',
        },
    },
    signUpForFreeTrailButton: {
        background: primaryColor,
        color: 'white',
        width: '472px',
        height: '64px',
        borderRadius: '20px',
        fontSize: '18px',
        fontWeight: 'bold',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        '&:hover': {
            backgroundColor: '#A0A0A0',
            color: '#FFF',
        },
    },
    learnMoreButton: {
        color: '#1F82A1',
        fontWeight: '600',
        paddingTop: '7vh',
        fontSize: '22px',
    },
    leftLearnMoreButton: {
        color: '#1F82A1',
        fontWeight: '600',
        paddingTop: '15vh',
        fontSize: '22px',
    },
}));

const ContentSection = ({
    title,
    description,
    isRight,
    image,
    linkTo,
    waveImage,
    displayContactUsButton,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {waveImage && (
                <img
                    src={wave}
                    alt="wave"
                    style={{
                        width: '100%',
                        backgroundColor: '#FAFAFA',
                        display: 'block',
                    }}
                />
            )}

            {isRight ? (
                <>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={10}
                        className={classes.contentContainerRight}
                    >
                        <Grid item xs={12} md={6}>
                            {image && (
                                <img src={image} className={classes.image} />
                            )}
                        </Grid>

                        <Grid xs={12} md={5}>
                            <section className={classes.rightContent}>
                                <Typography
                                    className={classes.contentTitle}
                                    style={{
                                        fontSize: '22px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {title}
                                </Typography>

                                <Typography
                                    style={{
                                        fontSize: '22px',
                                        paddingTop: '5vh',
                                    }}
                                >
                                    {description}
                                </Typography>
                                <Link
                                    to={linkTo}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Typography
                                        className={classes.learnMoreButton}
                                    >
                                        Learn More
                                    </Typography>
                                </Link>
                                {displayContactUsButton && (
                                    <Box style={{ paddingTop: '5vh' }}>
                                        <Button
                                            className={
                                                classes.signUpForFreeTrailButton
                                            }
                                        >
                                            SIGN UP FOR YOUR FREE TRIAL TODAY
                                        </Button>
                                    </Box>
                                )}
                            </section>
                        </Grid>
                    </Grid>
                </>
            ) : (
                // Left content
                <>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={10}
                        className={classes.contentContainerLeft}
                    >
                        <Hidden mdUp>
                            <Grid item xs={12}>
                                {image && (
                                    <img
                                        src={image}
                                        className={classes.image}
                                    />
                                )}
                            </Grid>
                        </Hidden>
                        <Grid xs={12} md={6}>
                            <section className={classes.rightContent}>
                                <Typography
                                    className={classes.contentTitle}
                                    style={{
                                        fontSize: '22px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {title}
                                </Typography>

                                <Typography
                                    style={{
                                        fontSize: '22px',
                                        paddingTop: '5vh',
                                    }}
                                >
                                    {description}
                                </Typography>
                                <Link
                                    to={linkTo}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Typography
                                        className={classes.learnMoreButton}
                                    >
                                        Learn More
                                    </Typography>
                                </Link>
                                {displayContactUsButton && (
                                    <Box style={{ paddingTop: '5vh' }}>
                                        <Button
                                            className={
                                                classes.signUpForFreeTrailButton
                                            }
                                        >
                                            SIGN UP FOR YOUR FREE TRIAL TODAY
                                        </Button>
                                    </Box>
                                )}
                            </section>
                        </Grid>
                        <Hidden mdDown>
                            <Grid item xs={12} md={6}>
                                {image && (
                                    <img
                                        src={image}
                                        className={classes.image}
                                    />
                                )}
                            </Grid>
                        </Hidden>
                    </Grid>
                </>
            )}
        </div>
    );
};

export default ContentSection;
