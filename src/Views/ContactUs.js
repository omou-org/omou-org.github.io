import React, { useState } from "react";
import emailjs from "emailjs-com";
import { makeStyles } from '@material-ui/core/styles';
import {
	TextField,
	Button,
	Typography,
	Grid,
	Container,
	Box,
	Card,
	CardContent,
	CardActions
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { flexbox } from "@material-ui/system";
import Waves from "../components/Waves/Waves"
import { useLocation } from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia';
import checkmark from './checkmark.png';



const useStyles = makeStyles({
	root: {
		marginTop: "5em",
		backgroundColor: "#FFFFFF",
		boxShadow: "2px 5px 6px rgba(0, 0, 0, 0.25)",
		marginBottom: "8em",
		padding: "2em",
	},
	textBox: {
		backgroundColor: "#FFFFFF"
	},
	sendButton: {
		margin: "0 auto"

	},

	header: {
		color: "#43B5D9",
		paddingTop: "1.5em"	
}
})

export default function ContactUs() {
	const [fromName, setFromName] = useState("");
	const [messageHTML, setMessage] = useState("");
	const [replyTo, setReplyTo] = useState("");
	const [messageSent, setMessageSent ] = useState(false)

	const location = useLocation();
	const classes = useStyles();
	/***
	 * Contact Fields
	 * from_name: name of customer sending the inquiry
	 * message_html: body of message
	 * reply_to: email to reply to
	 * */

	function sendEmail(e) {
		e.preventDefault();

		emailjs.send(
			/*
			'gmail',
			'template_L8JA194M',
			{
				from_name: fromName,
				message_html: messageHTML,
				reply_to: replyTo,
			},
			'user_CddYW1ypBZ46FHYjjgeZG')
			.then((result) => {
				setMessageSent(true);
			}, (error) => {
				console.log(error.text);
			});
			*/
			setMessageSent(true)
		);
	};

	const handleNameChange = (e) => {
		setFromName(e.target.value);
	};
	const handleReplyToEmail = (e) => {
		setReplyTo(e.target.value);
	};
	const handleMessageBodyChange = (e) => {
		setMessage(e.target.value);
	};
	const handleMessageSent = (e) => {
		setMessageSent(e.target.value);
	};

	const fieldWidth = "100%";

	return (messageSent ?
		<>
		<Container maxWidth="md">
			<Typography
			style={{ marginBottom: "25px", marginTop: "40px" }}
			variant="h2" className={classes.header}>
			Contact Us
			</Typography>
			<Card variant="outlined" className={classes.root}>
				<img src={require("./checkmark.png")} width="5%" heigth = "5%"/>
				<Grid item>
				<Typography className={classes.title} color="black" gutterBottom>
					Thank you for contacting us!<br></br>
					We have received your message and will be <br></br>
					in touch shortly.
        		</Typography>
				</Grid>
				<Button variant="contained" color="primary" href="#contained-buttons">
					Go Back
				</Button>
			</Card>
		</Container>
			{location.pathname === "/contact-us" && <Waves />}
			</>
		:
		<>
		<Container maxWidth="md">
					<Typography
					style={{ marginBottom: "25px", marginTop: "40px" }}
					variant="h2" className={classes.header}>
					Contact Us
					</Typography>
			<Card variant="outlined" className={classes.root}>

				<form className="contact-form" onSubmit={sendEmail}>
					<CardContent>

						<Grid item>
							<TextField
								className={classes.textBox}
								id="Name"
								label="Name"
								variant="outlined"
								style={{ width: fieldWidth }}
								value={fromName}
								onChange={handleNameChange}
							/>
						</Grid>
						<br />
						<Grid item>
							<TextField
								className={classes.textBox}
								id="Email"
								label="Your Email"
								variant="outlined"
								required
								style={{ width: fieldWidth }}
								value={replyTo}
								onChange={handleReplyToEmail}
							/>
						</Grid>
						<br />
						<Grid item>
							<TextField
								className={classes.textBox}
								id="message-body"
								multiline
								label="Message"
								rows="8"
								variant="outlined"
								style={{ width: fieldWidth }}
								required
								value={messageHTML}
								onChange={handleMessageBodyChange}
							/>
						</Grid>
					</CardContent>
					<CardActions>

						<Button
							className={classes.sendButton}
							color="primary"
							variant="contained"
							onClick={sendEmail}
						>
							SEND
						</Button>
					</CardActions>
				</form>

			</Card>
		</Container>
			{location.pathname === "/contact-us" && <Waves />}
		</>
	)
}