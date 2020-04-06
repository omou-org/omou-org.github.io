import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import { theme } from "../theme/theme";
import FeaturesData from "./FeaturesData"
import FeaturesCard from "../components/FeaturesCard/FeaturesCard"

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
  },
  jumbotronTitle: {
    textAlign: "left",
  },
  jumbotronText: {
    marginTop: "10px",
    textAlign: "left",
    fontSize: "19px",
  },
  sturegTitle: {
    fontSize: "40px",
    fontWeight: "bolder"
  },
  alignTextLeft: {
    textAlign: "left"
  }
}));

export default function Features() {

  const classes = useStyles();
  const featureDisplay = FeaturesData.map(data => (<FeaturesCard
    key={data.name} 
    name={data.name} 
    title={data.title}
    description={data.description} 
    content={data.content}
    image={data.image}
    />))
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.jumbotron}>
        <Typography
          component="div"
          className={classes.jumbotronTitle}
          style={theme.typography.h1}
        >
          Lorem, ipsum dolor.
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

      <Container>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Link href="#stureg" onClick={(e) => e.preventDefault}>
                Standardized Registration and Payments
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link href="#" onClick={(e) => e.preventDefault}>
                Simple monthly scheduling
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link href="#" onClick={(e) => e.preventDefault}>
                Centralized user accounts
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link href="#" onClick={(e) => e.preventDefault}>
                Ticketing that follows students, teachers, and admin
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    {featureDisplay}
    <br />
    <br />
    <Button variant="contained" color="primary">
    Request Demo
    </Button>
    </>
  );
}

