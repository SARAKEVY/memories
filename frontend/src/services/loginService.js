import axios from 'axios';
import {API_URL} from './httpService';


export function addUser ( data ){
    console.log('postdata', data);
    return axios.post (`${API_URL}/users`, data);
}

export function addWithGoogle ( data ){
    console.log('postdata', data);
    return axios.post (`${API_URL}/users/google`, data);
}

const loginService = {
    addUser,
    addWithGoogle,
}

export default loginService;
