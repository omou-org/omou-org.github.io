import React, {useState} from "react";
import emailjs from "emailjs-com";
import {
	TextField,
	Button,
	Typography,
	Grid,
	Container
} from "@material-ui/core";

export default function ContactUs() {
	const [fromName, setFromName] = useState("");
	const [messageHTML, setMessage] = useState("");
	const [replyTo, setReplyTo] = useState("");

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

	return (<Container maxWidth="md">
		<Typography
			style={{marginBottom:"25px"}}
			variant="h3"
		>
			Contact Us
		</Typography>
		<form className="contact-form" onSubmit={sendEmail}>
			<Grid
				direction="column"
				spacing={3}
				style={{height:"80vh"}}
				container
			>
				<Grid item>
					<TextField
						id="Name"
						label="Name"
						variant="outlined"
						style={{width:fieldWidth}}
						value={fromName}
						onChange={handleNameChange}
					/>
				</Grid>
				<Grid item>
					<TextField
						id="Email"
						label="Your Email"
						variant="outlined"
						required
						style={{width:fieldWidth}}
						value={replyTo}
						onChange={handleReplyToEmail}
					/>
				</Grid>
				<Grid item>
					<TextField
						id="message-body"
						multiline
						label="Message"
						rows="8"
						variant="outlined"
						style={{width:fieldWidth}}
						required
						value={messageHTML}
						onChange={handleMessageBodyChange}
					/>
				</Grid>

				<Grid
					item
					container
					justify="flex-end">
					<Grid item>
						<Button
							color="primary"
							variant="contained"
							onClick={sendEmail}
						>
							SEND
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</form>
		{/*<form className="contact-form" onSubmit={sendEmail}>*/}
		{/*	<input type="hidden" name="contact_number" />*/}
		{/*	<label>Name</label>*/}
		{/*	<input type="text" name="user_name" />*/}
		{/*	<label>Email</label>*/}
		{/*	<input type="email" name="user_email" />*/}
		{/*	<label>Message</label>*/}
		{/*	<textarea name="message" />*/}
		{/*	<input type="submit" value="Send" />*/}
		{/*</form>*/}
	</Container>)
}