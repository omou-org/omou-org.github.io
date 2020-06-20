import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slideshow from "../Slideshow/Slideshow";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4.688em",
  },
  title: {
    fontFamily: "Roboto Slab",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "2.9375rem",
    color: "#1F82A1",
    float: "left",
    marginLeft: "1.3em",
    [theme.breakpoints.between(802, 961)]: {
      fontSize: "1.725rem",
    },
    [theme.breakpoints.between(788, 802)]: {
      fontSize: "1.525rem",
    },
    [theme.breakpoints.between(601, 788)]: {
      fontSize: "1.5rem",
      marginLeft: ".5em",
    },
  },
  text: {
    float: "left",
    marginLeft: "2.65em",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "1.5rem",
    lineHeight: "2.0625rem",
    textAlign: "left",
    [theme.breakpoints.between(601, 961)]: {
      fontSize: "1.225rem",
    },
    [theme.breakpoints.between(601, 788)]: {
      marginLeft: "2.45em",
    },
  },
  slideshow: {
    marginLeft: "4.5em",
    marginTop: "0.625em",
    maxWidth: "45%",
    [theme.breakpoints.between(788, 961)]: {
      maxWidth: "55%",
    },
    [theme.breakpoints.between(601, 788)]: {
      maxWidth: "65%",
    },
  },
  boxShadow: {
    boxShadow: "0 4px 5px -2px gray",
    padding: "1.3em",
    borderRadius: ".6em",
  },
}));

const FeaturesContent = (props) => {
  const classes = useStyles();
  const { title, subtitle, images, path, style } = props.data[props.keys];

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={9} lg={9} className={classes.boxShadow}>
          <Typography
            variant="h4"
            className={classes.title}
            style={{ color: style }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={9} lg={9}>
          <p className={classes.text}>{subtitle}</p>
        </Grid>
        <Grid item xs={12} md={9} lg={9} className={classes.slideshow}>
          <Slideshow images={images} path={path} />
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturesContent;
