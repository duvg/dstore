import React from 'react';
import { IProduct } from '../../Interfaces/ProductsInterfaces';
import { ISeller } from '../../Interfaces/SellerInterfaces';

const styles={
    imagen: {
        width: '100%',
    },
    avatar: {
        width: '250px'
    },
    alignImage: {
        
    } as React.CSSProperties
}

interface IProductDetailsProps {
    product: IProduct,
    seller: ISeller
}

const ProductDetails = (props: IProductDetailsProps ) => {
    const { product, seller } = props;
    //console.log(typeof product.categories);

    
    
    
    return(
        <div className="row">
            {/* Imagen del producto */}
            <div className="col-md-4 pt-4">
                <img src={product.imagen} alt={product.titulo} style={styles.imagen} />
            </div>

            {/* Información del producto */}
            <div className="col-md-4 pt-3">
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
            <div className="col-md-4 pt-3">
                <h3>Información del vendedor</h3>
                <div style={styles.alignImage} >
                <img style={styles.avatar} src={process.env.PUBLIC_URL + '/images/avatar.png'} alt=""/>
                </div>
                <br/>
                <strong>Nombre</strong>: {seller.nombre} <br/>
                <strong>Correo</strong>: {seller.correo} <br/>
                <strong>Registrado desde</strong>: { seller.fechaCreacion}
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