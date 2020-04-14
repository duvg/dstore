import { AnyAction, Dispatch } from 'redux';
import { IInitialState } from '../../Interfaces/ProductsInterfaces';
import { ICategories } from '../../Interfaces/CategoryInterfaces';
import { getProductCategories } from '../../services/api/ProductsService';

const GET_PRODUCT_CATEGORY_START = 'app/productcategory/GET_PRODUCT_CATEGORY_START';
const GET_PRODUCT_CATEGORY_ERROR = 'app/productcategory/GET_PRODUCT_CATEGORY_ERROR';
const GET_PRODUCT_CATEGORY_SUCCESS = 'app/productcategory/GET_PRODUCT_CATEGORY_SUCCESS';

// Estado inicial
let initialState: IInitialState = {
    data: [],
    current: {},
    currentPage: 1,
    error: false,
    fetched: false,
    fetching: false,
    pagination: {}
}


export default function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case GET_PRODUCT_CATEGORY_START:
            return { 
                ...state,
                fetching: true,
                fetched: false,
            }
        case GET_PRODUCT_CATEGORY_ERROR:
            return {
                ...state,
                error: action.payload,
                fetched: false,
                fetching: false,
            }
        case GET_PRODUCT_CATEGORY_SUCCESS:
            return {
                ...state,
                data: action.payload,
                fetched: true,
                fetching: false,
            }
        default:
            return { 
                ...state,
                fetched: false,
                fetching: false,
            }
    }
}

// Action creators
const getProductCategoryStart = () => ({
    type: GET_PRODUCT_CATEGORY_START
});

const getProductCategoryError = (error: string) => ({
    type: GET_PRODUCT_CATEGORY_ERROR,
    payload: error,
});

const getProductCategorySuccess = (categories: ICategories) => ({
    type: GET_PRODUCT_CATEGORY_SUCCESS,
    payload: categories
});



// thunk actions
export const getProductCategoriesAction = (id: string) => async (dispatch: Dispatch) => {
    dispatch(getProductCategoryStart());

    try {
        let categories = await getProductCategories(id);
        console.log(categories);
    } catch (error) {
        dispatch(getProductCategoryError(error));
    }
}

