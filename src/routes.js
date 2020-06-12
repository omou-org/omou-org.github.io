import React from "react";
import {
	Switch,
	Route
} from "react-router-dom";
import Features from "./Views/Features";
import Featuresv2 from "./Views/Featuresv2";
import AboutUs from "./Views/AboutUs";
import ContactUs from "./Views/ContactUs";
import Home from "./Views/Home";
import MeetTeam from "./Views/MeetTeam";

export function Routes() {
	return (
		<Switch>
			<Route path="/features" component={Features}/>
			<Route path="/about-us" component={AboutUs}/>
			<Route path="/contact-us" component={ContactUs}/>
			<Route path="/featuresv2" component={Featuresv2}/>
			<Route path="/" component={Home}/>
		</Switch>
	)
}