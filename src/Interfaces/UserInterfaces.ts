// Interface para los campos provenientes del LoginForm
export interface ILogin {
    email: string,
    password: string
}

// Interface para el inicio de sesion
export interface ILoginProps {
    login: (a: ILogin) => void
}

// Interface datos del usuario auteticado
export interface IAuthUser {
    identificador: string,
    nombre: string,
    apellidos: string,
    correo: string,
    verificado: number,
    esAdministrador: boolean,
    fechaCreacion: string;
    fechaActualizacion: string;
    fechaEliminacion?: string;
}

// Iterface para datos de usuario -  registro
export interface IUserData {
    nombre: string,
    correo: string,
    clave: 'string',
    confirmacion_clave: string
}

// Interface para la función de registro de usuario
export interface IRegisterProps {
    register: (a: IUserData) => void
}

// Interface para el token de autorizacion
export interface IToken {
    access_token: string,
    token_type: string,
    expires_in: string,
}

// Interface de los datos del usuario autenticado 
export interface IAuthToken {
    token: IToken,
    user: IAuthUser
}

// Interface del estado inicial del usuario
export interface UserInitialState {
    token: IToken,
    authUser: IAuthUser,
    authenticated: boolean,
    authError: null
}

// Interface para el formulario de login y recuperación de contraseña
export interface IAuthFormProps {
    customHandleSubmit: any;
    userId?: string;
    message?: string;
}