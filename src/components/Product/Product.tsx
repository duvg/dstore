import React from 'react';
import { IProduct } from '../../Interfaces/ProductsInterfaces';

interface IProductProps {
    product: IProduct
}
/**
 * 
 * @param props dale XD
 */
const Product = (props: IProductProps) => {
    const { product } = props;
    return(
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
    )
}

export default Product;