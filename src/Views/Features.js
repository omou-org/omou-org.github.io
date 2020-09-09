import React, { useState, useEffect } from "react";
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
import FeaturesMobileContent from "../components/FeaturesMobileContent/FeaturesMobileContent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  jumbotron: {
    background:
      "linear-gradient(125deg, rgba(67, 181, 217, .9) 50%, rgba(40, 171, 213, 0.87282) 50%)",
    height: "24.919em",
    paddingTop: "2%",
    paddingRight: "18%",
    [theme.breakpoints.between(663, 788)]: {
      height: "20.919em",
    },
    [theme.breakpoints.between(601, 663)]: {
      height: "22.919em",
    },
  },
  jumbotronTitle: {
    textAlign: "left",
    color: "#ffffff",
    marginLeft: "1em",
    [theme.breakpoints.between(969, 1508)]: {
      fontSize: "2.725rem",
      marginLeft: "1em",
    },
    [theme.breakpoints.between(788, 969)]: {
      fontSize: "2.125rem",
      marginLeft: "1.5em",
    },
    [theme.breakpoints.between(601, 788)]: {
      fontSize: "1.925rem",
      marginLeft: "1.4em",
    },
  },
  jumbotronText: {
    marginTop: "1.5em",
    textAlign: "left",
    fontSize: "1.2875rem",
    color: "#000000",
    marginLeft: "3.25em",
    [theme.breakpoints.between(969, 1508)]: {
      fontSize: "1.125rem",
      marginLeft: "2.5em",
    },
    [theme.breakpoints.between(788, 969)]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.between(601, 788)]: {
      fontSize: ".85rem",
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
  mobileJumbotronTitle: {
    color: "#FFFFFF",
    marginTop: ".5em",
  },
  root1: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      width: theme.spacing(70),
      height: theme.spacing(50),
      backgroundColor: "#43B5D9",
      borderRadius: 0,
      maxWidth: 600,
      width: "100%",
    },
  },
  mobileSubtitle1: {
    fontWeight: "bold",
    marginTop: ".5em",
  },
  mobileSubtitle2: {
    marginTop: "1.5em",
  },
}));

const Features = () => {
  const [features, setFeatures] = useState("1");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      const w =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      setWidth(w);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

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

  const renderMobileContent = (content) => {
    if (content.features) {
      return <FeaturesMobileContent data={content} />;
    }
  };

  const renderFeaturesComponent = (content, handleClick) => {
    return (
      <FeaturesComponent click={handleClick} featuresArr={content.features} />
    );
  };

  const renderCard = (content) => {
    if (content.features) {
      return content.features.map((feature) => {
        let keys = Object.keys(feature);
        if (features == keys) {
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
          <Paper elevation={3} style={{ marginTop: "4em" }}>
            <div className={classes.jumbotron}>
              <Container maxWidth="xl" disableGutters>
                <Typography
                  variant="h2"
                  align="left"
                  className={classes.jumbotronTitle}
                >
                  {content.banner.title}
                </Typography>
                <Grid container>
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
              {renderFeaturesComponent(content, handleClick)}
            </Grid>
          </Grid>
          {renderCard(content)}
        </>
      );
    }
  });

  const mobileFeatures = data.map((content) => {
    if (content.banner) {
      return (
        <>
          <div className={classes.root1}>
            <Paper elevation={3} style={{ marginTop: "4em" }}>
              <Container maxWidth="xl" disableGutters>
                <Typography
                  variant={width <= 360 ? "h4" : "h2"}
                  align="center"
                  className={classes.mobileJumbotronTitle}
                >
                  {content.banner.title}
                </Typography>
                <Grid container justify="center">
                  <Grid item xs={7}>
                    <Typography
                      variant="body2"
                      align="center"
                      className={classes.mobileSubtitle1}
                    >
                      {content.banner.subtitle1}
                    </Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography
                      variant="body2"
                      align="center"
                      className={classes.mobileSubtitle2}
                    >
                      {content.banner.subtitle2}
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Paper>
          </div>
        </>
      );
    }

    if (content.features) {
      return (
        <>
          <Grid container justify="center">
            <Grid item xs={12}>
              {renderMobileContent(content)}
            </Grid>
          </Grid>
        </>
      );
    }
  });

  return <>{width <= 600 ? mobileFeatures : featuresPage}</>;
};

export default Features;
