import { AnyAction, Dispatch} from 'redux';
import { IState } from './index';
import { IAuthUser, IAuthToken, ILogin, IUserData, UserInitialState } from '../../Interfaces/UserInterfaces';
import { login as Login, register as Register, resetPassword } from '../../services/api/UsersServices';


// Constantes

// Inicio de sesion
const START_USER_LOGIN = "app/users/START_USER_LOGIN";
const ERROR_USER_LOGIN = "app/users/ERROR_USER_LOGIN";
const SUCCESS_USER_LOGIN = "app/users/SUCCESS_USER_LOGIN";

// Registro de usuario
const START_REGISTER_USER = "app/users/START_REGISTER_USER";
const ERROR_REGISTER_USER = "app/users/ERROR_REGISTER_USER";
const SUCCESS_REGISTER_USER = "app/users/SUCCESS_REGISTER_USER";

// Consulta de los datos del usuario logueado
const START_AUTH_USERDATA = "app/users/START_AUTH_USERDATA";
const ERROR_AUTH_USERDATA = "app/users/ERROR_AUTH_USERDATA";
const SUCCESS_AUTH_USERDATA = "app/users/SUCCESS_AUTH_USERDATA";

// Recuperar contraseña
const START_RECOVERY_PASSWORD = "app/users/START_RECOVERY_PASSWORD";
const ERROR_RECOVERY_PASSWORD = "app/users/ERROR_RECOVERY_PASSWORD";
const SUCCESS_RECOVERY_PASSWORD = "app/users/SUCCESS_RECOVERY_PASSWORD"; 


const InitialState: UserInitialState = {
    token: {
        access_token: '',
        token_type: '',
        expires_in: ''
    },
    authUser: {
        identificador: '',
        nombre: '',
        apellidos: '',
        correo: '',
        verificado: 0,
        esAdministrador: false,
        fechaCreacion: '',
        fechaActualizacion: '',
    },
    authenticated: false,
    authError: null,
}


// Reducer
export default function reducer(state = InitialState, action: AnyAction) {
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
                token: action.payload.token,
                authUser: action.payload.user,
                authenticated:  true,
                authError: null
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
                authError: action.payload
            }
        case SUCCESS_AUTH_USERDATA:
            return {
                ...state,
                data: action.payload,
                errorAuthUserData: ''
            }
        // Recuperar contraseña
        case START_RECOVERY_PASSWORD:
            return {
                ...state
            }
        case ERROR_RECOVERY_PASSWORD:
            return {
                ...state,
                errorRecovery: action.payload
            }
        case SUCCESS_RECOVERY_PASSWORD:
            return {
                ...state,
                recoveryPassword: action.payload
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

// Recuperacion de contraseña
const startRecoveryPassword = () => ({
    type: START_RECOVERY_PASSWORD
});

const errorRecoveryPassword = (error: string) => ({
    type: ERROR_RECOVERY_PASSWORD,
    payload: error
});

const successRecoveryPassword = (data: string) => ({
    type: SUCCESS_RECOVERY_PASSWORD,
    payload: data
});

// Thunks actions
// Iniciar sesion
export const login = ({email, password}: ILogin) =>    
    async (dispatch: Dispatch, getState: () => IState) => {

        dispatch(startLogin());
        try {
            console.log("iniciando sesion");
            const result = await Login(email, password);
            
            // Extraer datos del usuario
            let { data } = result.data.user

            // reorganizar datos
            let token = {
                access_token: result.data.access_token,
                token_type: result.data.token_type,
                expires_in: result.data.expires_in,
            };
            let authData = {
                token: token,
                user: data
            }
            console.log(result);
            dispatch(successLogin(authData));
        
            
        } catch (error) {
            dispatch(errorLogin(error));
        } 
    }

// Registro de usuario
export const register = (user: IUserData) => 
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(startLogin());
        try {        
            const result = await Register(user) ;
            console.log(result);
            dispatch(successRegister(result.data.data));
        
        } catch (error) {
            dispatch(errorLogin("Error intenta nuevamente"));
        }        
    }

export const recoveryPassword = (email: string) =>
    async (dispatch: Dispatch, getState: () => IState) => {
        dispatch(startRecoveryPassword());
        try {
            const result = await resetPassword(email);
            dispatch(successRecoveryPassword('Se envio un email de recuperación'));            
        } catch(error) {
            dispatch(errorRecoveryPassword('Error Itente nuevamente mas tarde'));
        }
    }


    
