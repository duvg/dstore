import axios from 'axios';

import * as config from './config';

// Retorna todos los vendedores
export async function getSellers() {
    return  await axios.get(`${config.url}/sellers`);
}

// retorna un vendedor especifico
export async function getSeller(id: string) {
    return await axios.get(`${config.url}/sellers/${id}`);
}

// Retorna todos los productos de un vendedor
export async function getSellerProducts(id: string) {
    return await axios.get(`${config.url}/sellers/${id}/products`);
}