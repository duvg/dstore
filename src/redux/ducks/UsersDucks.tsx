import { AnyAction, Dispatch} from 'redux';
import { IState } from './index';
import { IAuthUser, IAuthToken, ILogin } from '../../Interfaces/UserInterfaces';
import { login as Login, getAuthUserData } from '../../services/api/UsersServices';


// Constantes

// Inicio de sesion
const START_USER_LOGIN = "START_USER_LOGIN";
const ERROR_USER_LOGIN = "ERROR_USER_LOGIN";
const SUCCESS_USER_LOGIN = "SUCCESS_USER_LOGIN";


// Consulta de los datos del usuario logueado
const START_AUTH_USERDATA = "START_AUTH_USERDATA";
const ERROR_AUTH_USERDATA = "ERROR_AUTH_USERDATA";
const SUCCESS_AUTH_USERDATA = "SUCCESS_AUTH_USERDATA";


// Reducer
export default function reducer(state = {}, action: AnyAction) {
    switch (action.type) {
        case START_USER_LOGIN:
            return { ...state }
        case ERROR_USER_LOGIN:
            return {
                ...state,
                authError: action.payload,
                autenticated: false
            }
        case SUCCESS_USER_LOGIN:
            return {
                ...state,
                token: action.payload,
                autenticated:  true
            }
        case START_AUTH_USERDATA:
            return { ...state }
        case ERROR_AUTH_USERDATA:
            return {
                ...state,
                errorAuthUserData: action.payload
            }
        case SUCCESS_AUTH_USERDATA:
            return {
                ...state,
                data: action.payload,
                errorAuthUserData: ''
            }
        default:
            return state;
    }
}

// Actions cretors

// Inicio de sesion
const startLogin = () => ({
    type: START_USER_LOGIN
});

const errorLogin = (error: string) => ({
    type: ERROR_USER_LOGIN,
    payload: error
});

const successLogin = (data: IAuthToken) => ({
    type: SUCCESS_USER_LOGIN,
    payload: data
});


// Consulta de los datos del usuario logueado
const startAuthUserData = () => ({
    type: START_AUTH_USERDATA,
});

const errorAuthUserData = (error: string) => ({
    type: ERROR_AUTH_USERDATA,
    payload: error
});

const successAuthUserData = (data: IAuthUser) => ({
    type: SUCCESS_AUTH_USERDATA,
    payload: data
});

// Thunks actions
export const login = ({email, password}: ILogin) =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(startLogin());
        try {
            const result = await Login(email, password);
            dispatch(successLogin(result.data));
            
        
            getAuthUser(dispatch, getState().users.token.access_token);
        } catch (error) {
            dispatch(errorLogin("Error al autenticar intenta nuevamente"));
        }        
    }

async function getAuthUser (dispatch: Dispatch, token: string) {
    
        dispatch(startAuthUserData());
        try {
            const result = await getAuthUserData(token);
            dispatch(successAuthUserData(result.data.data));
        } catch (error) {
            dispatch(errorAuthUserData("Error al obtener los datos del usuario porfavor intente nuevamente"));
        }
} 
    
