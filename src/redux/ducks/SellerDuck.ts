import { Dispatch, AnyAction} from 'redux';
import { getSeller, getSellers, getSellerProducts } from '../../services/api/SellerService';

import { IInitialState } from '../../Interfaces/CommonInterfaces';
import { ISeller, ISellers } from '../../Interfaces/SellerInterfaces';
import { IProducts } from '../../Interfaces/ProductsInterfaces';

// Consultar todos los vendedores
const GET_SELLERS_START = "app/sellers/GET_SELLERS_START";
const GET_SELLERS_ERROR = "app/sellers/GET_SELLERS_ERROR";
const GET_SELLERS_SUCCESS = "app/sellers/CONST GET_SELLERS_SUCCESS";

// Consultar un vendedor especifico
const GET_SELLER_START = "app/sellers/GET_SELLER_START";
const GET_SELLER_ERROR = "app/sellers/GET_SELLER_ERROR";
const GET_SELLER_SUCCESS = "app/sellers/GET_SELLER_SUCCESS";

// Consultar los productos del vendeor
const GET_SELLER_PRODUCT_START = "app/sellers/GET_SELLER_PRODUCT_START";
const GET_SELLER_PRODUCT_ERROR = "app/sellers/GET_SELLER_PRODUCT_ERROR";
const GET_SELLER_PRODUCT_SUCCESS = "app/sellers/GET_SELLER_PRODUCT_SUCCESS";


// Estado inicial
const initialState: IInitialState  = {
    fetched: false,
    fetching: false,
    data: [],
    current: {},
    currentPage: 1,
    error: false,
    pagination: {}
}


export default function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        // Todos los vendedores
        case GET_SELLERS_START:
            return {
                ...state,
                error: false,
                fetched: false,
                fetching: true,
            }
        case GET_SELLERS_ERROR:
            return {
                ...state,
                error: action.payload,
                fetched: false,
                fetching: false,
            }
        case GET_SELLERS_SUCCESS:
            return {
                ...state,
                error: false,
                fetched: true,
                fetching: false,
                data: action.payload.data,
                pagination: action.payload.pagination
            }
        // Vendedor especifico
        case GET_SELLER_START:
            return {
                ...state,
                error: false,
                fetched:false,
                fetching: true,
            }
        case GET_SELLER_ERROR:
            return {
                ...state,
                fetched: false,
                fetching: false,
                error: action.payload
            }
        case GET_SELLER_SUCCESS:
            return {
                ...state,
                fetched: true,
                fetching: false,
                current: action.payload,
                error: false,
            }
        // Productos del vendedor
        case GET_SELLER_PRODUCT_START:
            return {
                ...state,
                error: false,
                fetched: false,
                fetching: true,
            }
        case GET_SELLER_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
                fetched: false,
                fetching: false,
            }
        case GET_SELLER_PRODUCT_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                fetched: true,
                fetching: false
            }
        default:
            return { ...state }
    }
}


// Action creators

// Listado de vededores
const getSellersStartAction = () => ({
    type: GET_SELLERS_START
});

const getSellersErrorAction = (errorMsg: string) => ({
    type: GET_SELLERS_ERROR,
    payload: errorMsg
});

const getSellersSuccessAction = (sellers: ISellers) => ({
    type: GET_SELLERS_SUCCESS,
    payload: sellers
});


// Vendedor especifico
const getSellerStartAction = () => ({
    type: GET_SELLER_START
});

const getSellerErrorAction = (errorMsg: string) => ({
    type: GET_SELLER_ERROR,
    payload: errorMsg
});

const getSellerSuccessAction = (seller: ISeller) => ({
    type: GET_SELLER_SUCCESS,
    payload: seller
});

// Productos del vendedor
const getSellerProductsStartAction = () => ({
    type: GET_SELLER_PRODUCT_START,
});

const getSellerProductsErrorAction = (error: string) => ({
    type: GET_SELLER_PRODUCT_ERROR,
    payload: error,
});

const getSellerProductsSuccessAction = (products: IProducts) => ({
    type: GET_SELLER_PRODUCT_SUCCESS,
    payload: products
});

// Thunk actions

// Cargar todos los vendedores al state
export const getSellersThunk = (id: string) => async (dispatch: Dispatch) => {
    dispatch(getSellersStartAction());

    try {
        const sellers = await getSellers();
        dispatch(getSellersSuccessAction(sellers.data.data));
    } catch (error) {
        dispatch(getSellersErrorAction(error));
    }
}

// Cargar el vendedor al state
export const getSellerThunk = (id: string) => async (dispatch: Dispatch) => {

    dispatch(getSellerStartAction());

    try {
        const seller = await getSeller(id);
        const productsSeller = await getSellerProducts(id);
        seller.data.data['products'] = productsSeller.data.data;
        dispatch(getSellerSuccessAction(seller.data.data));
    } catch (error) {
        dispatch(getSellerErrorAction(error));
    }
}

// Cargar los productos del vendedor al state
export const getSellerProductsThunk = (id: string) => async (dispatch: Dispatch) => {
    dispatch(getSellerProductsStartAction());

    try {
        const products = await getSellerProducts(id);
        dispatch(getSellerProductsSuccessAction(products.data.data));
    } catch (error) {
        dispatch(getSellerProductsErrorAction(error));
    }
}

