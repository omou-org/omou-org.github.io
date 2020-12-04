import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import people from './homeimages/people.svg';
import ContentSection from './ContentSection';
import ContactUsForm from './ContactUsForm';
import homePageData from './homePageData.json';
import { slideShowData } from './slideShowData';
import SlideShow from './Slideshow';
import Carousel from 'react-multi-carousel';
import './home.scss';
const useStyles = makeStyles((theme) => ({
    homepageBanner: {
        width: '100%',
        textAlign: 'center',
        color: 'black',
    },
    homepageText: {
        marginLeft: '20vh',
        fontSize: '50px',
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
        paddingTop: '2em',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0',
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
                xs={12}
                container
                justify="space-between"
                direction="row"
                alignItems="center"
                className={classes.homepageBanner}
            >
                <Grid item sm={8} lg={7}>
                    <Typography align="left" className={classes.homepageText}>
                        DON'T JUST DIGITIZE THE WAY YOUR TUTORING CENTER RUNS
                        TRANSFORM IT
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
            <Grid>
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
