import React from "react";
import {
	Switch,
	Route
} from "react-router-dom";
import Features from "./Views/Features";
import AboutUs from "./Views/AboutUs";
import ContactUs from "./Views/ContactUs";
import MeetTeam from "./Views/MeetTeam";
import Home from "./Views/Home"
import ScrollToTop from "./ScrollToTop"
import withTracker from './withTracker';




export function Routes() {
	return (

		<ScrollToTop>
			<Switch>
				<Route exact path="/" component={withTracker(Home)} />
				<Route path="/meet-team" component={withTracker(MeetTeam)} />
				<Route path="/features" component={withTracker(Features)} />
				<Route path="/about-us" component={withTracker(AboutUs)} />
				<Route path="/contact-us" component={withTracker(ContactUs)} />
			</Switch>
		</ScrollToTop>
	)
}