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
      fontSize: '1.55rem'
    }
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%'
    }
  },
  cascadeSection: {
    fontSize: "18px",
    lineHeight: "37px",
    [theme.breakpoints.down('xs')]: {
      fontSize:"12px",
      lineHeight: "20px",
    }
  }
}));

const FeaturesCard = ({name, title, description, content, image, styling}) => {
  const classes = useStyles();

  if(name=="stureg"){
    return <section
        id={name}
        style={styling}
    >
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid
              container
              spacing={3}
              direction="column"
          >
            <Grid item>
              <div
                style={{
                  borderBottom: "8px solid #53A9D0"
                }}
              >
                <Typography variant="h4" align="left">
                  {title}
                </Typography>
              </div>
              <br/><br/>
              <Typography variant="body1" align="left">
                {description}
              </Typography>
            </Grid>
            <Grid item>
              <img
                  src={require("../../assets/img/" + image)}
                  className={classes.image}
                  alt={name}
                  height="auto"
                  width="80%"
              />
            </Grid>
            <Grid
                item
                container
                direction="row"
                spacing={3}
            >
              {content()}
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  }

  return (
    <section
      id={name}
      style={styling}
    >
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6} style={{ marginBottom: "35px" }}>
              <Typography variant="h2" className={classes.title} align="left">
                {title}
              </Typography>
              <Typography style={{ textAlign: "left", marginTop: "40px" }}>
                {description}
              </Typography>
            </Grid>
            <br />
            <Grid item xs={6} className={classes.cascadeSection}>
              {content()}
            </Grid>
            <Box boxShadow={4} style={{ marginTop: "37px" }}>
              <img
                src={require("../../assets/img/" + image)}
                className={classes.image}
                alt={name}
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
