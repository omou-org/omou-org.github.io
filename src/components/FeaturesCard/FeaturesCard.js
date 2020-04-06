import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import { theme } from "../../theme/theme";

const useStyles = makeStyles(theme => ({
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

const FeaturesCard = props => {
    const classes = useStyles();
    return (
      <section id={props.name} style={{marginTop: "45px"}}>
        <Container>
        <div className={classes.root}>
        <Grid 
          container 
          spacing={3}
          alignItems="center"
        >
          <Grid item xs={6} style={{marginBottom: "20px"}}>
            <Typography
              variant="h2" 
              className={classes.sturegTitle}
              align="left"
            >
              {props.title}
            </Typography>
            <Typography style={{textAlign: "left", marginTop: "20px"}}>
              {props.description}
            </Typography>
          </Grid>
          <br />
          <Grid item xs={6}>
              {props.content()}
          </Grid>
          <Box boxShadow={4}>
            <img src={require("../../assets/img/" + props.image)} alt={props.name} height="auto" width="1256vh"/>
          </Box>
        </Grid>
      </div>
        </Container>
        </section>
    )
  }

  export default FeaturesCard;
  