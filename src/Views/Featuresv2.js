import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FeaturesComponent from "../components/FeaturesComponent/FeaturesComponent";
import FeaturesCardV2 from "../components/FeaturesCardv2/FeaturesCardv2";
import data from "../assets/dummy-data/featuresData.json";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  jumbotron: {
    background: "linear-gradient(130deg,#43B5D9 65%, #28ABD5 60%)",
    height: "24.919em",
    paddingTop: "2%",
    paddingRight: "18%",
  },
  jumbotronTitle: {
    textAlign: "left",
    color: "#ffffff",
  },
  jumbotronText: {
    marginTop: "1.5em",
    textAlign: "left",
    fontSize: "1.1875rem",
    color: "#000000",
  },
  sturegTitle: {
    fontSize: "40px",
    fontWeight: "bolder",
  },
  alignTextLeft: {
    textAlign: "left",
  },
  root1: {
    width: "99%",
    backgroundColor: "#43B5D9",
    marginLeft: "-2em",
    borderRadius: "1em"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "1.5rem",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "900",
    lineHeight: "136.69%",
    color: "#FFFFFF",
  },
  pos: {
    marginBottom: 12,
  },
  cardMargin: {
    marginTop: "9.8125em",
    marginBottom: "7.3125em",
  },
  card1: {
    width: "96%",
    backgroundColor: "#43B5D9",
    marginLeft: "2.5em",
    borderRadius: "1em"
  },
  card2: {
    marginLeft: "2em",
    paddingBottom: "3.475em",
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
});

const Cards = (props) => {
  console.log(props);
  const classes = useStyles();
  return (
    <>
      {props.title2 ? (
        <Grid container justify="center">
          <Grid item xs={5}>
            <Card className={`${classes.root1}`} style={props.style}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {props.title1.title}
                </Typography>
                <ul className={classes.list1}>
                  <li>{props.title1.list1}</li>
                  <li>{props.title1.list2}</li>
                  <li>{props.title1.list3}</li>
                  <li>{props.title1.list4}</li>
                </ul>
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
                <ul className={classes.list1}>
                  <li>{props.title2.list1}</li>
                  <li>{props.title2.list2}</li>
                  <li>{props.title2.list3}</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Card className={classes.card1} style={props.style}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {props.title1.title}
              </Typography>
              <ul className={classes.list1}>
                <li>{props.title1.list1}</li>
                <li>{props.title1.list2}</li>
                <li>{props.title1.list3}</li>
                {props.title1.list4 ? <li>{props.title1.list4}</li> : null}
                {props.title1.list5 ? <li>{props.title1.list5}</li> : null}
              </ul>
            </CardContent>
          </Card>
        </Grid>
      )}
    </>
  );
};

const Featuresv2 = () => {
  const [features, setFeatures] = useState("1");
  const classes = useStyles();

  const handleClick = (id) => {
    console.log(`previous state: ${features}`);
    setFeatures(id);
  };

  // const featuresComponent = () => {
  //   data.map(comp => {
  //     switch (features) {
  //       case "standardized-registration":
  //         return (
  //           <FeaturesCardV2 data={comp.feature0} />
  //         );
  //       case "simple-scheduling":
  //         return <FeaturesCardV2 data={comp.feature1} />;
  //       case "control-payments":
  //         return <FeaturesCardV2 data={comp.feature2} />;
  //       case "centralized-user":
  //         return <FeaturesCardV2 data={comp.feature3} />;
  //       default:
  //         return null;
  //     }
  //   })
  // }

  // console.log (data[2].feature0)
  const { title, subtitle1, subtitle2 } = data[0].banner;

  return (
    <>
      <CssBaseline />
      <Paper elevation={3}>
        <div className={classes.jumbotron}>
          <Container maxWidth="lg" disableGutters>
            <Typography
              variant="h2"
              align="left"
              className={classes.jumbotronTitle}
            >
              {title}
            </Typography>
            <Grid container xs={12} md={6} lg={7}>
              <Typography
                variant="body1"
                align="left"
                className={classes.jumbotronText}
              >
                {subtitle1}
                <br />
                <br />
                {subtitle2}
              </Typography>
            </Grid>
          </Container>
        </div>
      </Paper>

      <Grid container>
        <Grid item xs={6} md={9} lg={9}>
          {features === "1" ? (
            <FeaturesCardV2 data={data[2].feature0} />
          ) : features === "2" ? (
            <FeaturesCardV2 data={data[3].feature1} />
          ) : features === "3" ? (
            <FeaturesCardV2 data={data[4].feature2} />
          ) : features === "4" ? (
            <FeaturesCardV2 data={data[5].feature3} />
          ) : (
            <FeaturesCardV2 data={data[2].feature0} />
          )}
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <FeaturesComponent click={handleClick} />
        </Grid>
      </Grid>

      <Grid container className={classes.cardMargin}>
        {features === "1" ? (
          <Cards
            title1={data[2].feature0.card1}
            title2={data[2].feature0.card2}
          />
        ) : features === "2" ? (
          <Cards title1={data[3].feature1.card1} style={{backgroundColor: "#599349"}}/>
        ) : features === "3" ? (
          <Cards title1={data[4].feature2.card1} style={{backgroundColor: "#F1974A"}}/>
        ) : features === "4" ? (
          <Cards title1={data[5].feature3.card1} title2="" style={{backgroundColor: "#CE6764"}}/>
        ) : (
          <Cards
            title1={data[2].feature0.card1}
            title2={data[2].feature0.card2}
          />
        )}
      </Grid>
    </>
  );
};

export default Featuresv2;
