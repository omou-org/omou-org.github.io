import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/homepage/Home';
import MeetOmouContainer from './components/meetomou/MeetOmouContainer';
import BetaProgram from './components/betapage/BetaPage';

export function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/meet-team" component={MeetOmouContainer} />
            <Route path="/beta" component={BetaProgram} />
        </Switch>
    );
}
