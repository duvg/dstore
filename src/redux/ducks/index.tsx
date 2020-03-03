import { IProducts } from './ProductsDuck';
export { default as Productos } from './ProductsDuck';

export interface IState {
    Productos: {
        data: IProducts,
        fetched: boolean,
        fetching: boolean
    }
}