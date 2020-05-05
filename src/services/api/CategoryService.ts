import axios from 'axios';
import * as config from './config';

// Obtener todas las categorias
export async function getCategories() {
    return await axios.get(`${config.url}/categories`);
}

// Obtener una categoria
export async function getCategory(id: string) {
    return await axios.get(`${config.url}/categories/${id}`);
}

// Obtener los productos de una catregoria
export async function getProducts(id: string) {
    return await axios.get(`${config.url}/categories/${id}/products`);
}