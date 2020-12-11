import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from '../../../../theme/colors';
import accountsImg1 from '../../images/1.Dahl_Receptionist_Accounts_Student_CurrentCourses.png'
import accountsImg2 from '../../images/2.Dahl_Receptionist_Accounts_ResetPassword.png'

import featuresPageTheme from '../../../../theme/theme';
const { textStyle, imgStyle, headerStyle, listStyle } = featuresPageTheme;

const useStyles = makeStyles({
	headers: {
		...headerStyle
	},
	accountsText: {
		...textStyle
	},
	accountsImg: {
		...imgStyle
	},
	featureList: {
		...listStyle
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
