import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from '../../../../theme/colors';
import accountsImg1 from '../../images/1.Dahl_Receptionist_Accounts_Student_CurrentCourses.png'
import accountsImg2 from '../../images/2.Dahl_Receptionist_Accounts_ResetPassword.png'

const useStyles = makeStyles({
	headers: {
		fontFamily: 'Montserrat',
		fontWeight: '700',
		fontSize: '28px',
		lineHeight: '33.42px',
		letterSpacing: '0.03em',
		fontVariant: 'all-small-caps',
	},
	accountsText: {
		fontFamily: 'Montserrat',
		fontWeight: '300',
		fontSize: '23px',
		lineHeight: '35.95px',
		letterSpacing: '0.03em',
	},
	accountsImg: {
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

const Accounts = () => {
	const classes = useStyles();

	return (
		<div style={{marginLeft: '50px'}}>
			<Typography
				style={{ marginBottom: '20px', marginTop: '25px' }}
				className={classes.headers}
			>
				centralized user accounts
			</Typography>
			<Typography paragraph className={classes.accountsText}>
				Omou allows you to create user profiles for admins, students, and
				parents.
			</Typography>

            <div>
				<img
					style={{ marginTop: '20px', marginBottom: '20px' }}
					className={classes.accountsImg}
					src={accountsImg1}
					alt='accounts img'
				></img>
			</div>

            <Typography
				style={{ color: primaryColor, marginBottom: '20px' }}
				className={classes.headers}
			>
				personalized user accounts
			</Typography>

            <ul
				style={{ listStyleType: 'none', padding: 0 }}
				className={classes.featureList}
			>
				<li>View accounts by type</li>
				<li>Edit account information</li>
				<li>View accounts on mobile phone</li>
				<li>Students linked to a parent account and vice versa</li>
			</ul>

            <div>
				<img
					style={{ marginTop: '20px', marginBottom: '20px' }}
					className={classes.accountsImg}
					src={accountsImg2}
					alt='accounts img'
				></img>
			</div>
		</div>
	);
};

export default Accounts;
