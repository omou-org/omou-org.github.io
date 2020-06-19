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
import Waves from "../components/Waves/Waves"
import { useLocation } from "react-router-dom";


const useStyles = makeStyles({
	root: {
		marginTop: "100px",
		backgroundColor: "#F8F8F8",
		boxShadow: "2px 2px 1px rgba(0, 0, 0, 0.25)",
		marginBottom: "100px",
	},
	textBox: {
		backgroundColor: "#FFFFFF"
	},
	sendButton: {
		marginLeft: "8px"
	}
})

export default function ContactUs() {
	const [fromName, setFromName] = useState("");
	const [messageHTML, setMessage] = useState("");
	const [replyTo, setReplyTo] = useState("");

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
			'gmail',
			'template_L8JA194M',
			{
				from_name: fromName,
				message_html: messageHTML,
				reply_to: replyTo,
			},
			'user_CddYW1ypBZ46FHYjjgeZG');
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

	const fieldWidth = "100%";

	return (
		<>
		<Container maxWidth="md">

			<Card variant="outlined" className={classes.root}>
				<Typography
					style={{ marginBottom: "25px", marginTop: "40px" }}
					variant="h2"
				>
					Contact Us
					</Typography>

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