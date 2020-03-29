import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductsDuck from '../redux/ducks/ProductsDuck';
import { ThunkDispatch } from 'redux-thunk';
import Product from '../components/Product/Product';
import { IState } from '../redux/ducks';
import { IProducts, IPagination } from '../Interfaces/ProductsInterfaces';
import Slider from '../components/common/Slider';

interface IHomeProps {
 data: IProducts,
 loading: boolean,
 paginationProducts: IPagination
}

const Home = (props: IHomeProps) => {
    const { data, loading } = props;

    return(
        <div>
            
            {loading && <h1>Cargando</h1>}
            <Slider />
            <div className="row">
                    {Object.keys(data).map(x => {
                        const product = data[x];
                        return(
                            <div className="col-md-2 text-left mb-4" key={x}>
                                <Product product={product} />
                                
                            </div>
                        )
                    })}
            </div> 
        </div>
    );
}

const mapStateToProps = (state: IState) => {
    console.log(state);
    const { products: { data, fetched, fetching, paginationProducts} } = state;
    const loading = fetching || !fetched;

    return {
        data,
        loading,
        paginationProducts
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => 
    bindActionCreators(ProductsDuck, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);