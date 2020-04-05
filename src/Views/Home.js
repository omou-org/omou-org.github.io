import React from "react";
import Grid from '@material-ui/core/Grid';
import "./Home.scss";

export default function Home() {
	return (<div>
		<Grid container className="top">
			<Grid item md={6} className="topContent">
				<div className="upper"> 
				Don’t just digitize the way your tutoring center runs - transform it.
				</div>
				<div className="bottom">
				Omou is a tutoring management service designed for remote-learning.
				</div>
			</Grid>
			<Grid item md={6}>
				INSERT IMAGE HERE
			</Grid>
		</Grid>
		<Grid container className="middle">
			<Grid item md={6} className="middleContent">
				Don’t just digitize the way your tutoring center runs - transform it.
			</Grid>
			<Grid item md={6}>
			</Grid>
		</Grid>
		<Grid>
			3
		</Grid>
	</div>)
}