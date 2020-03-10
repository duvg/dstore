import axios from 'axios';
import * as config from './config';

export async function login(email: string, password: string) {
    const grant_type = 'password';
    const client_id = '4';
    const client_secret = 'y4abwYOguMMWIoukLhno50PktWFBgG5LZuT7FpM3';
        
    var data = new FormData();
    data.append('grant_type', grant_type);
    data.append('client_id', client_id);
    data.append('client_secret', client_secret);
    data.append('username',email);
    data.append('password',password);

    
    return await axios.post(`${config.url}/oauth/token`, data);
}

export async function getAuthUserData(token: string) {  
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return await axios.post(`${config.url}/user`,{}, {headers});
}