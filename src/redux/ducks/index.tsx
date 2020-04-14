import { IProducts, IPagination, IProduct } from '../../Interfaces/ProductsInterfaces';
import { IAuthToken, IAuthUser } from '../../Interfaces/UserInterfaces';
import { ICategories } from '../../Interfaces/CategoryInterfaces';
import { IBuyers, IBuyer } from '../../Interfaces/BuyerInterfaces';
import { ISeller, ISellers } from '../../Interfaces/SellerInterfaces';
import { ITransactions, ITransaction } from '../../Interfaces/TransactionInterface';
export { default as Products } from './ProductsDuck';

export interface IState {
    buyers: {
        data: IBuyers;
        current: IBuyer;
        pagination: IPagination;
    }
    categories: {
        data: ICategories;
        pagination: IPagination;
        fetched: false;
        fetching: false;
    },
    products: {
        current: IProduct;
        data: IProducts;
        paginationProducts: IPagination;
        fetched: false;
        fetching: false;
    },
    sellers: {
        current: ISeller;
        data: ISellers;
        fetched: false;
        fetching: false;
    }
    users: {
        authError: string;
        authenticated: boolean;
        data: IAuthUser;
        errorAuthUserData: string;
        recoveryPassword: string;
        token: IAuthToken;
        fetched: false;
        fetching: false;
    },
    transactions: {
        data: ITransactions;
        current: ITransaction;
        pagination: IPagination;
        fetched: false;
        fetching: false;
    },
}