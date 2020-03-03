import { IProducts, IPagination } from './ProductsDuck';
export { default as Products } from './ProductsDuck';

export interface IState {
    Products: {
        data: IProducts,
        pagination: IPagination
        fetched: boolean,
        fetching: boolean
    }
}