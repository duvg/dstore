import { AnyAction, Dispatch } from 'redux';
import { getProducts } from '../../services/api/ProductsService';

// Constantes

// consultar todos los productos
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";

// consultar un unico producto
const GET_PRODUCT = "GET_PRODUCT";
const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR";
const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";


// Reducers
let initialState = {
    fetching: false,
    data: [],
    current: {},
}

export default function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state }
        default:
            return state
    }
}

// Actions creators {thunkds}
export let getProductsAction = () => async (dispatch: Dispatch) => {
    dispatch({
        type: GET_PRODUCTS
    });

    // llamada a la api de productos
    const productos = await getProducts();
    
    let {data} = productos.data;     
    console.log(data);


}

