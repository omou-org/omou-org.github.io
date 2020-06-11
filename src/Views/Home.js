import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import studentImage from "./student.png";
import bookImage from "./book.png";
import loginImage from "./login.png"




import "./Home.scss";
import Box from '@material-ui/core/Box';

import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        padding: "20vh"
    }
})

export default function Home() {
    const classes = useStyles()
    return (

        <div>
            <div className='background-image'>
                <Grid container className={classes.root}>
                    <Grid item xs={12} >
                        <Typography variant="h3" className="upper" >
                            Don’t just digitize the way your tutoring center runs - <span className="transform-colors">transform</span>  it.
				</Typography>
                        <Typography variant="h6" className="bottom" >
                            Omou is a tutoring management service designed for remote-learning.
				</Typography>
                    </Grid>
                </Grid>
            </div>

            <Grid container className="mid">
                <Grid item md={4}>
                    <Box
                        className="imageContainer"
                    >
                        <img
                            className="scheduleImage"
                            src={bookImage} />
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
                            src={loginImage} />
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