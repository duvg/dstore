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
import { getAddProductThunk } from '../redux/ducks/CartDuck';
import { IProducts, IPagination, IProduct } from '../Interfaces/ProductsInterfaces';
import Preload from '../components/common/Preload';
import { RouteComponentProps } from 'react-router-dom';

interface IHomeProps {
 data: IProducts,
 loading: boolean,
 paginationProducts: IPagination,
 history: History
}

function Home(props: ReduxType & RouteComponentProps) {
    const { data, loading, history, addToCart  } = props;

    const addProductToCart = (product: IProduct) => {
        const cartProduct = {
            identificador: product.identificador,
            titulo: product.titulo,
            precio: product.precio,
        }
        addToCart(cartProduct);
    }
    
    return(
        <Container>
            
            <Slider />
            { loading ? <Preload /> :
            <div className="row">
                    {Object.keys(data).map(x => {
                        const product = data[x];
                        return(
                            <div className="col-md-3 text-left mb-4" key={x}>
                                <Product product={product} addProductToCart={addProductToCart} />
                            </div>
                        )
                    })}
            </div> 
            }
        </Container>
    );
}



type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
const mapStateToProps = (state: IState) => {
    
    const { products: { data, fetched, fetching, paginationProducts} } = state;
    const loading = fetching || !fetched;

    return {
        data,
        loading,
        paginationProducts
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    addToCart: (payload: any) => dispatch(getAddProductThunk(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);