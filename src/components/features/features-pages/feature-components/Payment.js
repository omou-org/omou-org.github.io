import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from '../../../../theme/colors';
import paymentImg from '../../images/Payments_1.png';

const useStyles = makeStyles({
	headers: {
		fontFamily: 'Montserrat',
		fontWeight: '700',
		fontSize: '28px',
		lineHeight: '33.42px',
		letterSpacing: '0.03em',
		fontVariant: 'all-small-caps',
	},
	paymentText: {
		fontFamily: 'Montserrat',
		fontWeight: '300',
		fontSize: '23px',
		lineHeight: '35.95px',
		letterSpacing: '0.03em',
	},
	paymentImg: {
		width: '913px',
		height: '525px',
	},
	featureList: {
		fontFamily: 'Montserrat',
		fontWeight: '500',
		fontSize: '23px',
		lineHeight: '33.42px',
		letterSpacing: '0.03em',
	},
});

const Payment = () => {
	const classes = useStyles();

	return (
		<div>
			<Typography
				style={{ marginBottom: '20px', marginTop: '25px' }}
				className={classes.headers}
			>
				control payments and tuition
			</Typography>
			<Typography paragraph className={classes.paymentText}>
				Never worry about mix-ups with payment confirmation! Omou can be your
				single source of truth with automated invoice tracking and much more.{' '}
			</Typography>

			<div>
				<img
					style={{ marginTop: '20px', marginBottom: '20px' }}
					className={classes.paymentImg}
					src={paymentImg}
					alt='payment img'
				></img>
			</div>

			<Typography
				style={{ color: primaryColor, marginBottom: '20px' }}
				className={classes.headers}
			>
				payment & tuition
			</Typography>

			<ul
				style={{ listStyleType: 'none', padding: 0 }}
				className={classes.featureList}
			>
				<li>Create Tuition Rules and Discounts</li>
				<li>View Payments by Enrollment </li>
				<li>View Updated Payment Status of a Tutoring Session</li>
				<li>Print Invoices</li>
			</ul>
		</div>
	);
};

export default Payment;
