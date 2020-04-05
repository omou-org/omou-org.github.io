import React from "react";
import {
	Switch,
	Route
} from "react-router-dom";
import Features from "./Views/Features";
import AboutUs from "./Views/AboutUs";
import ContactUs from "./Views/ContactUs";

export function Routes(){
	return (
		<Switch>
			<Route path="/features" component={Features}/>
			<Route path="/about-us" component={AboutUs}/>
			<Route path="/contact-us" component={ContactUs}/>
			<Route path="/"/>
		</Switch>
	)
}