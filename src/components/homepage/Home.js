import React from 'react';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import people from './homeimages/people.svg';
import ContentSection from './ContentSection';
import ContactUsForm from './ContactUsForm';
import { homePageData } from './homePageData';
import { slideShowData } from './slideShowData';
import SlideShow from './Slideshow';
import { primaryColor } from '../../theme/colors';

import Carousel from 'react-multi-carousel';
import './home.scss';
const useStyles = makeStyles((theme) => ({
    homepageBanner: {
        paddingTop: '15vh',

        width: '100%',
        textAlign: 'center',
        color: 'black',
    },
    homepageText: {
        marginLeft: '10vh',

        paddingBottom: '4vh',
        fontSize: '50px',
        [theme.breakpoints.down('md')]: {
            fontSize: '3vh',
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0',
        },
    },
    homepageSubText: {
        marginLeft: '10vh',
        fontSize: '30px',
        paddingTop: '2vh',
        paddingBottom: '4vh',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0',
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
        marginRight: '18vh',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        '&:hover': {
            backgroundColor: '#A0A0A0',
            color: '#FFF',
        },
    },
    sliderContainer: {
        backgroundColor: '#FAFAFA',
        height: '700px',
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

const Home = (props) => {
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
                <Grid
                    item
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                    sm={8}
                    lg={7}
                >
                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            align="left"
                            className={classes.homepageText}
                        >
                            Don't just digitize the way your tutoring center
                            runs Transform it
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography
                            className={classes.homepageSubText}
                            align="left"
                        >
                            Omou is a tutoring management service designed for
                            remote-learning.
                        </Typography>
                    </Grid>
                    <Grid item xs={10} style={{ paddingTop: '4vh' }}>
                        <Button className={classes.contactUsButton}>
                            CONTACT US
                        </Button>
                    </Grid>
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
            <Grid>
                <Grid container spacing={0}>
                    {homePageData.map(
                        ({
                            image,
                            title,
                            description,
                            learnMore,
                            isRight,
                            waveImage,
                            displayContactUsButton,
                            homepage,
                        }) => (
                            <ContentSection
                                image={image}
                                title={title}
                                description={description}
                                learnMore={learnMore}
                                isRight={isRight}
                                waveImage={waveImage}
                                displayContactUsButton={displayContactUsButton}
                                homepage={homepage}
                            />
                        )
                    )}
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                style={{ backgroundColor: '#FAFAFA', padding: '5em' }}
            >
                <Carousel
                    swipeable={true}
                    responsive={responsive}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={['tablet', 'mobile']}
                >
                    {slideShowData.map(({ image, description, title }) => (
                        <SlideShow
                            image={image}
                            description={description}
                            title={title}
                        />
                    ))}
                </Carousel>
            </Grid>

            <ContactUsForm />
        </Grid>
    );
};

export default Home;
