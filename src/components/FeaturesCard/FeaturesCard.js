import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card/Card";

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

const FeaturesCard = ({name, title, description, content, image, styling, underline_color}) => {
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
              <Typography variant="h4" align="left">
                <span style={{
                  borderBottom: `8px solid ${underline_color}`,
                  lineHeight: '1.5em'
                }}>
                  {title}
                </span>
              </Typography>
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
          <Grid
              container
              spacing={3}
              direction="row"
              alignItems="flex-end"
          >
            <Grid item xs={12}>
              <Typography variant="h4" align="left">
                <span style={{
                  borderBottom: `8px solid ${underline_color}`,
                  lineHeight: '1.5em'
                }}>
                  {title}
                </span>
              </Typography>
            </Grid>
            <Grid item
                  xs={12} md={6}>
              <Typography style={{ textAlign: "left", marginTop: "40px" }}>
                {description}
              </Typography>
              <Grid item xs={12} className={classes.cascadeSection}>
                  <Card
                      style={{
                        backgroundColor: `${underline_color}`,
                        color:"white",
                        padding:"25px",
                        margin:"30px 30px 0 30px"
                      }}
                  >
                    {content()}
                  </Card>

              </Grid>
            </Grid>
            <Grid item
                  xs={12} md={6}>
              <Box boxShadow={4} style={{ marginTop: "37px" }}>
                <img
                  src={require("../../assets/img/" + image)}
                  className={classes.image}
                  alt={name}
                  height="auto"
                  width="100%"
                />
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesCard;
