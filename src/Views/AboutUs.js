import React, { useState, useMe } from "react";
import { Container, Grid, Paper, Typography, GridList } from '@material-ui/core'
import { Users } from "./Users/Users"
import UserCards from "./Users/UserCards"



const AboutUs = () => {


	return (
		<>
			<div style={{ backgroundColor: "#43B5DA", color: "white" }}>
				<Container container maxWidth="lg" className="about-us-description" >
					<Grid container>
						<Grid item xs={8} >
							<Typography variant="h3" align="left"> About Us</Typography>
							<Typography variant="body1" align="left">
								We’re Omou. We’re born out of a desire to create digital spaces for tutoring
								centers to grow and better connect their community of learners, parents, and teachers.
								We were founded by former tutors and students who recognize vast accessibility of content and connectivity
						opportunities enhancing the learning and teaching experiences.</Typography>
							<br />
							<Typography variant="body1" align="left">
								While not a direct replacement for physical classrooms, we at Omou believe digital
								learning spaces empower tutoring centers to extend and enhance their relationships online.
								 A digital learning space offers tutoring centers to grow their community of students, parents, and teachers at minimal to no additional cost.
						</Typography>
							<br />
							<Typography variant="body1" align="left">
								We at Omou want to remove all physical barriers that prevent students, parents, and teachers from connecting with a tutoring center’s community.
							In the end, all that separates you and your tutoring community is just 1 click away.
						</Typography>

						</Grid>
						<Grid item={4}>Picture</Grid>
					</Grid>
				</Container>
			</div>
			<Container maxWidth="xl">
				<Typography variant="h3" alight="center">Meet The Team</Typography>
				<Container>
					<Grid
						container
						spacing={2}
						direction="row"
						justify="center"
						alignItems="flex-start"
					>
						{Users.map((user) => {
							return (
								<UserCards user={user} />)
						})}

					</Grid>
				</Container>
			</Container>


		</>
	)
}

export default AboutUs