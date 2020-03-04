import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductsDuck from '../redux/ducks/ProductsDuck';
import { ThunkDispatch } from 'redux-thunk';
import Product from '../components/Product/Product';
import { IState } from '../redux/ducks';
import { IProducts, IPagination, IProduct } from '../redux/ducks/ProductsDuck';

interface IHomeProps {
 data: IProducts,
 loading: boolean
}

const Home = (props: IHomeProps) => {
    console.log(props, "asdsad");
    const { data, loading } = props;

    return(
        <div>
            <h2>Container home</h2>
            {loading && <h1>Cargando</h1>}
            <div className="row">
                    {Object.keys(data).map(x => {
                        console.log(x);
                        const product = data[x];
                        return(
                            <div className="col-md-3 text-left mb-4" key={x}>
                                <div className="card h-100 border border-info">
                                    <a href="/"><img className="card-img-top" src={product.imagen} alt="" /></a>
                                    <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="/">{product.titulo}</a>
                                    </h4>
                                    <p className="card-text">
                                        <strong>Unidades</strong> : {product.disponibles} <br />
                                        <strong> Vendedor</strong>: {product.vendedor} <br />
                                        <strong>Estado:</strong> {product.estado}
                                    </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    

            </div>
            
        </div>
        
    );
}

const mapStateToProps = (state: IState) => {
    
    const { products: { data, fetched, fetching} } = state;
    const loading = fetching || !fetched;

    return {
        data,
        loading,
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => 
    bindActionCreators(ProductsDuck, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);