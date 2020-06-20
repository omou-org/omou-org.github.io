import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Card, CardContent } from "@material-ui/core";
import Slideshow from "../Slideshow/Slideshow";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4.688em",
  },
  boxShadow: {
    boxShadow: "0 4px 5px -2px gray",
    padding: "1.3em",
    borderRadius: ".6em",
  },
  text: {
    fontSize: "1.5rem",
    fontFamily: "Roboto",
    fontWeight: 300,
    lineHeight: "1.5em",
    display: "flex",
    justifyContent: "center",
  },
  card1: {
    backgroundColor: "#43B5D9",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    height: "100%",
    boxShadow:
      "0px 2px 0px -1px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0,0,0,0.14), 0px 1px 0px 0px rgba(0,0,0,0.12)",
  },
  card2: {
    backgroundColor: "#43B5D9",
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    boxShadow:
      "0px 2px 0px -1px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0,0,0,0.14), 0px 1px 0px 0px rgba(0,0,0,0.12)",
    height: "100%",
  },
  card3: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: "1.2rem",
    fontWeight: 900,
  },
  list: {
    textAlign: "left",
    color: "#FFFFFF",
    fontSize: "1.1rem",
  },
  list2: {
    textAlign: "left",
    color: "#FFFFFF",
    fontSize: "1.3rem",
    fontFamily: "Roboto",
    fontWeight: 900,
  },
  checkmark: {
    listStyle: "none",
  },
}));

const FeaturesMobileContent = (props) => {
  const classes = useStyles();

  const data = props.data.features;

  const list1 = () => {
    const listItem1 = data[0][1].card1.list;
    return listItem1.map((item) => (
      <li>
        <svg
          style={{ marginRight: "1em" }}
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.77854 16.6977L0.0292969 9.90042L2.52897 7.09284L5.77854 10.9348L15.0273 0L17.527 2.95535L5.77854 16.6977Z"
            fill="white"
          />
        </svg>
        {item}
      </li>
    ));
  };
  const list2 = () => {
    const listItem2 = data[0][1].card2.list;
    return listItem2.map((item) => (
      <li>
        <svg
          style={{ marginRight: "1em" }}
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.77854 16.6977L0.0292969 9.90042L2.52897 7.09284L5.77854 10.9348L15.0273 0L17.527 2.95535L5.77854 16.6977Z"
            fill="white"
          />
        </svg>
        {item}
      </li>
    ));
  };

  const list3 = (content, i) => {
    const listItem3 = content[i + 1].card;
    const renderList = listItem3.map((item) => (
      <li>
        <svg
          style={{ marginRight: "1em" }}
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.77854 16.6977L0.0292969 9.90042L2.52897 7.09284L5.77854 10.9348L15.0273 0L17.527 2.95535L5.77854 16.6977Z"
            fill="white"
          />
        </svg>
        {item}
      </li>
    ));
    return renderList;
  };

  const featuresContent = data.map((content, i) => {
    const { title, subtitle, images, path, style } = content[i + 1];

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.boxShadow}>
          <Typography variant="h4" style={{ color: style }}>
            {title}
          </Typography>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={10}>
            <p className={classes.text}>{subtitle}</p>
          </Grid>
          <Grid item xs={10}>
            <Slideshow images={images} path={path} />
          </Grid>
          <Grid item xs={12}>
            {content["1"] ? (
              <Grid container style={{ marginTop: "3em" }}>
                <Grid item xs={6}>
                  <Card className={classes.card1}>
                    <CardContent>
                      <Typography
                        color="textSecondary"
                        className={classes.cardTitle}
                      >
                        {content[1].card1.title}
                      </Typography>
                      <ul className={`${classes.list} ${classes.checkmark}`}>
                        {list1()}
                      </ul>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card className={classes.card2}>
                    <CardContent>
                      <Typography
                        color="textSecondary"
                        className={classes.cardTitle}
                      >
                        {content[1].card2.title}
                      </Typography>
                      <ul className={`${classes.list} ${classes.checkmark}`}>
                        {list2()}
                      </ul>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            ) : null}
            {!content["1"] ? (
              <Grid container style={{ marginTop: "3em" }}>
                <Grid item xs={12}>
                  <Card
                    className={classes.card3}
                    style={{ backgroundColor: style }}
                  >
                    <CardContent>
                      <ul className={`${classes.list2} ${classes.checkmark}`}>
                        {list3(content, i)}
                      </ul>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    );
  });

  return <>{featuresContent}</>;
};

export default FeaturesMobileContent;
