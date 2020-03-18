import { AnyAction, Dispatch} from 'redux';
import { IState } from './index';
import { IAuthUser, IAuthToken, ILogin, IUserData } from '../../Interfaces/UserInterfaces';
import { login as Login, register as Register, getAuthUserData } from '../../services/api/UsersServices';


// Constantes

// Inicio de sesion
const START_USER_LOGIN = "START_USER_LOGIN";
const ERROR_USER_LOGIN = "ERROR_USER_LOGIN";
const SUCCESS_USER_LOGIN = "SUCCESS_USER_LOGIN";

// Registro de usuario
const START_REGISTER_USER = "START_REGISTER_USER";
const ERROR_REGISTER_USER = "ERROR_REGISTER_USER";
const SUCCESS_REGISTER_USER = "SUCCESS_REGISTER_USER";

// Consulta de los datos del usuario logueado
const START_AUTH_USERDATA = "START_AUTH_USERDATA";
const ERROR_AUTH_USERDATA = "ERROR_AUTH_USERDATA";
const SUCCESS_AUTH_USERDATA = "SUCCESS_AUTH_USERDATA";


// Reducer
export default function reducer(state = {}, action: AnyAction) {
    switch (action.type) {
        // Inicio de sesion
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
        // Registro de usuarios
        case START_REGISTER_USER:
            return {...state}
        case ERROR_REGISTER_USER:
            return {
                ...state,
                registerError: action.payload
            }
        case SUCCESS_REGISTER_USER:
            return {
                ...state,
                data: action.payload,
                registerError: ''
            }
        
        // Datos del usuario Autenticado
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

// Registro de usuarios
const startRegister = () => ({
    type: START_REGISTER_USER
});

const errorRegister = (error: string) => ({
    type: ERROR_REGISTER_USER,
    payload: error
});


const successRegister = (data: IUserData) => ({
    type: SUCCESS_REGISTER_USER,
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
// Iniciar sesion
export const login = ({email, password}: ILogin) =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(startRegister());
        try {
            const result = await Login(email, password);
            dispatch(successLogin(result.data));
        
            getAuthUser(dispatch, getState().users.token.access_token);
        } catch (error) {
            dispatch(errorRegister(error));
        }        
    }

// Registro de usuario
export const register = (user: IUserData) => 
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(startLogin());
        try {
            const result = await Register(user) ;
            dispatch(successRegister(result.data));
        
            getAuthUser(dispatch, getState().users.token.access_token);
        } catch (error) {
            dispatch(errorLogin("Error intenta nuevamente"));
        }        
    }

// Obtener los datos del usuario autenticado 
async function getAuthUser (dispatch: Dispatch, token: string) {
    
        dispatch(startAuthUserData());
        try {
            const result = await getAuthUserData(token);
            dispatch(successAuthUserData(result.data.data));
        } catch (error) {
            dispatch(errorAuthUserData("Error al obtener los datos del usuario porfavor intente nuevamente"));
        }
} 
    
