import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/homepage/Home';
import Contact from './components/contact/ContactOmou';

export function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact-us" component={Contact} />
        </Switch>
    );
}
