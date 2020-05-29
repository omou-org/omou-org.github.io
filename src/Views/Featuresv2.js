import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import FeaturesComponent from "../components/FeaturesComponent/FeaturesComponent";
import FeaturesCardV2 from "../components/FeaturesCardv2/FeaturesCardv2";
import FeaturesList from "../components/FeaturesList/FeaturesList";
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
});

const Featuresv2 = () => {
  const [features, setFeatures] = useState("1");
  const classes = useStyles();
  const handleClick = (id) => {
    console.log(`previous state: ${features}`);
    setFeatures(id);
  };

  const renderContent = (content) => {
    if (content.features) {
      return content.features.map((feature) => {
        let keys = Object.keys(feature);
        if (features == keys) {
          return <FeaturesCardV2 data={feature} keys={keys} />;
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
                <Grid container xs={12} md={6} lg={7}>
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
            <Grid item xs={6} md={9} lg={9}>
              {renderContent(content)}
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
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