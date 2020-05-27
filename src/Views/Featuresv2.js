import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FeaturesComponent from "../components/FeaturesComponent/FeaturesComponent";
import FeaturesCardV2 from "../components/FeaturesCardv2/FeaturesCardv2";

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      marginTop: "20px"
    },
    jumbotron: {
      background: "linear-gradient(130deg,#43B5D9 65%, #28ABD5 60%)",
      height: "24.919em",
      paddingTop: "2%",
      paddingRight: "18%"
    },
    jumbotronTitle: {
      textAlign: "left",
      color: "#ffffff"
    },
    jumbotronText: {
      marginTop: "1.5em",
      textAlign: "left",
      fontSize: "1.1875rem",
      color: "#000000"
    },
    sturegTitle: {
      fontSize: "40px",
      fontWeight: "bolder",
    },
    alignTextLeft: {
      textAlign: "left",
    },
  });

const Featuresv2 = () => {
    const [features, setFeatures] = useState("standarized-registration");
    const classes = useStyles();

    const handleClick = id => {
        console.log(`previous state: ${features}`)
        setFeatures(id);
        console.log(features);
    }

  return (
    <>
      <CssBaseline />
    <Paper elevation={3}>
      <div className={classes.jumbotron}>
        <Container maxWidth="lg" disableGutters>
          <Typography variant="h2" align="left" className={classes.jumbotronTitle}>
            Our Features
          </Typography>
          <Grid container xs={12} md={6} lg={7}>
            <Typography variant="body1" align="left" className={classes.jumbotronText}>
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
    </Paper>

      <Grid container >
          <Grid item xs={6} md={9} lg={9}>
              <FeaturesCardV2 />
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
                <FeaturesComponent click={handleClick}/>
          </Grid>
      </Grid>
    </>
  );
};

export default Featuresv2;
