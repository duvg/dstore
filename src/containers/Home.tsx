import React from 'react';


import * as ProductsDuck from '../redux/ducks/ProductsDuck';
import { ThunkDispatch } from 'redux-thunk';

interface IHomeProps {
 products: []
}

const Home = () => {
    return(
        <h2>Container home</h2>
    );
}

/*
const mapStateToProps = () {

}*/
export default Home;