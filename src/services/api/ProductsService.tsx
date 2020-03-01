import axios from 'axios';
import * as config from './config';

export async function getProducts() {
    let urls = config.url + '/products';
    console.log(urls);
    return await axios.get(config.url + '/products');
}