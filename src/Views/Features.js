import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import { theme } from "../theme/theme";
import studentregister from "../assets/img/stureg.png"

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
    fontSize: "30px",
    fontWeight: "bolder"
  }
}));

export default function Features() {
  const classes = useStyles();
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

    <section id="stureg">
      <Container>
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} style={{marginBottom: "20px"}}>
          <Typography className={classes.sturegTitle}>
            Standardized Registration and Payments
          </Typography>
          {/* <Paper className={classes.paper}>Title</Paper> */}
        </Grid>
        <Grid item xs={6}>
          <Typography>
            With an automated registration flow and payment history, never wonder if a student has completed payment again.
          </Typography>
          {/* <Paper className={classes.paper}>Content</Paper> */}
        </Grid>
        <Grid item xs={12}>
        <img src={studentregister} alt="stureg" height="auto" width="1300vh"/>
          {/* <Paper className={classes.paper}>xs=12</Paper> */}
        </Grid>
      </Grid>
    </div>
      </Container>
      </section>

      <section id="simple-monthly-secheduling">
      <Container>
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} style={{marginBottom: "20px"}}>
          <Typography className={classes.sturegTitle}>
            Standardized Registration and Payments
          </Typography>
          {/* <Paper className={classes.paper}>Title</Paper> */}
        </Grid>
        <Grid item xs={6}>
          <Typography>
            With an automated registration flow and payment history, never wonder if a student has completed payment again.
          </Typography>
          {/* <Paper className={classes.paper}>Content</Paper> */}
        </Grid>
        <Grid item xs={12}>
        <img src={studentregister} alt="stureg" height="auto" width="1300vh"/>
          {/* <Paper className={classes.paper}>xs=12</Paper> */}
        </Grid>
      </Grid>
    </div>
      </Container>
      </section>
    </>
  );
}
