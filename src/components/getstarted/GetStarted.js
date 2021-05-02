import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, TextField, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from '../../theme/colors';
import { useMutation, gql } from '@apollo/client';

const CREATE_OWNER_AND_BUSINESS = gql`
	mutation MyMutation(
		$ownerFirstName: String
		$ownerLastName: String
		$ownerEmail: String
		$businessName: String
		$businessPhone: String
		$businessEmail: String
		$businessAddress: String
	) {
		createOwnerAndBusiness(
			business: {
				name: $businessName
				phoneNumber: $businessPhone
				email: $businessEmail
				address: $businessAddress
				availabilities: {
					dayOfWeek: MONDAY
					endTime: "9:00"
					startTime: "12:00"
				}
			}
			owner: {
				user: {
					email: $ownerEmail
					firstName: $ownerFirstName
					lastName: $ownerLastName
					password: "password"
				}
			}
		) {
			created
		}
	}
`;

const useStyles = makeStyles({
	getStartedForm: {
		width: '50%',
		marginTop: '2rem',
	},
	headingLarge: {
		fontFamily: 'Montserrat',
		fontWeight: 400,
		fontSize: '72px',
		lineHeight: '108.83px',
	},
	headingSub: {
		fontFamily: 'Montserrat',
		fontWeight: 300,
		fontSize: '23px',
		lineHeight: '35.95px',
	},
	inputLabel: {
		paddingTop: '20px',
		fontSize: '0.8rem',
		fontWeight: '500',
	},
	input: {
		border: '1px solid #000000',
		borderRadius: '45px',
		width: '26.375rem',
		height: '1.5rem',
		filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
	},
	submitButton: {
		color: 'white',
		background: primaryColor,
		width: '26.375rem',
		border: `1px solid ${primaryColor}`,
		boxSizing: 'border-box',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		borderRadius: '20px',
		'&:hover': {
			backgroundColor: '#A0A0A0',
			color: '#FFF',
		},
	},
});

const GetStarted = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		businessName: '',
		businessPhone: '',
		businessEmail: '',
		businessAddress: '',
	});
	const history = useHistory();
	const [submitData] = useMutation(CREATE_OWNER_AND_BUSINESS, {
		onCompleted: () => {
			history.push('/get-started-submitted');
		},
	});
	const classes = useStyles();
	

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const onSubmit = () => {
		submitData({
			variables: {
				ownerFirstName: formData.firstName,
				ownerLastName: formData.lastName,
				ownerEmail: formData.email,
				businessName: formData.businessName,
				businessPhone: formData.businessPhone,
				businessEmail: formData.businessEmail,
				businessAddress: formData.businessAddress,
			},
		});
	};

	return (
		<Grid
			container
			direction='column'
			alignItems='center'
			style={{ minHeight: '100vh' }}
		>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				xs={12}
				style={{ marginTop: '7rem' }}
			>
				<Typography className={classes.headingLarge}>GET STARTED</Typography>
				<Typography
					className={classes.headingSub}
					style={{ marginTop: '1rem' }}
				>
					Please fill out the form below to connect to a member from our team.
				</Typography>
			</Grid>

			<form className={classes.getStartedForm}>
				<Grid
					container
					direction='column'
					alignItems='center'
					alignContent='center'
					justify='center'
				>
					<Grid item xs={12}>
						<Grid item xs={12}>
							<Typography className={classes.inputLabel}>
								BUSINESS OWNER FIRST NAME
							</Typography>
						</Grid>
						<TextField
							required
							variant='outlined'
							value={formData.firstName}
							onChange={handleOnChange}
							fullWidth
							id='standard-required'
							name='firstName'
							InputProps={{
								classes: {
									root: classes.input,
								},
							}}
						/>

						<Grid item xs={12}>
							<Typography className={classes.inputLabel}>
								BUSINESS OWNER LAST NAME
							</Typography>
						</Grid>
						<TextField
							required
							variant='outlined'
							value={formData.lastName}
							onChange={handleOnChange}
							name='lastName'
							fullWidth
							id='standard-required'
							InputProps={{
								classes: {
									root: classes.input,
								},
							}}
						/>

						<Grid item xs={12}>
							<Typography className={classes.inputLabel}>
								BUSINESS OWNER EMAIL
							</Typography>
						</Grid>
						<TextField
							required
							variant='outlined'
							value={formData.email}
							onChange={handleOnChange}
							name='email'
							fullWidth
							id='standard-required'
							InputProps={{
								classes: {
									root: classes.input,
								},
							}}
						/>

						<Grid item xs={12}>
							<Typography className={classes.inputLabel}>
								BUSINESS NAME
							</Typography>
						</Grid>
						<TextField
							required
							variant='outlined'
							value={formData.businessName}
							onChange={handleOnChange}
							fullWidth
							name='businessName'
							id='standard-required'
							InputProps={{
								classes: {
									root: classes.input,
								},
							}}
						/>

						<Grid item xs={12}>
							<Typography className={classes.inputLabel}>
								BUSINESS PHONE
							</Typography>
						</Grid>
						<TextField
							required
							variant='outlined'
							value={formData.businessPhone}
							onChange={handleOnChange}
							fullWidth
							name='businessPhone'
							id='standard-required'
							InputProps={{
								classes: {
									root: classes.input,
								},
							}}
						/>

						<Grid item xs={12}>
							<Typography className={classes.inputLabel}>
								BUSINESS EMAIL
							</Typography>
						</Grid>
						<TextField
							required
							variant='outlined'
							value={formData.businessEmail}
							onChange={handleOnChange}
							fullWidth
							id='standard-required'
							name='businessEmail'
							InputProps={{
								classes: {
									root: classes.input,
								},
							}}
						/>

						<Grid item xs={12}>
							<Typography className={classes.inputLabel}>
								BUSINESS ADDRESS
							</Typography>
						</Grid>
						<TextField
							required
							variant='outlined'
							value={formData.businessAddress}
							onChange={handleOnChange}
							fullWidth
							id='standard-required'
							name='businessAddress'
							InputProps={{
								classes: {
									root: classes.input,
								},
							}}
						/>
					</Grid>
					<Grid
						style={{ marginTop: '3rem', marginBottom: '7rem' }}
						item
						xs={12}
					>
						<Button className={classes.submitButton} onClick={onSubmit}>
							SUBMIT & SCHEDULE A SESSION
						</Button>
					</Grid>
				</Grid>
			</form>
		</Grid>
	);
};

export default GetStarted;
