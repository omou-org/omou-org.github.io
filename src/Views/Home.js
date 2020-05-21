import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import paymentImage from "./payment.png";
import studentsImage from './omoukids.png'
import people from './people.jpg'
import "./Home.scss";
import Box from '@material-ui/core/Box';
import { display } from '@material-ui/system';
import Hidden from '@material-ui/core/Hidden';
import ContactUs from './ContactUs'
import { NavLink } from "react-router-dom";
import Slideshow from "../components/Slideshow/Slideshow"
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container"

export default function Home() {
	return (

		<div>
			<Container maxWidth="lg" style={{ marginTop: "30vh", marginBottom: "30vh" }}>
				<Grid container direction="row" justify="space-evenly" alignItems="center">
					<Grid item xs={6}>
						<Typography variant="h3" className="upper" align="left">
							Don’t just digitize the way your tutoring center runs - <span>transform</span>  it.
				</Typography>
						<Typography variant="h6" className="bottom" align="left">
							Omou is a tutoring management service designed for remote-learning.
				</Typography>

					</Grid>
					<Grid item xs={6}>
						<NavLink to="/contact-us" style={{ textDecoration: "none" }}>
							<Button
								variant="outlined"
								size="large"
								color="primary"
								style={{ color: "#43B5D9", marginTop: "150px", marginRight: "-75px" }}
							>
								Request Demo
       					 </Button>
						</NavLink>
					</Grid>
				</Grid>

			</Container>
			<Grid container className="mid">
				<Grid item md={5} className="imageContainer">
					<Slideshow images={[
						"0_scheduler_landing_month-new.png",
						"1-0_admin-discount.png",
						"1-1_admin-tuition-rules.png",
						"1-2_invoice-receipt.png",
						"2_enrollment-view.png",
						"3_enrollment-payment-hist.png",
						"4_parent-pay-hist.png",
					]} path={"assets/product-screenshots/control-payment-and-tuition/"} />
				</Grid>

				<Grid item md className="midContent">
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
						Miscommunication between parents and tutoring centers are often caused by disparate systems with conflicting information. Omou provides a digital central hub for parents, students, and staff alike to access personal information such as automated student progress reports, class schedules, and payment confirmations.(Comming Soon)
				</Typography>
				</Grid>
				<Grid item md={6}>
					<Box
						boxShadow={4}
						className="imageContainer"
						display={{ xs: 'none', sm: 'none', md: 'block' }} >
						<img className="scheduleImage" src={people} />
					</Box>
				</Grid>
			</Grid>
			<Grid container className="bot2">
				<Grid item md={6}>
					<Box

						className="imageContainer"
						Component={Hidden}
						display={{ xs: 'none', sm: 'none', md: 'block' }}
						xsDown>
						<img
							className="scheduleImage"
							src={studentsImage} />
					</Box>
				</Grid>
				<Grid
					item
					md={6}
					className="bot2Content">
					<Typography
						className="upper"
						variant="h4">
						Set Up Students For Online Success
				</Typography>
					<Typography className="bottom"
						variant="h6">
						Remote learning is the future. Remove the friction of setting up and configuring tools for online tutoring. With the ability to create on-demand tutorials and recommended student activities built into Omou, online tutoring is now seamless and accessible for everyone involved.
						(Comming Soon)
				</Typography>
				</Grid>
			</Grid>
			<Grid container>
				<ContactUs />
			</Grid>
		</div>)
}