import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import wave from './homeimages/wave.svg';
import { primaryColor } from '../../theme/colors';

const useStyles = makeStyles({
    image: {
        width: '900px',
        height: '600px',
        backgroundColor: 'black',
        border: '1px solid #FFFFF',
        boxSizing: 'border-box',
        filter: ' drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    },
    contentContainer: {
        height: '1000px',
        paddingTop: '10em',
    },
    contentContainerRight: {
        height: '1000px',
        paddingTop: '10em',
        backgroundColor: ' #FAFAFA',
    },
    rightContent: {
        fontSize: '18px',
        paddingTop: '10vh',
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
});

const ContentSection = ({
    title,
    description,
    isRight,
    image,
    waveImage,
    displayContactUsButton,
}) => {
    const classes = useStyles();

    return (
        <>
            {waveImage && (
                <img
                    src={wave}
                    alt="wave"
                    style={{ width: '100%', backgroundColor: '#FAFAFA' }}
                />
            )}

            {isRight ? (
                <>
                    <Grid
                        container
                        justify="space-around"
                        className={classes.contentContainerRight}
                    >
                        <section>
                            <Box className={classes}>
                                {image ? (
                                    <img
                                        src={image}
                                        className={classes.image}
                                    />
                                ) : (
                                    ''
                                )}
                            </Box>
                        </section>

                        <Grid xs={4}>
                            <section className={classes.rightContent}>
                                <Typography
                                    style={{
                                        fontSize: '22px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {' '}
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

                                <Typography
                                    style={{
                                        paddingTop: '7vh',
                                        fontSize: '22px',
                                    }}
                                >
                                    Learn More
                                </Typography>
                                {displayContactUsButton ? (
                                    <Box style={{ paddingTop: '5vh' }}>
                                        <Button
                                            className={
                                                classes.signUpForFreeTrailButton
                                            }
                                        >
                                            SIGN UP FOR YOUR FREE TRIAL TODAY
                                        </Button>
                                    </Box>
                                ) : (
                                    ''
                                )}
                            </section>
                        </Grid>
                    </Grid>
                </>
            ) : (
                <>
                    <Grid
                        container
                        direction="column"
                        justify="space-around"
                        alignItems="center"
                        className={classes.contentContainer}
                    >
                        <Grid xs={4}>
                            <section className={classes.rightContent}>
                                <Typography
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
                                <Typography
                                    style={{
                                        paddingTop: '15vh',
                                        fontSize: '22px',
                                    }}
                                >
                                    Learn More
                                </Typography>
                            </section>
                        </Grid>

                        <section>
                            <Box>
                                <img src={image} className={classes.image} />{' '}
                            </Box>
                        </section>
                    </Grid>
                </>
            )}
        </>
    );
};

export default ContentSection;
