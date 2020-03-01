import React from 'react';
import { Redirect, Router, Switch } from 'react-router-dom';
import Home from './containers/Home';

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    );
}