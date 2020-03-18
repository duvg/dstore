export interface ILogin {
    email: string,
    password: string
}

export interface ILoginProps {
    login: (a: ILogin) => void
}

// Datos del usuario auteticado
export interface IAuthUser {
    identificador: string,
    nombre: string,
    correo: string,
    verificado: number,
    esAdministrador: boolean,
    fechaCreacion: string,
    fechaActualizacion: string,
}

// Datos usuario registro
export interface IUserData {
    nombre: string,
    correo: string,
    clave: 'string',
    confirmacion_clave: string
}

export interface IRegisterProps {
    register: (a: IUserData) => void
}

// para grant_type: password
export interface IAuthToken {
    token_type: string,
    expires_in: number,
    access_token: string,
    refresh_token: string
}