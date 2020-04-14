import { Dispatch, AnyAction } from 'redux';
import { getBuyer, getBuyers } from '../../services/api/BuyerService';

import { IInitialState } from '../../Interfaces/CommonInterfaces';
import { IBuyer, IBuyers } from '../../Interfaces/BuyerInterfaces';

// CONSTANTES
// Consultar todos los compradores
const GET_BUYERS_START = "app/buyers/GET_BUYERS_START";
const GET_BUYERS_ERROR = "app/buyers/GET_BUYERS_ERROR";
const GET_BUYERS_SUCCESS = "app/buyers/GET_BUYERS_SUCCESS";

// Consultar un compador en especifico
const GET_BUYER_START = "app/buyers/GET_BUYER_START";
const GET_BUYER_ERROR = "app/buyers/GET_BUYER_ERROR";
const GET_BUYER_SUCCESS = "app/buyers/GET_BUYER_SUCCESS";

// REDUCER

// Estado Inicial
const initialState: IInitialState = {
    fetched: false,
    fetching: false,
    data: [],
    current: {},
    currentPage: 1,
    error: false,
    pagination: {}
}

export default function reducer(state = initialState, action: AnyAction) {
    switch (action.payload) {
        // Consultar todos los compradores
        case GET_BUYERS_START:
            return {
                ...state,
                error: false,
                fetched: false,
                fetching: true,
            }
        case GET_BUYERS_ERROR:
            return {
                ...state,
                error: action.payload,
                fetched: false,
                fetching: false,
            }
        case GET_BUYERS_SUCCESS:
            return {
                ...state,
                error: false, 
                fetched: true,
                fetching: false,
                data: action.payload.data,
                pagination: action.payload.pagination
            }
        
        // Consulta un comprador en especifico
        case GET_BUYER_START:
            return {
                ...state,
                error: false,
                fetched: false,
                fetching: true,
            }
        case GET_BUYER_ERROR:
            return {
                ...state,
                error: action.payload,
                fetched: false,
                fetching: false
            }
        case GET_BUYER_SUCCESS:
            return {
                ...state,
                error: false,
                fetched: true,
                fetching: false,
                current: action.payload.data,
            }
        default:
            return { ...state }
    }
}

// ACTIONS CREATORS
// Consultar todos los compradores
const getBuyersStartAction = () => ({
    type: GET_BUYERS_START,
});

const getBuyersErrorAction = (error: string) => ({
    type: GET_BUYERS_ERROR,
    payload: error,
});

const getBuyersSuccessAction = (buyers: IBuyers) => ({
    type: GET_BUYERS_SUCCESS,
    payload: buyers,
})

// Consultar un compador en especifico

const getBuyerStartAction = () => ({
    type: GET_BUYER_START,
});

const getBuyerErrorAction = (error: string) => ({
    type: GET_BUYER_ERROR,
});

const getBuyerSuccessAction = (buyer: IBuyer) => ({
    type: GET_BUYER_SUCCESS,
    payload: buyer,
}); 

// THUNK ACTIONS
// Consultar todos los compradores
export const getBuyersThunk = async (dispatch: Dispatch) => {
    dispatch(getBuyersStartAction());

    try {
        const buyers = await getBuyers();
        dispatch(getBuyersSuccessAction(buyers.data.data));
    } catch (error) {
        dispatch(getBuyersErrorAction(error));
    }
}

// Consultar un compador en especifico
export const getBuyerThunk = (id: string) => async (dispatch: Dispatch) => {
    dispatch(getBuyerStartAction());

    try {
        const buyer = await getBuyer(id);
        dispatch(getBuyerSuccessAction(buyer.data.data));
    } catch (error) {
        dispatch(getBuyerErrorAction(error));
    }
}