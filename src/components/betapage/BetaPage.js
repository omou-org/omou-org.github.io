import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GoogleSheetsForm from './GoogleSheetsForm';
import betaPageData from './betaPageData.json';
import ContentSection from '../homepage/ContentSection';
import wave from '../homepage/homeimages/wave.svg';
import SlideShow from '../homepage/Slideshow';
import { betaPageSlideShowData } from './betaPageSlideShowData';

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
    EAPQuestion: {
        textAlign: 'center',
        fontSize: '60px',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
    },
    EAPQuestionContainer: {
        paddingTop: '16vh',
        paddingBottom: '16vh',
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

                <GoogleSheetsForm />
            </Grid>
            <img
                src={wave}
                alt="wave"
                style={{ width: '100%', paddingBottom: '4vh' }}
            />
            <Grid item xs={12} className={classes.EAPQuestionContainer}>
                <Typography className={classes.EAPQuestion}>
                    Why Should I Try the Omou Early Access Program?
                </Typography>
            </Grid>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                className={classes.sliderContainer}
            >
                {betaPageSlideShowData.map(
                    ({ image, title, description, type }) => (
                        <SlideShow
                            image={image}
                            title={title}
                            description={description}
                            type={type}
                        />
                    )
                )}
            </Grid>
            {betaPageData.map(
                ({
                    image,
                    title,
                    description,
                    learnMore,
                    isRight,
                    waveImage,
                    displayContactUsButton,
                }) => (
                    <ContentSection
                        image={image}
                        title={title}
                        description={description}
                        learnMore={learnMore}
                        isRight={isRight}
                        waveImage={waveImage}
                        displayContactUsButton={displayContactUsButton}
                    />
                )
            )}
        </Grid>
    );
};

export default BetaPage;
