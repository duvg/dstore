import { IProducts, IPagination } from '../../Interfaces/ProductsInterfaces';
export { default as Products } from './ProductsDuck';

export interface IState {
    products: {
        data: IProducts,
        paginationProducts: IPagination
        fetched: boolean,
        fetching: boolean,
    }
}