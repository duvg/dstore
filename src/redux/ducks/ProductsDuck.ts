import { AnyAction, Dispatch } from 'redux';
import { getProduct, getProducts, getProductCategories } from '../../services/api/ProductsService';
import { IInitialState, IProducts, IProduct, IPagination } from '../../Interfaces/ProductsInterfaces';
import { ICategories } from '../../Interfaces/CategoryInterfaces';

import { getSellerThunk } from './SellerDuck';

// consultar todos los productos
const GET_PRODUCTS_START = "app/products/GET_PRODUCTS";
const GET_PRODUCTS_ERROR = "app/products/GET_PRODUCTS_ERROR";
const GET_PRODUCTS_SUCCESS = "app/products/GET_PRODUCTS_SUCCESS";

// detalle de un unico producto
const GET_PRODUCT_START = "app/products/GET_PRODUCT";
const GET_PRODUCT_ERROR = "app/products/GET_PRODUCT_ERROR";
const GET_PRODUCT_SUCCESS = "app/products/GET_PRODUCT_SUCCESS";


// Estado inicial
let initialState: IInitialState = {
    fetched: false,
    fetching: false,
    data: [],
    current: {},
    currentPage: 1,
    error: false,
    pagination: {}
}

// Reducer
export default function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {

        // Load products from api
        case GET_PRODUCTS_START:
            return {
                ...state,
                fetching: true,
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                fetched: false,
                fetching: false,
                error: true
            }
        case GET_PRODUCTS_SUCCESS:
            return { 
                ...state,
                fetched: true,
                fetching: false,
                data: action.payload.data,
                paginationProducts: action.payload.paginationProducts
            }

        // Load product detail
        case GET_PRODUCT_START:
            return {
                ...state,
                fetched: false,
                fetching: true,
            }
        case GET_PRODUCT_ERROR:
            return {
                ...state,
                error: true,
                fetched: false,
                fetching: false,
                errorMsg: action.payload ,
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                current: action.payload
            }
        default:
            return state
    }
}

// Action creatos

// inicio de la petifcion de todos los productos
const getProductsStartAction = () => ({
    type: GET_PRODUCTS_START,
});

// Se obtiene correctamente el listado de todos los productos
const getProductsSuccessAction = (products: IProducts, pagination: IPagination) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: {
        data: products,
        paginationProducts: pagination
    }
})

// Error al obtener el listado 
const getProductsErrorAction = () => ({
    type: GET_PRODUCTS_ERROR,
});

// Inicio peticion de un producto
const getProductStartAction = () => ({
    type: GET_PRODUCT_START
});

// Se obtiene el producto
const getProductSuccessAction = (product: IProduct, categories: ICategories) => {

    product['categories'] = categories;
    //console.log(typeof product.categories);
    return {
        type: GET_PRODUCT_SUCCESS,
        payload: product

    }
}

// Error al obtener el producto
const getProductErrorAction = (error: string) => ({
    type: GET_PRODUCT_ERROR,
    payload: error
})


// thunks actions
export const getProductsThunk = () => async (dispatch: Dispatch) => {
    dispatch(getProductsStartAction());

    // llamada a la api de productos
    try {
        let productos = await getProducts();
        dispatch(getProductsSuccessAction(productos.data.data, productos.data.meta.pagination));
    } catch(e) {
        
        dispatch(getProductsErrorAction());
    }
}

export const getProductThunk = (id: string) => async (dispatch: Dispatch) => {
    dispatch(getProductStartAction());
    // llamada a la api
    try {
        let product = await getProduct(id);
        let productCategories = await getProductCategories(id);
        getSellerThunk(product.data.data.vendedor)(dispatch);
        dispatch(getProductSuccessAction(product.data.data, productCategories.data.data));
    } catch (error) {
        dispatch(getProductErrorAction(error));
    }
}

