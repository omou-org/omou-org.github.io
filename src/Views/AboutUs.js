import React from "react";
import { Container, Grid, Typography, Box } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';
import { lineHeight, fontWeight, letterSpacing } from "@material-ui/system";


const useStyles = makeStyles({
	meetTeamPicture: {
		height: "400px",
		width: "100%",
		objectFit: "cover"
	},
	boxSizing: {
		width: "100%"		
	},

	titleColor: {
		color: "#43B5D9",
		marginTop: "1em",
		marginBottom: "1em",
	},
	subtitleColor: {
		color: "#1F82A1",
		marginTop: "2.2em",
		marginBottom: "1em",
		fontWeight: "400",
		letterSpacing: "0.05em",
		fontSize: "1.9em"

	},
	headlineColor: {
		color: "#43B5D9",
		marginTop: "1em",
		marginBottom: "1em",
		letterSpacing: "0.06em",
		fontWeight: "450",
		fontSize: "2.55em"

	},
	aboutUs: {
		fontSize: "1.66em",
		lineHeight: "2.25em",
		fontWeight: "lighter",
		letterSpacing: "0.01em"
	},

	topContent: {
		fontSize: "1.35em",
		marginBottom: "2em",
		lineHeight: "1.9em",
		fontWeight: "lighter",
		letterSpacing: "0.021em"

	},
	bottomContent: {
		fontSize: "1.3em",
		marginBottom: "2em",
		lineHeight: "1.9em",
		fontWeight: "lighter",
		letterSpacing: "0.021em"

	},

	box: {
		paddingTop: "3em",
		paddingBottom: "4em",
		paddingLeft: "1em",
		paddingRight: "1em"
	}

});

const AboutUs = () => {
	const classes = useStyles();

	return (
		<>
			<Container>

				<Grid item xs={12}>
					<Typography variant="h2" className={classes.titleColor}>
						The Omou Story
                    </Typography>
				</Grid>

				<Grid item xs={12}>
					<Box component="div" className={classes.boxSizing}>
						<img className={classes.meetTeamPicture} alt="" src={require("./Users/pictures/omou.jpeg")} />
					</Box>
				</Grid>



				<Grid container spacing={5} className={classes.box}>
					<Grid item item xs={12} md={5}>
						<Typography variant="h4" align="left" className={classes.headlineColor}>
							ABOUT US
                    </Typography>
						<Typography align="left" className={classes.aboutUs}>
							We’re Omou. We’re born out of a desire to create digital spaces for tutoring 
							centers to grow and better connect their community of learners, parents, and teachers.
							We were founded by former tutors and students who recognize vast accessibility of content and connectivity
							opportunities enhancing the learning and teaching experiences.
							</Typography>

					</Grid>
					<Grid item xs={1}></Grid>
					<Grid item xs={12} md={6} >
						<Typography variant="h4" align="left" className={classes.subtitleColor}>
							WHY OMOU?
                    </Typography>
						<Typography align="left" className={classes.topContent}>
							While not a direct replacement for physical classrooms, we at Omou believe digital learning spaces empower tutoring centers to
							extend and enhance their relationships online. A digital learning space offers tutoring centers to grow their community of students,
							parents, and teachers at minimal to no additional cost.
							</Typography>

						<Grid item xs={12}  >
							<Typography variant="h4" align="left" className={classes.subtitleColor}>
								OUR MISSION
                    </Typography>
							<Typography align="left" className={classes.bottomContent} >
								We at Omou want to remove all physical barriers that prevent students, parents, and teachers
								from connecting with a tutoring center’s community. In the end, all that separates you and your
								tutoring community is just 1 click away.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Container>

		</>
	)
}

export default AboutUs

