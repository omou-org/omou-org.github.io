import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/homepage/Home';
import AboutUs from './components/aboutus/AboutUs';
import MeetOmouContainer from './components/meetomou/MeetOmouContainer';
import BetaProgram from './components/betapage/BetaPage';
import Features from './components/features/Features';
import ContactOmou from './components/contact/ContactOmou';
import GetStarted from './components/getstarted/GetStarted'
import FormSubmitted from './components/getstarted/FormSubmitted'

export function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/meet-team" component={MeetOmouContainer} />
            <Route path="/early-access-program" component={BetaProgram} />
            <Route path="/contact-us" component={ContactOmou} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/accounts" component={Features} />
            <Route exact path="/registration" component={Features} />
            <Route exact path="/payments" component={Features} />
            <Route exact path="/get-started" component={GetStarted} />
            <Route exact path="/get-started-submitted" component={FormSubmitted} />
        </Switch>
    );
}
