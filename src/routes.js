import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/homepage/Home';
import AboutUs from './components/homepage/AboutUs';
import MeetOmouContainer from './components/meetomou/MeetOmouContainer';
import BetaProgram from './components/betapage/BetaPage';
import Features from './components/features/Features';

export function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/meet-team" component={MeetOmouContainer} />
            <Route path="/beta" component={BetaProgram} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/features" component={Features} />
        </Switch>
    );
}
