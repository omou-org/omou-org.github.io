import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GoogleSheetsForm from './GoogleSheetsForm';
import { betaPageContent, betaPageSlideShowData } from './betaPageData.js';
import ContentSection from '../homepage/ContentSection';
import wave from '../homepage/homeimages/wave.svg';
import SlideShow from '../homepage/Slideshow';

import 'react-multi-carousel/lib/styles.css';

import FaqSection from './FaqSection';

const useStyles = makeStyles((theme) => ({
    homepageBanner: {
        width: '100%',
        textAlign: 'center',
        color: 'black',
        padding: '5vh',
    },
    bannerActionContainer: {
        paddingTop: '5vh',
        marginLeft: '4vh',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0',
        },
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
        [theme.breakpoints.down('sm')]: {
            paddingTop: '5vh',
            paddingBottom: '5vh',
        },
    },
}));

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
                    >
                        <Grid>
                            <Typography className={classes.bannerActionText}>
                                Scheduling
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
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
                    {betaPageSlideShowData.map(
                        ({ key, image, title, type }) => (
                            <SlideShow
                                key={key}
                                image={image}
                                title={title}
                                type={type}
                            />
                        )
                    )}
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
                    id,
                    image,
                    title,
                    description,
                    linkTo,
                    isRight,
                    waveImage,

                    displayContactUsButton,
                }) => (
                    <ContentSection
                        key={id}
                        image={image}
                        title={title}
                        description={description}
                        linkTo={linkTo}
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
