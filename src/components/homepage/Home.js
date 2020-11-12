import React from "react";
import {Grid, Typography, Box} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import heroImage from "./homeimages/heroImage.svg"

const useStyles = makeStyles(theme => ({
    "homepageBanner": {
        "width": "100%",
        "textAlign": "center",
        "color": "black",
        "fontSize": "30px",
    },
    "homepageText": {
        marginLeft: "50%",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "0",
   
        }

        
    },
    "homepageSubText": {
        paddingTop: "2%",
        marginLeft: "50%",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "0",
        }
    }
}));


const Home =() => {
const classes = useStyles()
    return (
        <Grid
            container
            >
            <Grid 
            item 
            xs={12}
             container 
             justify="space-between"
             direction="row"
             alignItems="center"
             className={classes.homepageBanner} >
                <Grid item sm={8} lg={6}>
                    <Typography variant="h4" className={classes.homepageText}>
                        Don't just digitize the way your tutoring center runs - Transform it
                    </Typography>
                
                     <Typography className={classes.homepageSubText}> 
                    Omou is a tutoring management service designed for remote-learning.
                </Typography>
                </Grid>



                <Grid item  alignContent="right">
                    <Box display={{ xs: 'block', sm: 'none', md: 'block' }}>
                    <img src={heroImage} alt="hero"/>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home