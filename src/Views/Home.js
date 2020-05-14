import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import paymentImage from "./payment.png";
import scheduleImage from "./schedule.png"
import "./Home.scss";
import Box from '@material-ui/core/Box';
import { display } from '@material-ui/system';
import Hidden from '@material-ui/core/Hidden';

export default function Home() {
	return (<div>
		<Grid container className="top">
			<Grid item md={6} className="topContent">
				<Typography variant="h1" className="upper">
					Don’t just digitize the way your tutoring center runs - transform it.
				</Typography>
				<Typography variant="h6" className="bottom">
					Omou is a tutoring management service designed for remote-learning.
				</Typography>
			</Grid>
			<Grid item md={6}>
			</Grid>
		</Grid>
		<Grid container className="mid">
			<Grid item md={6} >
				<Box 
					boxShadow={4} 
					className="imageContainer" 
					display={{ xs: 'none', sm: 'none', md: 'block' }} >
					<img 
						Component={Hidden} 
						lgDown 
						className="paymentImage" 
						src={paymentImage}/>
				</Box>
			</Grid>
			<Grid item md={6} className="midContent">
				<Typography className="upper" variant="h4">
					Modernize Administrative Processes
			</Typography>
				<Typography className="bottom" variant="h6">
					Ditch the traditional ways of scheduling tutoring classes over the phone or processing payments with cash or check. Omou will help alleviate time-consuming administrative tasks and reduce human errors by providing our customers with a simple interface for the single source of truth.
			</Typography>
			</Grid>
		</Grid>
		<Grid container className="bot">
			<Grid item md={6} 
				className="botContent">
				<Typography className="upper" variant="h4">
					Elevate Communication with Parents
				</Typography>
				<Typography className="bottom" variant="h6">
					Miscommunication between parents and tutoring centers are often caused by disparate systems with conflicting information. Omou provides a digital central hub for parents, students, and staff alike to access personal information such as automated student progress reports, class schedules, and payment confirmations.
				</Typography>
			</Grid>
			<Grid item md={6}>
				<Box 
					boxShadow={4} 
					className="imageContainer" 
					display={{ xs: 'none', sm: 'none', md: 'block' }} >
					<img className="scheduleImage" src={scheduleImage}/>
				</Box>
			</Grid>
		</Grid>
		<Grid container className="bot2">
			<Grid item md={6}>
				<Box 
					boxShadow={4} 
					className="imageContainer" 
					Component={Hidden} 
					display={{ xs: 'none', sm: 'none', md: 'block' }} 
					xsDown>
					<img 
						className="scheduleImage" 
						src={scheduleImage}/>
				</Box>
			</Grid>
			<Grid 
				item 
				md={6} 
				className="bot2Content"
			>
				<Typography 
					className="upper" 
					variant="h4">
					Set Up Students For Online Success
				</Typography>
				<Typography className="bottom" 
							variant="h6">
					Remote learning is the future. Remove the friction of setting up and configuring tools for online tutoring. With the ability to create on-demand tutorials and recommended student activities built into Omou, online tutoring is now seamless and accessible for everyone involved.
				</Typography>
			</Grid>

		</Grid>
	</div>)
}