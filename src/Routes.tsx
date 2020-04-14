import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Cart from './containers/cart/Cart';
import Home from './containers/Home';
import Login from './containers/auth/Login';
import Product from './containers/product/Product';
import Register from './containers/auth/Register';
import Preload from './components/common/Preload';


interface IRouteProps {
    auth?: boolean
}
function Routes(props: any) {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/products/details/:id' component={Product} />
        </Switch>
    );
}

export default Routes;