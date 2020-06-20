import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2.813em",
    marginBottom: "1.313em",
  },
  root1: {
    width: "99%",
    backgroundColor: "#43B5D9",
    marginLeft: "-2em",
    borderRadius: "1em",
  },
  title: {
    fontSize: "1.4rem",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "900",
    lineHeight: "136.69%",
    color: "#FFFFFF",
    [theme.breakpoints.between(969, 1279)]: {
      fontSize: "1.25rem",
      marginLeft: ".275em",
    },
    [theme.breakpoints.between(601, 969)]: {
      fontSize: "1.25rem",
      marginLeft: ".275em",
    },
  },
  list1: {
    color: "#FFFFFF",
    textAlign: "left",
    fontFamily: "Roboto",
    fontStyle: "normal",
    lineHeight: "2em",
    fontWeight: 300,
    fontSize: "1.4rem",
    listStyle: "none",
    [theme.breakpoints.between(601, 1279)]: {
      fontSize: ".85rem",
    },
  },
  card2: {
    marginLeft: "2em",
    paddingBottom: "3.475em",
  },
  card1: {
    width: "96%",
    backgroundColor: "#43B5D9",
    borderTopRightRadius: "1em",
    borderBottomRightRadius: "1em",
  },
}));

const FeaturesList = (props) => {
  console.log(props);
  const classes = useStyles();

  const list1 = () => {
    const listItem1 = props.title1.list;
    return listItem1.map((item) => (
      <li>
        <svg
          style={{ marginRight: "2.5em" }}
          width="24"
          height="19"
          viewBox="0 0 24 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.59585 18.8483L0 11.1755L3.30255 8.00634L7.59585 12.3431L19.8153 0L23.1178 3.33597L7.59585 18.8483Z"
            fill="white"
          />
        </svg>
        {item}
      </li>
    ));
  };

  const list2 = () => {
    const listItem2 = props.title2.list;
    return listItem2.map((item) => (
      <li>
        <svg
          style={{ marginRight: "2.5em" }}
          width="24"
          height="19"
          viewBox="0 0 24 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.59585 18.8483L0 11.1755L3.30255 8.00634L7.59585 12.3431L19.8153 0L23.1178 3.33597L7.59585 18.8483Z"
            fill="white"
          />
        </svg>
        {item}
      </li>
    ));
  };

  const list3 = () => {
    const listItem3 = props.title1;
    return listItem3.map((item) => (
      <li>
        <svg
          style={{ marginRight: "2.5em" }}
          width="24"
          height="19"
          viewBox="0 0 24 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.59585 18.8483L0 11.1755L3.30255 8.00634L7.59585 12.3431L19.8153 0L23.1178 3.33597L7.59585 18.8483Z"
            fill="white"
          />
        </svg>
        {item}
      </li>
    ));
  };

  return (
    <>
      {props.title2 ? (
        <Grid
          container
          direction="row"
          justify="flex-start"
          className={classes.root}
        >
          <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
            <Card className={`${classes.root1}`}>
              <Grid container>
                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Grid container className={classes.root}>
          <Grid item xs={7}>
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
