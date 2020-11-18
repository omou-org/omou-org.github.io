import React from "react";
import {
	Switch,
	Route
} from "react-router-dom";

import Home from "./components/homepage/Home"
import AboutUs from "./components/homepage/AboutUs"





export function Routes() {
	return (

			<Switch>
			<Route exact path="/" component={Home}/>
			
			<Route exact path="/about-us" component={AboutUs}/>
			</Switch>

	)
}