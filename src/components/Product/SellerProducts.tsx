import React from 'react';
import { IProduct } from '../../Interfaces/ProductsInterfaces';
import Icon from '../common/Icon';
import { faShoppingCart, faEye  ,faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const styles = {
    image: {
        width: "100%",
    }
}

interface ISellerProductProps {
    product: IProduct,
    addToCart: (id: number) => void
}

const RelatedProduct = (props: ISellerProductProps) => {
    const {product} = props;    
    return(
        <div>
            <img src={product.imagen} alt={product.titulo} style={styles.image}/>
            <h5>
                {product.titulo}
            </h5>
            <Link className="btn btn-success btn-sm float-left" to={`/products/details/${product.identificador}`}><Icon icon={faEye} /> Ver</Link>
            <button className="btn btn-primary btn-sm  float-right">
                Agregar <Icon icon={faShoppingCart} /> 
            </button>
        </div>
        

    );
}

export default RelatedProduct;