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
    marginTop: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  jumbotron: {
    background: "linear-gradient(110deg,#3E6E8C 60%, #7EB6D9 60%)",
    height: "450px",
    paddingTop: "7%",
  },
  jumbotronTitle: {
    textAlign: "left",
    color: "#ffffff",
  },
  jumbotronText: {
    marginTop: "10px",
    textAlign: "left",
    fontSize: "19px",
    color: "#ffffff",
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
  const classes = useStyles();
  const featureDisplay = FeaturesData.map((data) => (
    <FeaturesCard
      key={data.name}
      name={data.name}
      title={data.title}
      description={data.description}
      content={data.content}
      image={data.image}
    />
  ));
  return (
    <>
      <CssBaseline />
      <div className={classes.jumbotron}>
        <Container maxWidth="lg">
          <Typography
            component="div"
            className={classes.jumbotronTitle}
            style={theme.typography.h1}
          >
            Our Features
          </Typography>
          <Grid container xs={6}>
            <Typography component="div" className={classes.jumbotronText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
              provident optio tempora, voluptatum quo commodi similique magni
              illum repellendus veritatis asperiores amet expedita blanditiis,
              debitis, accusantium corrupti dicta explicabo. Necessitatibus!
            </Typography>
          </Grid>
        </Container>
      </div>

      <Container>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Link
                href="#stureg"
                onClick={(e) => e.preventDefault}
                style={{ color: "#635b5c" }}
              >
                Standardized Registration and Payments
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link
                href="#paytrack"
                onClick={(e) => e.preventDefault}
                style={{ color: "#635b5c" }}
              >
                Simple Monthly Scheduling
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link
                href="#schedule"
                onClick={(e) => e.preventDefault}
                style={{ color: "#635b5c" }}
              >
                Centralized User Accounts
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link
                href="#useracct"
                onClick={(e) => e.preventDefault}
                style={{ color: "#635b5c" }}
              >
                User Ticketing
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
          style={{ color: "white", marginTop: "150px" }}
        >
          Request Demo
        </Button>
      </NavLink>
    </>
  );
}
