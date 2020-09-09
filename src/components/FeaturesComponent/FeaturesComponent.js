import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5.75em",
  },
  root2: {
    marginTop: "5.45em",
  },
  features: {
    fontFamily: "Roboto Slab",
    float: "left",
    [theme.breakpoints.between(1280, 1400)]: {
      fontSize: "1.925rem",
    },
    [theme.breakpoints.between(601, 1124)]: {
      fontSize: "1.725rem",
    },
    [theme.breakpoints.between(834, 960)]: {
      marginLeft: "3em",
    },
    [theme.breakpoints.between(601, 834)]: {
      marginLeft: "2em",
    },
  },
  line: {
    display: "block",
    width: "16.7vw",
    height: "3px",
    background: "#39A1C2",
    position: "relative",
    left: "11em",
    top: "1.75em",
    [theme.breakpoints.between(1124, 1920)]: {
      width: "20.7vw",
    },
    [theme.breakpoints.between(960, 1124)]: {
      width: "24.7vw",
      top: "1.35em",
      left: "9em",
    },
    [theme.breakpoints.between(834, 960)]: {
      left: "15em",
      top: "1.35em",
      width: "24.7vw",
    },
    [theme.breakpoints.between(779, 834)]: {
      left: "13em",
      width: "24.7vw",
      top: "1.35em",
    },
    [theme.breakpoints.between(718, 779)]: {
      left: "13em",
      width: "24.7vw",
      top: "1.35em",
    },
    [theme.breakpoints.between(670, 718)]: {
      left: "13em",
      width: "22.7vw",
      top: "1.35em",
    },
    [theme.breakpoints.between(601, 670)]: {
      left: "13em",
      top: "1.3em",
      width: "20.7vw",
    },
  },
  featureslist: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "1.275rem",
    lineHeight: "1.75rem",
    whiteSpace: "nowrap",
    [theme.breakpoints.between(1024, 1400)]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.between(715, 1024)]: {
      fontSize: ".825rem",
    },
    [theme.breakpoints.between(601, 715)]: {
      fontSize: ".7rem",
    },
  },
  buttonMargins: {
    marginTop: ".35em",
    marginBottom: ".35em",
  },
  buttonMargins1: {
    "&:hover": {
      backgroundColor: "rgba(67, 181, 217, 0.2)",
    },
    [theme.breakpoints.between(1024, 1400)]: {
      marginRight: "3.5em",
    },
    [theme.breakpoints.between(815, 1024)]: {
      marginRight: "8.5em",
    },
    [theme.breakpoints.between(715, 960)]: {
      marginLeft: "2.6em",
      marginRight: 0,
    },
    [theme.breakpoints.between(617, 715)]: {
      marginLeft: "2em",
      marginRight: 0,
    },
    [theme.breakpoints.between(601, 617)]: {
      marginLeft: "1.7em",
      marginRight: 0,
    },
  },
  buttonMargins2: {
    marginRight: "14.9em",
    "&:hover": {
      backgroundColor: "rgba(89, 147, 73, 0.2)",
    },
    [theme.breakpoints.between(1024, 1400)]: {
      marginRight: "15.2em",
    },
    [theme.breakpoints.between(960, 1024)]: {
      marginRight: "17.5em",
    },
    [theme.breakpoints.between(715, 960)]: {
      marginRight: "7em",
    },
    [theme.breakpoints.between(601, 715)]: {
      marginRight: "6.5em",
    },
  },
  buttonMargins3: {
    marginRight: "5.575em",
    "&:hover": {
      backgroundColor: "rgba(241, 151, 74, 0.2)",
    },
    [theme.breakpoints.between(1024, 1400)]: {
      marginRight: "7.7em",
    },
    [theme.breakpoints.between(960, 1024)]: {
      marginRight: "11.5em",
    },
    [theme.breakpoints.between(715, 960)]: {
      marginRight: ".9em",
    },
    [theme.breakpoints.between(678, 715)]: {
      marginRight: "1.4em",
    },
    [theme.breakpoints.between(601, 678)]: {
      marginRight: "1.3em",
    },
  },
  buttonMargins4: {
    marginRight: "7.85em",
    "&:hover": {
      backgroundColor: "rgba(206, 103, 100, 0.2)",
    },
    [theme.breakpoints.between(1024, 1400)]: {
      marginRight: "9.5em",
    },
    [theme.breakpoints.between(960, 1024)]: {
      marginRight: "13em",
    },
    [theme.breakpoints.between(714, 960)]: {
      marginRight: "2.5em",
    },
    [theme.breakpoints.between(601, 714)]: {
      marginRight: "2.7em",
    },
  },
  demoBtn: {
    color: "#ffffff",
    marginRight: "11.625em",
    padding: ".5em 4em",
    [theme.breakpoints.between(961, 1280)]: {
      marginRight: "5.5em",
    },
    [theme.breakpoints.between(601, 961)]: {
      marginRight: "1em",
    },
  },
  listMargin: {
    marginTop: "2.5625em",
  },
  clearBg: {
    backgroundColor: "#FFFFFF",
  },
  blueBg: {
    backgroundColor: "rgba(67, 181, 217, 0.2)",
  },
  greenBg: {
    backgroundColor: "rgba(89, 147, 73, 0.2)",
  },
  orangeBg: {
    backgroundColor: "rgba(241, 151, 74, 0.2)",
  },
  redBg: {
    backgroundColor: "rgba(206, 103, 100, 0.2)",
  },
}));

const FeaturesComponent = ({ click, featuresArr }) => {
  const classes = useStyles();
  const [btnBg, setBtnBg] = useState(classes.blueBg);
  const [active, setActive] = useState("1");
  const handleClick = (e) => {
    const { id } = e.currentTarget.dataset;
    click(id);
    switch (id) {
      case "1":
        setBtnBg(classes.blueBg);
        setActive("1");
        break;
      case "2":
        setBtnBg(classes.greenBg);
        setActive("2");
        break;
      case "3":
        setBtnBg(classes.orangeBg);
        setActive("3");
        break;
      case "4":
        setBtnBg(classes.redBg);
        setActive("4");
        break;
      default:
        return;
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.features}>
          Features
        </Typography>
        <span className={classes.line}></span>
      </Grid>
      <Grid item xs={12} className={classes.listMargin}>
        <Button
          className={`${classes.buttonMargins} ${classes.buttonMargins1} ${
            active === "1" ? btnBg : classes.clearBg
            }`}
          data-id="1"
          onClick={handleClick}
        >
          <svg
            width="39"
            height="39"
            viewBox="10 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.1796 19.3616L11.2617 7.8723L10.2076 8.89685L14.508 19.0247L9.91063 29.0154L10.9352 30.0695L38.1796 19.3616Z"
              fill="#404143"
            />
          </svg>

          <Typography className={classes.featureslist}>
            {featuresArr[0]["1"].title}
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          className={`${classes.buttonMargins} ${classes.buttonMargins2} ${
            active === "2" ? btnBg : classes.clearBg
            }`}
          data-id="2"
          onClick={handleClick}
        >
          <svg
            width="39"
            height="39"
            viewBox="10 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.1796 19.3616L11.2617 7.8723L10.2076 8.89685L14.508 19.0247L9.91063 29.0154L10.9352 30.0695L38.1796 19.3616Z"
              fill="#404143"
            />
          </svg>

          <Typography className={classes.featureslist}>
            {featuresArr[1]["2"].title}
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          className={`${classes.buttonMargins} ${classes.buttonMargins3} ${
            active === "3" ? btnBg : classes.clearBg
            }`}
          data-id="3"
          onClick={handleClick}
        >
          <svg
            width="39"
            height="39"
            viewBox="10 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.1796 19.3616L11.2617 7.8723L10.2076 8.89685L14.508 19.0247L9.91063 29.0154L10.9352 30.0695L38.1796 19.3616Z"
              fill="#404143"
            />
          </svg>

          <Typography className={classes.featureslist}>
            {featuresArr[2]["3"].title}
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          className={`${classes.buttonMargins} ${classes.buttonMargins4} ${
            active === "4" ? btnBg : classes.clearBg
            }`}
          data-id="4"
          onClick={handleClick}
        >
          <svg
            width="39"
            height="39"
            viewBox="10 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.1796 19.3616L11.2617 7.8723L10.2076 8.89685L14.508 19.0247L9.91063 29.0154L10.9352 30.0695L38.1796 19.3616Z"
              fill="#404143"
            />
          </svg>

          <Typography className={classes.featureslist}>
            {featuresArr[3]["4"].title}
          </Typography>
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
