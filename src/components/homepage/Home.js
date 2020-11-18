import React from 'react';
import { Grid, Typography, Box, Button } from '@material-ui/core';
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
    contactUsButton: {
        width: '472px',
        height: '64px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        backgroundColor: '#43B5D9',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    homepageText: {
        paddingTop: '20vh',
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
        fontSize: '30px',
        paddingTop: '3em',
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
                    <Grid
                        item
                        alignContent="left"
                        style={{
                            marginRight: '9em',
                            paddingBottom: '5em',
                            paddingTop: '3em',
                        }}
                    >
                        <Button className={classes.contactUsButton}>
                            Contact Us
                        </Button>
                    </Grid>
                </Grid>
                <Grid item alignContent="right" style={{ paddingTop: '20vh' }}>
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
