import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import sampleImg1 from '../../images/Parents_Reg_1.0.0.png';
import sampleImg2 from '../../images/Parents_Reg_1.1.1.png';

const useStyles = makeStyles({
	overviewText: {
		fontFamily: 'Montserrat',
		fontWeight: '300',
		fontSize: '23px',
		lineHeight: '35.95px',
		letterSpacing: '0.03em',
		marginTop: '25px',
	},
	sampleImg: {
		width: '913px',
		height: '525px',
	},
});

const Overview = () => {
	const classes = useStyles();
	return (
		<div style={{marginLeft: '50px'}}>
			<Typography className={classes.overviewText} align='left' paragraph>
				Whatever your needs are, Omou can help your tutoring center seamlessly
				make the transition to digital learning. Manage tutor schedule, billing
				invoices, and everything else that keeps you business running, all from
				our platform.
			</Typography>
			<Typography className={classes.overviewText} align='left' paragraph>
				Thinking of a feature that’s not listed? Contact us, since it’s likely
				on our roadmap.
			</Typography>

			<div >
				<img className={classes.sampleImg} src={sampleImg1} alt='overview img'></img>
			</div>
			<div >
				<img style={{marginTop: '20px'}} className={classes.sampleImg} src={sampleImg2} alt='overview img'></img>
			</div>
		</div>
	);
};

export default Overview;
