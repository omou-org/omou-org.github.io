import React from "react";
import { Button, Typography, Grid, makeStyles } from "@material-ui/core";
import studentImage from "./student.png";
import bookImage from "./book.png";
import loginImage from "./login.png"
import { NavLink } from "react-router-dom";


import { HomeData } from "./HomeData";

import "./Home.scss";



const useStyles = makeStyles(theme => ({
    topTextPadding: {
        padding: "20vh",
        [theme.breakpoints.down('sm')]: {
            padding: "10vh",
        }
    },
    scheduleImage: {
        width: "20vh",
        height: "20vh",
        marginTop: "10vh",
        [theme.breakpoints.down('sm')]: {
            width: "15vh",
            height: "15vh"
        }
    },
    contentText: {
        textAlign: "left",
        fontSize: "18px",
        lineHeight: "24px",
        marginTop: "3vh",
        marginBottom: "3vh",
        [theme.breakpoints.down('sm')]: {
            textAlign: "center"
        }
    },
    learnMoreButtonSizing: {
        width: "30em",
        [theme.breakpoints.down('sm')]: {
            width: "20em"
        }
    }

}))

export default function Home() {
    const classes = useStyles()



    const { header, content } = HomeData

    return (

        <div>
            <div className='background-image'>
                <Grid container className={classes.backgroundImagePadding}>
                    <Grid item md />
                    <Grid item xs={12} md={9} align="center" className={classes.topTextPadding}>
                        <Typography variant="h3" className="upper" >
                            {header.title} <span className="transform-colors">{header.transformText}</span>{header.textAfterTransform}
                        </Typography>
                        <Typography variant="h5" className="bottom" >
                            {header.bottomText}
                        </Typography>
                    </Grid>
                    <Grid item md />
                </Grid>
            </div>

            <Grid container
                className="mid"
                direction="row"
                justify="space-evenly"
            >
                <Grid item sm={12} md={3}>
                    <img
                        className={classes.scheduleImage}
                        src={bookImage} />
                    <Typography className="title1">
                        {content.title1}
                    </Typography>
                    <Typography className={classes.contentText} >
                        {content.description1}
                    </Typography>
                </Grid>
                <Grid item sm={12} md={3}>
                    <img
                        className={classes.scheduleImage}
                        src={loginImage} />

                    <Typography className="title1">
                        {content.title2}
                    </Typography>

                    <Typography className={classes.contentText}>
                        {content.description2}
                    </Typography>

                </Grid>
                <Grid item sm={12} md={3}>

                    <img
                        className={classes.scheduleImage}
                        src={studentImage} />

                    <Typography className="title1">
                        {content.title3}
                    </Typography>
                    <Typography className={classes.contentText}>
                        {content.description3}
                    </Typography>
                </Grid>

            </Grid>
            <Grid container direction="row" alignContent="center" className="learnMoreContainer">
                <Grid item xs={12}>
                    <NavLink to="/features" style={{ textDecoration: "none", backgroundColor: "#43B5D9" }}>
                        <Button
                            variant="contained"
                            size="large"
                            style={{ color: "black", backgroundColor: "white", }}
                            className={classes.learnMoreButtonSizing}
                        >
                            Learn More
                             </Button>
                    </NavLink>
                </Grid>
            </Grid>

        </div>)
}