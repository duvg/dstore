import React from 'react';
import { IState } from '../../redux/ducks';
import Preload from '../../components/common/Preload';
import Product from '../../components/Product/Product';

import { ThunkDispatch } from 'redux-thunk';
import { getAddProductThunk } from '../../redux/ducks/CartDuck';
import { connect } from 'react-redux';
import { IProduct } from '../../Interfaces/ProductsInterfaces';
import { RouteComponentProps } from 'react-router-dom';

function CategoryProducts(props: ReduxType & RouteComponentProps<{category: string}>) {
    const { loading, products, addToCart, match } = props;
    let { category } = match.params;

    const addProductToCart = (product: IProduct) => {
        const cartProduct = {
            identificador: product.identificador,
            titulo: product.titulo,
            precio: product.precio,
        }
        addToCart(cartProduct);
    }


    return(
        <div>
            <h2 className="text-center mt-3 mb-3">Productos del la categoria {category} </h2>
            { loading ? <Preload /> :
            <div className="row">
                    {Object.keys(products).map(x => {
                        const product = products[x];
                        return(
                            <div className="col-md-3 text-left mb-4" key={x}>
                                <Product product={product} addProductToCart={addProductToCart} />
                            </div>
                        )
                    })}
            </div> 
            }
        </div>
        
        
    );
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
const mapStateToProps = (state: IState) => {
    const { categories: { products, fetching, fetched } } = state;
    const loading = fetching || !fetched;
    return {
        products,
        loading,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    addToCart: (payload: any) => dispatch(getAddProductThunk(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProducts);