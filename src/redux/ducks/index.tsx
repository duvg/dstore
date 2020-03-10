import { IProducts, IPagination } from '../../Interfaces/ProductsInterfaces';
import { IAuthToken, IAuthUser } from '../../Interfaces/UserInterfaces';
export { default as Products } from './ProductsDuck';

export interface IState {
    products: {
        data: IProducts,
        paginationProducts: IPagination
        fetched: boolean,
        fetching: boolean,
    },
    users: {
        token: IAuthToken,
        authError: string,
        autenticated: boolean,
        data: IAuthUser,
        errorAuthUserData: string
    }
}