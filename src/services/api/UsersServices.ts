import axios from 'axios';
import * as config from './config';
import { IUserData } from '../../Interfaces/UserInterfaces';

// Inicia sesion, retorna las credenciales de accesto por token
export async function login(email: string, password: string) {
    /*
    TODO: pass this to config token file
    const grant_type = 'password';
    const client_id = '4';
    co4nst client_secret = 'y4abwYOguMMWIoukLhno50PktWFBgG5LZuT7FpM3'; another pc*/

    const grant_type = 'password';
    const client_id = '2';
    const client_secret = 'Qys5a7lkLZ1Td8MlOKBoKTzBgcFFHWuAYUrNzVNm';

    
        
    let data = new FormData();
    data.append('grant_type', grant_type);
    data.append('client_id', client_id);
    data.append('client_secret', client_secret);
    data.append('username',email);
    data.append('password',password);
    
    return await axios.post(`${config.url}/oauth/token`, data);
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