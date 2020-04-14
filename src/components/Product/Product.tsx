import React from 'react';
import Icon from '../common/Icon';
import { IProduct } from '../../Interfaces/ProductsInterfaces';
import { faShoppingCart, faEye  ,faLock } from '@fortawesome/free-solid-svg-icons'


interface IProductProps {
    product: IProduct,
    viewDetails: any
}


const styles = {
    image: {
        borderBotttom: '1px solid #333',
    } as React.CSSProperties,
    viewMore: {
        borderRadius: '100px',
    }
};
/**
 * 
 * @param props dale XD
 */
const Product = (props: IProductProps) => {
    const { product, viewDetails } = props;
    
    return(
        <div className="card h-100 border border-info">
            <img className="card-img-top" style={styles.image} src={product.imagen} alt="" width="100%" height="240px"/>
            <div className="card-body">
                <h4 className="card-title">
                    <a href="/">{product.titulo}</a>
                </h4>
                <p className="card-text">
                    <span style={{'minHeight': '40px'}}>
                        {product.detalles.substr(0, 35)}
                    </span>
                    
                    <br/><br/>
                    
                    <span className="float-left">
                        <strong>Vistas:</strong> 500
                    </span>
                    <span className="float-right">
                        <strong>Ordenes:</strong> 300
                    </span>
                    <br/>
                    <br/>
                    { product.estado == 'disponible' ?  
                        <span className="badge badge-primary">
                            Disponibles: {product.disponibles}
                        </span>
                    :
                        <span className="badge badge-danger">
                            Agotado
                        </span>
                    }

                    <span className="float-right">
                        <strong> $ {product.precio}</strong> 
                    </span>
                    
                    
                </p>
            </div>
            <div className="card-footer">
                <button 
                    onClick={() => viewDetails(product.identificador) }
                    className="btn btn-success btn-sm float-left">
                    <Icon icon={faEye} /> Ver 
                </button>
                <button className="btn btn-primary btn-sm  float-right">
                    Agregar <Icon icon={faShoppingCart} /> 
                </button>
            </div>
        </div>
    )
}

export default Product;