import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import { theme } from "../theme/theme"

const useStyles = makeStyles((theme) => ({
  root: {
  },
  jumbotron: {
    background: "linear-gradient(110deg,#3E6E8C 60%, #7EB6D9 60%)",
    height: "450px"
  },
  jumbotronTitle: {
    textAlign: "left",
  },
  jumbotronText: {
    marginTop: "10px", 
    textAlign: "left",
    fontSize: "19px"
  }
}));


export default function Features() {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.jumbotron}>
        <Typography component="div" className={classes.jumbotronTitle} style={theme.typography.h1}>
        Lorem, ipsum dolor.
        </Typography>
        <Grid container xs={6}>
        <Typography component="div" className={classes.jumbotronText}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad provident optio tempora, voluptatum quo commodi similique magni illum repellendus veritatis asperiores amet expedita blanditiis, debitis, accusantium corrupti dicta explicabo. Necessitatibus!
        </Typography>
        </Grid>
      </Container>
    </>
  );
}