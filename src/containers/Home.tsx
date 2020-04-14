import React, { useEffect } from 'react';
import { History } from 'history';
import { connect } from 'react-redux';
import { IState } from '../redux/ducks';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Slider from '../components/common/Slider';
import Product from '../components/Product/Product';
import Container from '../components/common/Container';
import * as ProductsDuck from '../redux/ducks/ProductsDuck';
import { IProducts, IPagination } from '../Interfaces/ProductsInterfaces';
import Preload from '../components/common/Preload';

interface IHomeProps {
 data: IProducts,
 loading: boolean,
 paginationProducts: IPagination,
 history: History
}

function Home(props: IHomeProps) {
    const { data, loading, history } = props;

    console.log(typeof data);
    const viewDetails = (id: number) => {
        history.push(`/products/details/${id}`);
    }
    

    return(
        <Container>
            
            <Slider />
            { loading ? <Preload /> :
            <div className="row">
                    {Object.keys(data).map(x => {
                        const product = data[x];
                        console.log(product);
                        return(
                            <div className="col-md-3 text-left mb-4" key={x}>
                                <Product product={product} viewDetails={viewDetails} />
                            </div>
                        )
                    })}
            </div> 
            }
        </Container>
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
//const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => 
    //bindActionCreators(ProductsDuck, dispatch);

export default connect(mapStateToProps, null)(Home);