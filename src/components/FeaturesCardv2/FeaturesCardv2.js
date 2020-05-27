import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "4.688em"
    },
  title: {
    fontFamily: "Roboto Slab",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "2.9375rem",
    color: "#1F82A1",
    float: "left",
    marginLeft: "2.75em",
  },
  text: {
    float: "left",
    marginLeft: "2.75em",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "1.5rem",
    lineHeight: "2.0625rem"
  }
}));

const FeaturesCardv2 = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={9} lg={9}>
          <Typography variant="h4" className={classes.title}>
            Standardized Registration and Payments
          </Typography>
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <p className={classes.text}>
            Omou provides an easy way for admins to browse all available
            tutoring courses with detailed descriptions and register students
            quickly.
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturesCardv2;
