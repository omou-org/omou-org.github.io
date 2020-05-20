import React from "react";
import { Container, Grid, Typography, Box } from '@material-ui/core'
import { Users } from "./Users/Users"
import { makeStyles } from '@material-ui/core/styles';
import UserCards from "./Users/UserCards"

const useStyles = makeStyles({
	roleTitle: {
		margin: "50px 0 50px 0",
		color: "#635b5c" //grey
	},
	meetTeam: {
		margin: "75px 0 50px 0",
	},
	aboutUsContainer: {
		padding: "7%",
	},
	aboutUs: {
		margin: "50px 0 50px 0",
	},
	meetTeamPicture: {
		width: "100%",
		height: "auto",
		marginTop: "20%"
	},

});

const AboutUs = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.aboutUsContainer} style={{ backgroundColor: "#43B5DA", color: "white" }}>
				<Container maxWidth="lg"  >
					<Grid container spacing={10}>
						<Grid item md={7}>
							<Typography className={classes.aboutUs} variant="h1" align="left"> About Us</Typography>
							<Typography variant="body1" align="left">
								We’re Omou. We’re born out of a desire to create digital spaces for tutoring
								centers to grow and better connect their community of learners, parents, and teachers.
								We were founded by former tutors and students who recognize vast accessibility of content and connectivity
								opportunities enhancing the learning and teaching experiences.
							</Typography>
							<br />
							<Typography variant="body1" align="left">
								While not a direct replacement for physical classrooms, we at Omou believe digital
								learning spaces empower tutoring centers to extend and enhance their relationships online.
								A digital learning space offers tutoring centers to grow their community of students, parents, and teachers at minimal to no additional cost.
							</Typography>
						</Grid>

						<Grid item xs>
							<Box component="div" >
								<img className={classes.meetTeamPicture} alt="" src={require("./Users/pictures/omou.jpeg")} />
							</Box>
						</Grid>
					</Grid>
				</Container>
			</div>

			<Container maxWidth="md">
				<Typography variant="h2" align="left" className={classes.meetTeam} >Meet The Team</Typography>

				<Grid
					container
					spacing={4}
					direction="row"
					alignItems="flex-start">
					{Users
						.filter((user) => user)
						.map((user) => <UserCards user={user} />)}

				</Grid>
			</Container>
		</>
	)
}

export default AboutUs