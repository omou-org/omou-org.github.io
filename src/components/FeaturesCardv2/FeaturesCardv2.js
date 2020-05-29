import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Slideshow from "../Slideshow/Slideshow";
import { NavLink } from "react-router-dom";
import { Slide } from "@material-ui/core";

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
    marginLeft: "1.9em",
  },
  text: {
    float: "left",
    marginLeft: "2.75em",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "1.5rem",
    lineHeight: "2.0625rem",
    textAlign: "left",
  },
  slideshow: {
    marginLeft: "2.5em",
    marginTop: "4.625em",
  },
}));

const FeaturesCardv2 = (props) => {
  const classes = useStyles();
  const { title, subtitle, images, path, style } = props.data[props.keys];

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={9} lg={9}>
          <Typography
            variant="h4"
            className={classes.title}
            style={{ color: style }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <p className={classes.text}>{subtitle}</p>
        </Grid>
        <Grid item xs={12} md={9} lg={9} className={classes.slideshow}>
          <Slideshow images={images} path={path} />
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturesCardv2;
