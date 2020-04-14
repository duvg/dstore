import React from 'react';
import { IProducts } from '../../Interfaces/ProductsInterfaces';
import Icon from '../common/Icon';
import { faShoppingCart, faEye  ,faLock } from '@fortawesome/free-solid-svg-icons'

const styles = {
    image: {
        width: "100%",
    }
}
const RelatedProduct = ({product}:any) => {
        console.log(product);
    return(
        <div>
            <img src={product.imagen} alt={product.titulo} style={styles.image}/>
            <h5>
                {product.titulo}
            </h5>
            <button 
                
                className="btn btn-success btn-sm float-left">
                <Icon icon={faEye} /> Ver 
            </button>
            <button className="btn btn-primary btn-sm  float-right">
                Agregar <Icon icon={faShoppingCart} /> 
            </button>
        </div>
        

    );
}

export default RelatedProduct;