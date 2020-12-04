import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GoogleSheetsForm from './GoogleSheetsForm';
import { betaPageContent, betaPageSlideShowData } from './betaPageData.js';
import ContentSection from '../homepage/ContentSection';
import wave from '../homepage/homeimages/wave.svg';
import SlideShow from '../homepage/Slideshow';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import FaqSection from './FaqSection';

const useStyles = makeStyles((theme) => ({
    homepageBanner: {
        width: '100%',
        textAlign: 'center',
        color: 'black',
        paddingBottom: '5vh',
    },
    bannerActionContainer: {
        paddingTop: '5vh',
        marginLeft: '4vh',
    },
    bannerActionText: {
        fontSize: '20px',
        fontWeight: '600',
    },
    homepageText: {
        marginLeft: '4vh',
        fontSize: '60px',
        fontWeight: 'bold',

        [theme.breakpoints.down('md')]: {
            fontSize: '3vh',
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0',
        },
    },

    homepageSubText: {
        marginLeft: '4vh',
        paddingTop: '5vh',
        fontSize: '30px',
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

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const BetaPage = (props) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid
                container
                justify="space-between"
                direction="row"
                alignItems="center"
                className={classes.homepageBanner}
            >
                <Grid item container sm={12} lg={7}>
                    <Grid item xs={12}>
                        <Typography
                            align="left"
                            className={classes.homepageText}
                        >
                            THE OMOU
                        </Typography>
                        <Typography
                            align="left"
                            className={classes.homepageText}
                        >
                            {' '}
                            EARLY ACCESS PROGRAM
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography
                            className={classes.homepageSubText}
                            align="left"
                        >
                            We understand that running a business is no easy
                            task. Let us help you handle all the stressful
                            logistics that comes with operating a tutoring
                            center.
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        className={classes.bannerActionContainer}
                        spacing={12}
                    >
                        <Grid>
                            <Typography className={classes.bannerActionText}>
                                Scheduling
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <Typography className={classes.bannerActionText}>
                                Invoicing
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography className={classes.bannerActionText}>
                                Course Management
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <GoogleSheetsForm />
                </Grid>
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

                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignContent="center"
                    className={classes.EAPQuestionContainer}
                >
                    {betaPageSlideShowData.map(({ image, title, type }) => (
                        <SlideShow image={image} title={title} type={type} />
                    ))}
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                container
                alignContent="center"
                justify="center"
            ></Grid>
            {betaPageContent.map(
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
            <FaqSection />
            <GoogleSheetsForm contactUs={true} />
        </Grid>
    );
};

export default BetaPage;
