import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from '../../../../theme/colors';
import schedImg1 from '../../images/Inst_Course Management_Landing.jpg';
import schedImg2 from '../../images/Page Base.png';

const useStyles = makeStyles({
	headers: {
		fontFamily: 'Montserrat',
		fontWeight: '700',
		fontSize: '28px',
		lineHeight: '33.42px',
		letterSpacing: '0.03em',
		fontVariant: 'all-small-caps',
	},
	schedText: {
		fontFamily: 'Montserrat',
		fontWeight: '300',
		fontSize: '23px',
		lineHeight: '35.95px',
		letterSpacing: '0.03em',
	},
	schedImg: {
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

const Scheduling = () => {
	const classes = useStyles();

	return (
		<div style={{marginLeft: '50px'}}>
			<Typography style={{ marginBottom: '20px', marginTop: '25px' }} className={classes.headers}>
				simple scheduling
			</Typography>
			<Typography paragraph className={classes.schedText}>
				Scheduling personal tutoring classes with specific tutors can be tricky.
				Omou lets you quickly see which tutors are available at what time.
			</Typography>
            <div>
				<img
					style={{ marginTop: '20px', marginBottom: '20px' }}
					className={classes.schedImg}
					src={schedImg1}
					alt='scheduling img'
				></img>
			</div>

            <Typography style={{ color: primaryColor }} className={classes.headers}>
				simple scheduling
			</Typography>

            <ul
				style={{ listStyleType: 'none', padding: 0 }}
				className={classes.featureList}
			>
				<li>Filter by the instructor course</li>
				<li>Session color-coding by an instructor</li>
				<li>View previous and future schedules</li>
			</ul>

            <div>
				<img
					style={{ marginTop: '20px', marginBottom: '20px' }}
					className={classes.schedImg}
					src={schedImg2}
					alt='scheduling img'
				></img>
			</div>

            <div>
				<img
					style={{ marginTop: '20px', marginBottom: '20px' }}
					className={classes.schedImg}
					src={schedImg2}
					alt='scheduling img'
				></img>
			</div>

		</div>
	);
};

export default Scheduling;
