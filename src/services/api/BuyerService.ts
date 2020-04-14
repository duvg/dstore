import axios from 'axios';
import * as config from './config';

// Retorna todos los compradores del sistema
export async function getBuyers() {
    return await axios.get(`${config.url}/buyers`);
}

// Retorna un comprador en especifico
export async function getBuyer(id: string) {
    return await axios.get(`${config.url}/buyers/${id}`);
}