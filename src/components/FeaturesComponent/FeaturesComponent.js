import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop: "5.75em"
  },
  root2: {
      marginTop: "5.45em",
  },
  features: {
    fontFamily: "Roboto Slab",
    float: "left",
  },
  line: {
    display: "block",
    width: "17%",
    height: "5px",
    background: "#39A1C2",
    position: "absolute",
    right: 0,
    top: "36.75em",
  },
  featureslist: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "1.275rem",
      lineHeight: "1.75rem",
      whiteSpace: "nowrap"
  },
  buttonMargins: {
      marginTop: ".85em",
      marginBottom: ".85em",
  },
  buttonMargins1: {
    marginRight: "14.9em"
},
buttonMargins2: {
    marginRight: "7.575em"
},
buttonMargins3: {
    marginRight: "7.85em"
},
demoBtn: {
    color: "#ffffff",
    marginRight: "11.625em",
    padding: ".5em 4em",
}
}));

const FeaturesComponent = ({click}) => {
  const classes = useStyles();
  const handleClick = e => {
    const { id } = e.currentTarget.dataset
    click(id);
  }
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant="h4" className={classes.features}>
          Features
        </Typography>
        <span className={classes.line}></span>
      </Grid>
      <Grid item xs={12}>
        <Button className={classes.buttonMargins} data-id="standarized-registration" onClick={handleClick}>
          <Typography className={classes.featureslist} data-id="standarized-registration">Standarized Registration & Payments</Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button className={`${classes.buttonMargins} ${classes.buttonMargins1}`} data-id="simple-scheduling" onClick={handleClick}>
          <Typography className={classes.featureslist} data-id="simple-scheduling">Simple Scheduling</Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button className={`${classes.buttonMargins} ${classes.buttonMargins2}`} data-id="control-payments" onClick={handleClick}>
          <Typography className={classes.featureslist} data-id="control-payments">Control Payments & Tuition</Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button className={`${classes.buttonMargins} ${classes.buttonMargins3}`} data-id="centralized-user" onClick={handleClick}>
          <Typography className={classes.featureslist} data-id="centralized-user">Centralized User Accounts</Typography>
        </Button>
      </Grid>
      <Grid item xs={12} className={classes.root2}>
      <NavLink to="/contact-us" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.demoBtn}
        >
          Request Demo
        </Button>
      </NavLink>
      </Grid>
    </Grid>
  );
};

export default FeaturesComponent;
