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




export function Routes() {
	return (

		<ScrollToTop>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/meet-team" component={MeetTeam} />
				<Route path="/features" component={Features} />
				<Route path="/about-us" component={AboutUs} />
				<Route path="/contact-us" component={ContactUs} />

			</Switch>
		</ScrollToTop>
	)
}