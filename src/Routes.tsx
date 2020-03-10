import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
        </Switch>
    );
}

export default Routes;