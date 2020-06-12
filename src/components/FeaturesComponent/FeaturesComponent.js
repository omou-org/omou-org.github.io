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
  },
  line: {
    display: "block",
    width: "16.7vw",
    height: "3px",
    background: "#39A1C2",
    position: "relative",
    left: "11em",
    top: "1.75em",
  },
  featureslist: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "1.275rem",
    lineHeight: "1.75rem",
    whiteSpace: "nowrap",
    [theme.breakpoints.between('xs', "sm")]: {
      fontSize: ".3rem !important",
    },
    [theme.breakpoints.between('sm', "md")]: {
      fontSize: ".4rem !important",
    },
    [theme.breakpoints.between('md', "lg")]: {
      fontSize: "1rem !important",
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
  },
  buttonMargins2: {
    marginRight: "14.9em",
    "&:hover": {
      backgroundColor: "rgba(89, 147, 73, 0.2)",
    },
  },
  buttonMargins3: {
    marginRight: "5.575em",
    "&:hover": {
      backgroundColor: "rgba(241, 151, 74, 0.2)",
    },
  },
  buttonMargins4: {
    marginRight: "7.85em",
    "&:hover": {
      backgroundColor: "rgba(206, 103, 100, 0.2)",
    },
  },
  demoBtn: {
    color: "#ffffff",
    marginRight: "11.625em",
    padding: ".5em 4em",
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
      default:
        return;
    }
    click(id);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={3} md={6} lg={9} xl={12}>
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
