import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/homepage/Home';
import MeetOmouContainer from './components/meetomou/MeetOmouContainer';

export function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/meet-team" component={MeetOmouContainer} />
        </Switch>
    );
}
