import { Dispatch, AnyAction } from 'redux';
import { ICart } from '../../Interfaces/CartInterface';
import { IProduct, IProducts } from '../../Interfaces/ProductsInterfaces';
import { Products } from '.';
// CONSTANTES
const GET_ADD_PRODUCT = 'app/cart/GET_ADD_PRODUCT';
const GET_REMOVE_PRODUCT = 'app/cart/GET_REMOVE_PRODUCT';

// REDUCER


// Estado Inicial
const initialState = {
    products:[],
    total: 0
}


export default function reducer(state = initialState, action: AnyAction) {
    switch(action.type) {
        case GET_ADD_PRODUCT:
            return { 
                ...state,
                products: state.products.concat(action.payload),
                total: state.total + action.payload.precio
            }
        case GET_REMOVE_PRODUCT:
            return { 
                ...state,
                products: state.products.filter(item => item !== action.payload),
                total: state.total - action.payload.precio
                
        }
        default:
            return {...state};
    }
}

// ACTION CREATORS
const getAddProduct = (product: IProduct) => ({
    type: GET_ADD_PRODUCT,
    payload: product
});

const getRemoveProduct = (product: IProduct) => ({
    type: GET_REMOVE_PRODUCT,
    payload: product
});

// THUNK ACTIONS
export const getAddProductThunk = (product: IProduct) => async (dispatch: Dispatch) => {
    dispatch(getAddProduct(product));
}

export const getRemoveProductThunk = (product: IProduct) => async (dispatch: Dispatch) => {
    dispatch(getRemoveProduct(product));
}