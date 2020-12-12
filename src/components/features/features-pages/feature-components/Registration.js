import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import sampleImg1 from '../../images/Parents_Reg_1.0.0.png';
import sampleImg2 from '../../images/Parents_Reg_1.1.1.png';
import { primaryColor } from '../../../../theme/colors';

import featuresPageTheme from '../../../../theme/theme';
const { textStyle, imgStyle, headerStyle, listStyle } = featuresPageTheme;

const useStyles = makeStyles({
	headers: {
		...headerStyle
	},
	regText: {
		...textStyle
	},
	sampleImg: {
		...imgStyle
	},
	featureList: {
		...listStyle,
	},
});

// first image is going to be some type of carousel?

const Registration = () => {
	const classes = useStyles();
	return (
		<div style={{marginLeft: '50px'}}>
			<Typography style={{ marginBottom: '20px', marginTop: '25px' }} className={classes.headers}>
				standardized registration & payments
			</Typography>
			<Typography pargraph className={classes.regText}>
				Omou provides an easy way for admins to browse all available tutoring
				courses with detailed descriptions and register students quickly.
			</Typography>

			<div style={{marginBottom: '20px'}}>
				<img
					className={classes.sampleImg}
					src={sampleImg1}
					alt='overview img'
				></img>
			</div>
			<Typography style={{ color: primaryColor }} className={classes.headers}>
				tutoring course information all on one surface
			</Typography>

			<ul
				style={{ listStyleType: 'none', padding: 0 }}
				className={classes.featureList}
			>
				<li>Course enrollment status</li>
				<li>Time and date of the courses</li>
				<li>Course Teacher</li>
				<li>Total cost</li>
			</ul>

			<Typography style={{ color: primaryColor }} className={classes.headers}>
				find courses quickly for easy registration
			</Typography>

            <ul
				style={{ listStyleType: 'none', padding: 0 }}
				className={classes.featureList}
			>
				<li>Filter classes by instructor(s), academic grade level(s)</li>
				<li>Register by tutoring student</li>
				<li>Register by parent</li>
			</ul>
			<div>
				<img
					style={{ marginTop: '20px' }}
					className={classes.sampleImg}
					src={sampleImg2}
					alt='registration img'
				></img>
			</div>
		</div>
	);
};

export default Registration;
