import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductsDuck from '../redux/ducks/ProductsDuck';
import { ThunkDispatch } from 'redux-thunk';

import { IState } from '../redux/ducks';

interface IHomeProps {
 products: []
}

const Home = () => {
    return(
        <h2>Container home</h2>
    );
}


const mapStateToProps = (state: IState) => {
    const { Products: { data, pagination, fetched, fetching} } = state;
    const loading = fetching || !fetched;

    return {
        data,
        pagination,
        loading,
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => 
    bindActionCreators(ProductsDuck, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);