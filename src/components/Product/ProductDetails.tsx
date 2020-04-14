import React from 'react';
import { IProducts } from '../../Interfaces/ProductsInterfaces';
import { ISellers } from '../../Interfaces/SellerInterfaces';

const styles={
    imagen: {
        width: '100%',
    }
}
const ProductDetails = (props: IProducts ) => {
    const { product } = props;
    //console.log(typeof product.categories);

    
    
    
    return(
        <div className="row">
            {/* Imagen del producto */}
            <div className="col-md-6">
                <img src={product.imagen} alt={product.titulo} style={styles.imagen} />
            </div>

            {/* Información del producto */}
            <div className="col-md-6 pt-3">
                <h2>{product.titulo}</h2>
                <p>{product.detalles}</p>
                <p>
                    <strong>Unidades disponibles:</strong> {product.disponibles}
                </p>
                <p>
                    <strong>Estado:</strong> &nbsp; 
                    { product.estado === 'disponible' ? 
                        <span className="badge badge-primary">{product.estado}</span>
                      :
                        <span className="badge badge-danger">{product.estado}</span>
                    }
                </p>
                <p>
                    <strong>Precio:</strong> $ {product.precio}
                </p>
                <div>
                    <h4>Categorias del producto </h4>
                    { product.categories && <p>
                        {Object.keys(product.categories).map(x => {
                            const categoty = product.categories[x];
                            return(
                            <span key={x} className="badge badge-primary mr-1">{categoty.titulo}</span> 
                            )
                        })}
                    </p> }
                </div>
                
            </div>
            
        </div>
        
    )
}

export default ProductDetails;

/*
{Object.keys(categories).map(x => {
                        const category = categories[x];
                        return (
                            <span className="badge badge-primary">
                                {category.titulo}
                            </span>
                        )
                    })}
*/