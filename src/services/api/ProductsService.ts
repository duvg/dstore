import axios from 'axios';
import * as config from './config';

export async function getProducts() {
    return await axios.get(`${config.url}/products`);
}