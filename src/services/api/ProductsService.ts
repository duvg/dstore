import axios from 'axios';
import * as config from './config';

// Obtiene todos los productos
export async function getProducts() {
    return await axios.get(`${config.url}/products`);
}

// Obtiene un producto especifico
export async function getProduct(id: string) {
    return await axios.get(`${config.url}/products/${id}`);
}

// Obtiene las categorias de un producto
export async function getProductCategories(id: string) {
    return await axios.get(`${config.url}/products/${id}/categories`);
};