export interface ILogin {
    email: string,
    password: string
}

export interface ILoginProps {
    login: (a: ILogin) => void
}

// Datos del usuario
export interface IAuthUser {
    identificador: string,
    nombre: string,
    correo: string,
    verificado: number,
    esAdministrador: boolean,
    fechaCreacion: string,
    fechaActualizacion: string,
}

// para grant_type: password
export interface IAuthToken {
    token_type: string,
    expires_in: number,
    access_token: string,
    refresh_token: string
}