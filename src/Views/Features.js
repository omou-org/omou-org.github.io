import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { theme } from "../theme/theme";
import FeaturesData from "./FeaturesData";
import FeaturesCard from "../components/FeaturesCard/FeaturesCard";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  jumbotron: {
    background: "linear-gradient(110deg,#3E6E8C 60%, #7EB6D9 60%)",
    height: "450px",
    paddingTop: "7%"
  },
  jumbotronTitle: {
    textAlign: "left",
    color: "#ffffff"
  },
  jumbotronText: {
    marginTop: "10px",
    textAlign: "left",
    fontSize: "19px",
    color: "#ffffff"
  },
  sturegTitle: {
    fontSize: "40px",
    fontWeight: "bolder",
  },
  alignTextLeft: {
    textAlign: "left",
  },
}));

export default function Features() {
  const classes = useStyles(theme);
  const featureDisplay = FeaturesData.map((data) => (
    <FeaturesCard
      key={data.name}
      name={data.name}
      title={data.title}
      description={data.description}
      content={data.content}
      images={data.images}
      path={data.path}
      styling={data.styling}
      underline_color={data.underline_color}
    />
  ));
  return (
    <>
      <CssBaseline />
      <div className={classes.jumbotron}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="left" style={{ color: "white" }}>
            Our Features
          </Typography>
          <Grid container xs={12} md={6}>
            <Typography variant="body1" align="left" style={{ color: "white" }}>
              Whatever your needs are, Omou can help your tutoring center
              seamlessly make the transition to digital learning. Manage tutor
              schedule, billing invoices, and everything else that keeps your
              business running, all from our platform.
              <br />
              <br />
              Thinking of a feature that’s not listed? Contact us, since it’s
              likely on our roadmap.
            </Typography>
          </Grid>
        </Container>
      </div>

      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container spacing={2} className={classes.sectionContainer}>
            <Grid item>
              <Link
                href="#stureg"
                onClick={(e) => e.preventDefault}
                style={{ color: "#635b5c" }}
              >
                Standardized Registration and Payments
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#schedule"
                onClick={(e) => e.preventDefault}
                style={{ color: "#635b5c" }}
              >
                Simple Scheduling
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#paytuition"
                onClick={(e) => e.preventDefault}
                style={{ color: "#635b5c" }}
              >
                Control Payments and Tuition
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#useracct"
                onClick={(e) => e.preventDefault}
                style={{ color: "#635b5c" }}
              >
                Centralized User Accounts
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
      {featureDisplay}
      <NavLink to="/contact-us" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          style={{ color: "white", marginTop: "150px", marginRight: "-75px" }}
        >
          Request Demo
        </Button>
      </NavLink>
    </>
  );
}
