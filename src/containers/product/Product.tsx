import React, { useEffect } from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RouteComponentProps } from 'react-router-dom';
import ProductDetails from '../../components/Product/ProductDetails';
import SellerProducts from '../../components/Product/SellerProducts';
import { IState } from '../../redux/ducks/index';
import { IProducts, IProduct } from '../../Interfaces/ProductsInterfaces';
import Preload from '../../components/common/Preload';

// Ducks
import {getProductThunk } from '../../redux/ducks/ProductsDuck';
import { getSellerThunk } from '../../redux/ducks/SellerDuck';
import SellerDetails from '../../components/seller/SellerDetails';

function Product(props: ReduxType & RouteComponentProps<{id: string}>) {
    
    const { current, currentSeller, loading, getProduct, match } = props;
    const { id } = match.params;
    const { products } = currentSeller;
    console.log(currentSeller);
    

    useEffect(() => {
        getProduct(id);
    }, []);

    return(
        <div>
            {
                loading ? 
                    <Preload />
                :
                    <div className="row">
                        
                        <ProductDetails product={current}  />
                        <SellerDetails seller={currentSeller} />
                        
                        
                        <div className="row p-3">
                            <div className="col-md-12 text-center">
                                <h4>Mas productos de este vendedor</h4>
                                <hr/>
                            </div>
                            {products && Object.keys(products).map(x => {
                                const product = products[x];
                                console.log()
                                return(
                                    <div className="col-md-2" key={x}>
                                        <SellerProducts  product={product} />
                                    </div>
                                    
                                )    
                            })}
                            
                        </div>
                        
                    </div>
            }
            
        </div>
        
    );
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: IState) => {
    const { products: {current, fetched, fetching} } = state;
    const currentSeller = state.sellers.current;
    const loading = fetching || !fetched;
    return {
        current,
        loading,
        currentSeller,
    }
};
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    getProduct: (payload: string) => dispatch(getProductThunk(payload)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);