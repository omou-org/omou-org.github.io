import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import adminImage from "./admin-tuition-rules.png"
import parentImage from "./register-by-parent.png"
import studentImage from "./enrollment-view.png"

import "./Home.scss";
import Box from '@material-ui/core/Box';

import Container from "@material-ui/core/Container"


export default function Home() {
    return (

        <div>
            <Container maxWidth="lg" style={{ marginTop: "20vh", marginBottom: "20vh" }}>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography variant="h3" className="upper" align="left">
                            Don’t just digitize the way your tutoring center runs - <span className="transform-colors">transform</span>  it.
				</Typography>
                        <Typography variant="h6" className="bottom" align="left">
                            Omou is a tutoring management service designed for remote-learning.
				</Typography>
                    </Grid>
                </Grid>
            </Container>

            <Grid container className="mid">
                <Grid item md={4}>
                    <Box
                        className="imageContainer"
                    >
                        <img
                            className="scheduleImage"
                            src={adminImage} />
                    </Box>

                    <Typography className="title1">
                        Modernize Administrative Processes
				</Typography>
                    <Typography className="content1">
                        Ditch the traditional ways of scheduling tutoring classes over the phone or processing payments with cash or check. Omou will help alleviate time-consuming administrative tasks and reduce human errors by providing our customers with a simple interface for the single source of truth.
				</Typography>
                </Grid>
                <Grid item md={4}>
                    <Box
                        className="imageContainer"

                    >
                        <img
                            className="scheduleImage"
                            src={parentImage} />
                    </Box>
                    <Typography className="title1">
                        Elevate Communication with Parents
				</Typography>
                    <Typography className="content1">
                        Miscommunication between parents and tutoring centers are often caused by disparate systems with conflicting information. Omou provides a digital central hub for parents, students, and staff alike to access personal information such as automated student progress reports, class schedules, and payment confirmations.(Comming Soon)
				</Typography>
                </Grid>
                <Grid item md={4}>
                    <Box
                        className="imageContainer"
                    >
                        <img
                            className="scheduleImage"
                            src={studentImage} />
                    </Box>
                    <Typography className="title1">
                        Set Up Students For Online Success
				</Typography>
                    <Typography className="content1">
                        Remote learning is the future. Remove the friction of setting up and configuring tools for online tutoring. With the ability to create on-demand tutorials and recommended student activities built into Omou, online tutoring is now seamless and accessible for everyone involved.
                        (Comming Soon)
				</Typography>
                </Grid>



            </Grid>

        </div>)
}