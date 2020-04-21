import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";

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
  title: {
    fontSize: "54px",
    fontWeight: "bolder",
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.75rem'
    }
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%'
    }
  },
}));

const FeaturesCard = (props) => {
  const classes = useStyles();
  return (
    <section
      id={props.name}
      style={{
        marginTop:
          props.title == "Standardized Registration and Payments"
            ? "50px"
            : "200px",
      }}
    >
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6} style={{ marginBottom: "35px" }}>
              <Typography variant="h2" className={classes.title} align="left">
                {props.title}
              </Typography>
              <Typography style={{ textAlign: "left", marginTop: "40px" }}>
                {props.description}
              </Typography>
            </Grid>
            <br />
            <Grid item xs={6}>
              {props.content()}
            </Grid>
            <Box boxShadow={4} style={{ marginTop: "37px" }}>
              <img
                src={require("../../assets/img/" + props.image)}
                className={classes.image}
                alt={props.name}
                height="auto"
                width="1000vh"
              />
            </Box>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesCard;
