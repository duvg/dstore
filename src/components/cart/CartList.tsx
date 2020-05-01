import React from 'react';
import { IProduct, IProducts } from '../../Interfaces/ProductsInterfaces';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Icon from '../common/Icon';

interface ICartListProps {
    products: IProducts;
    total: number;
    removeProduct: (product: IProduct) => void;    
}
const CartList = (props: ICartListProps) => {
    const { products, total, removeProduct } = props;
    
    return(
        <div className="row mt-3">
            <div className="col-md-12">
                <h2>Elemetos en el carrito de compras</h2>
                
                <table className="table table-hover table-bordered ">
                    <thead>
                        <tr className="bg-info">
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        { products && Object.keys(products).map(x => {
                            const product = products[x];
                            return (
                                <tr key={x}>
                                    <td>{product.identificador}</td>
                                    <td>{product.titulo}</td>
                                    <td>$ {product.precio}</td>
                                    <td style={{"width": "200px"}}>
                                        <button 
                                            onClick={() => removeProduct(product) }
                                            className="btn btn-danger">
                                            <Icon icon={faTrash} />&nbsp;
                                            Quitar del carrito
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                        <tr>
                            <th colSpan={3}>Total</th>
                            <td>$ {total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CartList;