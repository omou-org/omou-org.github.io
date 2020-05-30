import React from "react";
import {
	Switch,
	Route
} from "react-router-dom";
import Features from "./Views/Features";
import AboutUs from "./Views/AboutUs";
import ContactUs from "./Views/ContactUs";
import Home from "./Views/Home";
import MeetTeam from "./Views/MeetTeam";
import Home2 from "./Views/Home2"
export function Routes() {
	return (
		<Switch>
			<Route path="/home2" component={Home2} />
			<Route path="/meet-team" component={MeetTeam} />
			<Route path="/features" component={Features} />
			<Route path="/about-us" component={AboutUs} />
			<Route path="/contact-us" component={ContactUs} />
			<Route path="/" component={Home} />
		</Switch>
	)
}