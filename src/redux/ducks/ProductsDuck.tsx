import { AnyAction, Dispatch } from 'redux';
import { getProducts } from '../../services/api/ProductsService';


// Interfaces
export interface IProduct {
    identificador: number,
    titulo: string,
    disponibles: number,
    estado: string,
    imagen: string,
    vendedor: number,
    fechaCreacion: string,
    fechaActualizacion: string,
    fechaEliminacion?: string
}

// Interface para el listado de productos
export interface IProducts {
    [key: string] : IProduct,
}

// Interface para la paginación de productos
export interface IPagination {
    total: number,
    count: number,
    per_page: number,
    current_page: number,
    total_pages: number,
}


// Interface para el estado inicial
export interface IInitialState {
    fetched: boolean,
    fetching: boolean,
    data: [],
    current: object,
    currentPage: number,
    error: boolean,
    paginationProducts: {}
}


// Constantes

// consultar todos los productos
const GET_PRODUCTS_START = "GET_PRODUCTS";
const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";

// consultar un unico producto
const GET_PRODUCT = "GET_PRODUCT";
const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR";
const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";



let initialState: IInitialState = {
    fetched: false,
    fetching: false,
    data: [],
    current: {},
    currentPage: 1,
    error: false,
    paginationProducts: {}
}


// Reducer
export default function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
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
        default:
            return state
    }
}

// Action creatos

// Inicio de la peticion para todos los productos 
const getProductsStart = () => ({
    type: GET_PRODUCTS_START,
});

// Se obtiene correctamente el listado de todos los productos
const getProductsSuccess = (products: IProducts, pagination: IPagination) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: {
        data: products,
        paginationProducts: pagination
    }
})

// Error al obtener el listado 
const getProductsError = () => ({
    type: GET_PRODUCTS_ERROR,
});

// thunks actions
export const getProductsAction = () => async (dispatch: Dispatch) => {
    dispatch(getProductsStart());

    // llamada a la api de productos
    try {
        let productos = await getProducts();
        dispatch(getProductsSuccess(productos.data.data, productos.data.meta.pagination));
    } catch(e) {
        dispatch(getProductsError());
    }
}

