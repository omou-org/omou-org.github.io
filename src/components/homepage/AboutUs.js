import React from "react";
import { Grid, Typography, Box } from "@material-ui/core"
import teamImage from "./homeimages/grouppicture.png"

import "./AboutUs.scss"

const AboutUs = () => {
    return (
        <div>
            <Grid
                direction="row"
                alignItems="center">
                {/* <Grid container justify="center">
                    <div className="header left" style={{ paddingRight: 10 }}>
                        ABOUT
                    </div>
                    <div className="header right" style={{ paddingLeft: 10 }}>
                        OMOU
                    </div>
                </Grid> */}
                <Grid style={{ textAlign: "center", fullWidth:true}}>
                    <Box display={{ xs: 'none', sm: 'block', md: 'block' }}>
                        <img src={teamImage} />
                    </Box>
                </Grid>
                <Grid className="bodyContainer">
                    {/* <Typography>
                    We’re Omou. We’re born out of a desire to create digital spaces for tutoring centers to grow and better connect their community of learners, parents, and teachers. We were founded by former tutors and students who recognize vast accessibility of content and connectivity opportunities enhancing the learning and teaching experiences.



WHY OMOU?
While not a direct replacement for physical classrooms, we at Omou believe digital learning spaces empower tutoring centers to extend and enhance their relationships online. A digital learning space offers tutoring centers to grow their community of students, parents, and teachers at minimal to no additional cost.



OUR MISSION
We at Omou want to remove all physical barriers that prevent students, parents, and teachers from connecting with a tutoring center’s community. In the end, all that separates you and your tutoring community is just 1 click away.
                    </Typography> */}
                    <div className="body">
                        We’re Omou. We’re born out of a desire to create digital spaces for tutoring centers to grow and better connect their community of learners, parents, and teachers. We were founded by former tutors and students who recognize vast accessibility of content and connectivity opportunities enhancing the learning and teaching experiences.
                    </div>
                    <div className="heading">
                        WHY OMOU?
                    </div>
                    <div className="body">
                        While not a direct replacement for physical classrooms, we at Omou believe digital learning spaces empower tutoring centers to extend and enhance their relationships online. A digital learning space offers tutoring centers to grow their community of students, parents, and teachers at minimal to no additional cost.
                    </div>
                    <div className="heading">
                        OUR MISSION
                    </div>
                    <div className="body">
                        We at Omou want to remove all physical barriers that prevent students, parents, and teachers from connecting with a tutoring center’s community. In the end, all that separates you and your tutoring community is just 1 click away.
                    </div>
                </Grid>
                <div className="quotebox">
                    <div className="quote">
                    “Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family.” 
                    </div>
                    <div className="author">
                    – Kofi Annan
                    </div>
                </div>
            </Grid>
        </div>
    )
}
export default AboutUs