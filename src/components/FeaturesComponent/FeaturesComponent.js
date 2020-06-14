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
    // [theme.breakpoints.between(1280, 1444)]: {
    //   fontSize: "1.925rem !important",
    // },
  },
  line: {
    display: "block",
    width: "16.7vw",
    height: "3px",
    background: "#39A1C2",
    position: "relative",
    left: "11em",
    top: "1.75em",
    // [theme.breakpoints.between(1710, 1849)]: {
    //   width: "16vw"
    // },
    // [theme.breakpoints.between(1684, 1710)]: {
    //   width: "15.9vw"
    // },
    // [theme.breakpoints.between(1675, 1684)]: {
    //   width: "15.5vw"
    // },
    // [theme.breakpoints.between(1654, 1675)]: {
    //   width: "15.3vw"
    // },
    // [theme.breakpoints.between(1605, 1654)]: {
    //   width: "15vw"
    // },
    // [theme.breakpoints.between(1500, 1605)]: {
    //   width: "14.9vw"
    // },
    // [theme.breakpoints.between(1476, 1500)]: {
    //   width: "14.7vw"
    // },
    // [theme.breakpoints.between(1450, 1476)]: {
    //   width: "14.5vw"
    // },
    // [theme.breakpoints.between(1440, 1450)]: {
    //   width: "14.3vw"
    // },
    // [theme.breakpoints.between(1280, 1440)]: {
    //   width: "14vw",
    //   left: "10em"
    // },
  },
  featureslist: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "1.275rem",
    lineHeight: "1.75rem",
    whiteSpace: "nowrap",
    // [theme.breakpoints.between(320, 360)]: {
    //   fontSize: ".3rem !important",
    // },
    // [theme.breakpoints.between('sm', "md")]: {
    //   fontSize: ".4rem !important",
    // },
    // [theme.breakpoints.between(1280, 1444)]: {
    //   fontSize: ".575rem !important",
    // },
    // [theme.breakpoints.between(1444, 1450)]: {
    //   fontSize: ".615rem !important",
    // },
    // [theme.breakpoints.between(1450, 1476)]: {
    //   fontSize: ".615rem !important",
    // },
    // [theme.breakpoints.between(1476, 1500)]: {
    //   fontSize: ".675rem !important",
    // },
    // [theme.breakpoints.between(1500, 1514)]: {
    //   fontSize: ".675rem !important",
    // },
    // [theme.breakpoints.between(1514, 1540)]: {
    //   fontSize: ".725rem !important",
    // },
    // [theme.breakpoints.between(1540, 1605)]: {
    //   fontSize: ".775rem !important",
    // },
    // [theme.breakpoints.between(1605, 1700)]: {
    //   fontSize: ".875rem !important",
    // },
    // [theme.breakpoints.between(1700, 1919)]: {
    //   fontSize: "1rem !important",
    // },
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
      default:
        return;
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={3} md={6} lg={9} xl={12}>
        <Typography variant="h4" className={classes.features}>
          Features
        </Typography>
        {/* <span className={classes.line}></span> */}
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
