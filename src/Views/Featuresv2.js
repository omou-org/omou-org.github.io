import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import FeaturesComponent from "../components/FeaturesComponent/FeaturesComponent";
import FeaturesContent from "../components/FeaturesContent/FeaturesContent";
import FeaturesList from "../components/FeaturesList/FeaturesList";
import data from "../assets/dummy-data/featuresData.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  jumbotron: {
    background: "linear-gradient(125deg, rgba(67, 181, 217, .9) 50%, rgba(40, 171, 213, 0.87282) 50%)",
    height: "24.919em",
    paddingTop: "2%",
    paddingRight: "18%",
  },
  jumbotronTitle: {
    textAlign: "left",
    color: "#ffffff",
    [theme.breakpoints.between(1024, 1400)]: {
      fontSize: "2.725rem !important",
      marginLeft: "1em"
    },
  },
  jumbotronText: {
    marginTop: "1.5em",
    textAlign: "left",
    fontSize: "1.2875rem",
    color: "#000000",
    [theme.breakpoints.between(1024, 1400)]: {
      fontSize: "1.125rem",
      marginLeft: "2.5em"
    },
  },
  sturegTitle: {
    fontSize: "40px",
    fontWeight: "bolder",
  },
  alignTextLeft: {
    textAlign: "left",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  cardMargin: {
    marginTop: "9.8125em",
    marginBottom: "7.3125em",
  },
  bannerWidth: {
    [theme.breakpoints.between(1793, 1863)]: {
      width: "calc(100vw + 1vw)"
    },
    [theme.breakpoints.between(1730, 1793)]: {
      width: "calc(100vw + 2vw)"
    },
    [theme.breakpoints.between(1673, 1730)]: {
      width: "calc(100vw + 3vw)"
    },
    [theme.breakpoints.between(1613, 1673)]: {
      width: "calc(100vw + 4vw)"
    },
    [theme.breakpoints.between(1558, 1613)]: {
      width: "calc(100vw + 5vw)"
    },
    [theme.breakpoints.between(1512, 1558)]: {
      width: "calc(100vw + 6vw)"
    },
    [theme.breakpoints.between(1458, 1512)]: {
      width: "calc(100vw + 7vw)"
    },
    [theme.breakpoints.between(1418, 1458)]: {
      width: "calc(100vw + 8vw)"
    },
    [theme.breakpoints.between(1376, 1418)]: {
      width: "calc(100vw + 9vw)"
    },
    [theme.breakpoints.between(1339, 1376)]: {
      width: "calc(100vw + 10vw)"
    },
    [theme.breakpoints.between(1300, 1339)]: {
      width: "calc(100vw + 11vw)"
    },
    [theme.breakpoints.between(1031, 1300)]: {
      width: "calc(100vw + 12vw)"
    },
    [theme.breakpoints.between(1024, 1031)]: {
      width: "calc(100vw + 13vw)"
    },
  }
}));

const Featuresv2 = () => {
  const [features, setFeatures] = useState("1");
  const classes = useStyles();
  const handleClick = (id) => {
    console.log(`previous state: ${features}`);
    console.log(id);
    setFeatures(id);
  };

  const renderContent = (content) => {
    if (content.features) {
      return content.features.map((feature) => {
        let keys = Object.keys(feature);
        if (features == keys) {
          return <FeaturesContent data={feature} keys={keys} />;
        }
      });
    }
  };

  const renderFeaturesList = (content, handleClick) => {
    return (
      <FeaturesComponent click={handleClick} featuresArr={content.features} />
    );
  };

  const renderCard = (content) => {
    if (content.features) {
      return content.features.map((feature) => {
        let keys = Object.keys(feature);
        if (features == keys) {
          // console.log(feature[keys].style)
          return feature[keys].card2 ? (
            <FeaturesList
              title1={feature[keys].card1}
              title2={feature[keys].card2}
            />
          ) : (
            <FeaturesList
              title1={feature[keys].card}
              style={feature[keys].style}
            />
          );
        }
      });
    }
  };

  const featuresPage = data.map((content) => {
    if (content.banner) {
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
                  {content.banner.title}
                </Typography>
                <Grid container >
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={7}>
                  <Typography
                    variant="body1"
                    align="left"
                    className={classes.jumbotronText}
                  >
                    {content.banner.subtitle1}
                    <br />
                    <br />
                    {content.banner.subtitle2}
                  </Typography>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </Paper>
        </>
      );
    }

    if (content.features) {
      return (
        <>
          <Grid container>
            <Grid item xs={6} sm={6} md={7} lg={8} xl={9}>
              {renderContent(content)}
            </Grid>
            <Grid item xs={6} sm={6} md={5} lg={4} xl={3}>
              {renderFeaturesList(content, handleClick)}
            </Grid>
          </Grid>
          {renderCard(content)}
        </>
      );
    }
  });
  return <>{featuresPage}</>;
};

export default Featuresv2;