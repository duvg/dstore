import { Dispatch, AnyAction } from 'redux';
import { ICategory, ICategories } from '../../Interfaces/CategoryInterfaces';
import { getCategories, getProducts } from '../../services/api/CategoryService';
import { IProducts } from '../../Interfaces/ProductsInterfaces';


// CONSTANTES
// Obtener todas las categorias
const GET_CATEGORIES_START = 'app/categories/GET_CATEGORY_START';
const GET_CATEGORIES_ERROR = 'app/categories/GET_CATEGORIES_ERROR';
const GET_CATEGORIES_SUCCESS = 'app/categories/GET_CATEGORIES_SUCCESS';

// Obtener los productos de una categoria
// consulta los productos por categoria
const GET_CATEGORY_PRODUCTS_START = 'app/products/GET_CATEGORY_PRODUCTS_START';
const GET_CATEGORY_PRODUCTS_ERROR = 'app/products/GET_CATEGORY_PRODUCTS_ERROR';
const GET_CATEGORY_PRODUCTS_SUCCESS = 'app/products/GET_CATEGORY_PRODUCTS_SUCCESS';

// Estado Inicial
const initialState = {
    categories: [],
    products: [],
    fetching: false,
    fetched: false,
    error: ''
}

// Reducer
export default function reducer(state = initialState, action: AnyAction) {
    switch(action.type)
    {
        case GET_CATEGORIES_START:
            return  {
                ...state,
                fetching: true,
                fetched: false,
            }
        case GET_CATEGORIES_ERROR:
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: '',
                categories: action.payload.data,
            }
        // cargar productos pro categoria
        case GET_CATEGORY_PRODUCTS_START:
            return {
                ...state,
                fetching: true,
                fetched: false,
                errorMsg: '',
            } 
        case GET_CATEGORY_PRODUCTS_ERROR:
            return {
                ...state,
                fetching: false,
                fetched: false,
                errorMsg: action.payload,
            }
        case GET_CATEGORY_PRODUCTS_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                products: action.payload
            }
        default: 
            return { ...state };
    }
}


// Action ceators

// Obtener todas las categorias
const getCategoriesStart = () => ({
    type: GET_CATEGORIES_START,
});

const getCategoriesError = (error: string) => ({
    type: GET_CATEGORIES_ERROR,
    payload: error,
});

const getCategoriesSuccess = (categories: ICategories) => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: {
        data: categories
    }
});

// Obtener productos de una categoria
const getCategoryProductsStart = () => ({
    type: GET_CATEGORY_PRODUCTS_START,
});

const getCategoryProductsError = (error: string) => ({
    type: GET_CATEGORY_PRODUCTS_ERROR,
    payload: error,
});

const getCategoryProductsSuccess = (products: IProducts) => ({
    type: GET_CATEGORY_PRODUCTS_SUCCESS,
    payload: products,
});

// THUNK ACTIONS
//Obtener todas las categorias
export const getCategoriesThunk = () => async (dispatch: Dispatch) => {
    dispatch(getCategoriesStart());

    try{
        let categories = await getCategories();
        
        dispatch(getCategoriesSuccess(categories.data.data));
    } catch(error) {
        dispatch(getCategoriesError(error));
    }

}

// Obtener todos los productos de una categoria
export const getCategoryProductsThunk = (id: string) => async (dispatch: Dispatch) => {
    dispatch(getCategoryProductsStart());

    try {
        let products = getProducts(id);
        dispatch(getCategoryProductsSuccess((await products).data.data));
    } catch (error) {
        dispatch(getCategoryProductsError(error));
    }
}
