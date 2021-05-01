import React from 'react';
import { Typography, TextField, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from '../../theme/colors';

const useStyles = makeStyles({
	getStartedForm: {
		width: '50%',
        marginTop: '2rem'
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
        lineHeight: '35.95px'
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
        boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        '&:hover': {
            backgroundColor: '#A0A0A0',
            color: '#FFF',
        },
    }
});

const inputLabels = [
	'BUSINESS OWNER NAME',
	'BUSINESS OWNER EMAIL',
	'BUSINESS NAME',
	'BUSINESS PHONE',
	'BUSINESS EMAIL',
	'BUSINESS ADDRESS',
];

const GetStarted = () => {
	const classes = useStyles();

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
				<Typography className={classes.headingSub} style={{ marginTop: '1rem' }}>
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
						{inputLabels.map((label) => {
							return (
								<>
									<Grid item xs={12}>
										<Typography className={classes.inputLabel}>
											{label}
										</Typography>
									</Grid>
									<TextField
										required
										variant='outlined'
										// value={}
										// onChange={}
										fullWidth
										id='standard-required'
										InputProps={{
											classes: {
												root: classes.input,
											},
										}}
									/>
								</>
							);
						})}
					</Grid>
                    <Grid style={{ marginTop: '5rem' }} item xs={12}>
                        <Button className={classes.submitButton} href="/get-started-submitted">
                            SUBMIT & SCHEDULE A SESSION
                        </Button>
                    </Grid>
				</Grid>
			</form>
		</Grid>
	);
};

export default GetStarted;
