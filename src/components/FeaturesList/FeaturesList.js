import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "9.813em",
    marginBottom: "7.313em",
  },
  root1: {
    width: "99%",
    backgroundColor: "#43B5D9",
    marginLeft: "-2em",
    borderRadius: "1em",
  },
  title: {
    fontSize: "1.5rem",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "900",
    lineHeight: "136.69%",
    color: "#FFFFFF",
  },
  list1: {
    color: "#FFFFFF",
    textAlign: "left",
    fontFamily: "Roboto",
    fontStyle: "normal",
    lineHeight: "2em",
    fontWeight: 300,
    fontSize: "1.5rem",
    marginTop: "2em",
  },
  card2: {
    marginLeft: "2em",
    paddingBottom: "3.475em",
  },
  card1: {
    width: "96%",
    backgroundColor: "#43B5D9",
    marginLeft: "2.5em",
    borderRadius: "1em",
  },
});

const FeaturesList = (props) => {
  console.log(props);
  const classes = useStyles();

  const list1 = () => {
    const listItem1 = props.title1.list;
    return listItem1.map((item) => <li>{item}</li>);
  };

  const list2 = () => {
    const listItem2 = props.title2.list;
    return listItem2.map((item) => <li>{item}</li>);
  };

  const list3 = () => {
    const listItem3 = props.title1;
    return listItem3.map((item) => <li>{item}</li>);
  };

  return (
    <>
      {props.title2 ? (
        <Grid container justify="center" className={classes.root}>
          <Grid item xs={5}>
            <Card className={`${classes.root1}`}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {props.title1.title}
                </Typography>
                <ul className={classes.list1}>{list1()}</ul>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={5}>
            <Card className={`${classes.root1} ${classes.card2}`}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {props.title2.title}
                </Typography>
                <ul className={classes.list1}>{list2()}</ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Card
              className={classes.card1}
              style={{ backgroundColor: props.style }}
            >
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {props.title1.title}
                </Typography>
                <ul className={classes.list1}>{list3()}</ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default FeaturesList;
