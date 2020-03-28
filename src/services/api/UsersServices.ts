import axios from 'axios';
import * as config from './config';
import { IUserData } from '../../Interfaces/UserInterfaces';

// Inicia sesion, retorna las credenciales de accesto por token
export async function login(email: string, password: string) {
    
    let data = {
        'email': email,
        'password': password
    }
    return await axios.post(`${config.url}/auth/login`, data);
}

// Registro del usuario en el sistema
export async function register(user: IUserData) {
    
    return await axios.post(`${config.url}/users`, user);
}

// Retorna los datos del usuario autenticado en el sistema
export async function getAuthUserData(token: string) {  
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return await axios.post(`${config.url}/users`,{}, {headers});
}

// Recuperar la contraseña de un usuario por su email
export async function resetPassword(email: string) {
    const headers = {
        'Content-Type': 'application/json'
    };
    const uri = `${config.url}/password/emails`;

    
    return await axios.post(uri, email, {headers});
    
}