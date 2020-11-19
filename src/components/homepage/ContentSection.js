import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import wave from './homeimages/wave.svg';
import { primaryColor } from '../../theme/colors';

const useStyles = makeStyles({
    image: {
        width: '500px',
        height: '500px',
        backgroundColor: 'black',
    },
    contentContainer: {
        height: '800px',
        paddingTop: '10em',
    },
    rightContent: {
        paddingTop: '2vh',
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
});

const ContentSection = ({
    title,
    description,

    isRight,
    waveImage,
    displayContactUsButton,
}) => {
    const classes = useStyles();

    return (
        <>
            {waveImage && (
                <img src={wave} alt="wave" style={{ width: '100%' }} />
            )}

            {isRight ? (
                <>
                    <Grid
                        container
                        justify="space-around"
                        className={classes.contentContainer}
                    >
                        <section>
                            <Box className={classes.image}></Box>
                        </section>

                        <Grid xs={4}>
                            <section className={classes.rightContent}>
                                <Typography variant="h4">{title}</Typography>

                                <Typography
                                    variant="h5"
                                    style={{ paddingTop: '5vh' }}
                                >
                                    {description}
                                </Typography>

                                <Typography
                                    variant="h4"
                                    style={{ paddingTop: '15vh' }}
                                >
                                    Learn More
                                </Typography>
                            </section>
                        </Grid>
                    </Grid>
                </>
            ) : (
                <>
                    <Grid
                        container
                        justify="space-around"
                        className={classes.contentContainer}
                    >
                        <Grid xs={4}>
                            <section className={classes.rightContent}>
                                <Typography variant="h4">{title}</Typography>

                                <Typography
                                    variant="h5"
                                    style={{ paddingTop: '5vh' }}
                                >
                                    {description}
                                </Typography>
                                {displayContactUsButton ? (
                                    <Box style={{ paddingTop: '15vh' }}>
                                        <Button
                                            className={classes.contactUsButton}
                                        >
                                            Contact Us
                                        </Button>
                                    </Box>
                                ) : (
                                    <Typography
                                        variant="h4"
                                        style={{ paddingTop: '15vh' }}
                                    >
                                        Learn More
                                    </Typography>
                                )}
                            </section>
                        </Grid>

                        <section>
                            <Box className={classes.image}></Box>
                        </section>
                    </Grid>
                </>
            )}
        </>
    );
};

export default ContentSection;
