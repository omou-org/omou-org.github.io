import React from 'react'
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
        lineHeight: '35.95px',
        marginTop: '1rem'
    },
});

const FormSubmitted = () => {
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
				<Typography className={classes.headingLarge}>FORM SUBMITTED!</Typography>
				<Typography className={classes.headingSub}>
                    Please schedule a session with us below. We look forward to speaking with you!
				</Typography>
			</Grid>
		</Grid>
    )
}

export default FormSubmitted
