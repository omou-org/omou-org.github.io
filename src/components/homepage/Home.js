import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import people from './homeimages/people.svg';
import ContentSection from './ContentSection';
import ContactUsForm from './ContactUsForm';
import homePageData from './homePageData.json';

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

const Home = () => {
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
                        variant="h2"
                        align="left"
                        className={classes.homepageText}
                    >
                        Don't just digitize the way your tutoring center runs -
                        Transform it
                    </Typography>

                    <Typography
                        className={classes.homepageSubText}
                        align="left"
                    >
                        Omou is a tutoring management service designed for
                        remote-learning.
                    </Typography>
                </Grid>
                <Grid item alignContent="right">
                    <Box display={{ xs: 'block', sm: 'none', md: 'block' }}>
                        <img
                            src={people}
                            alt="hero"
                            style={{ verticalAlign: 'top' }}
                        />
                    </Box>
                </Grid>
            </Grid>

            {homePageData.map(
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

            <ContactUsForm />
        </Grid>
    );
};

export default Home;
