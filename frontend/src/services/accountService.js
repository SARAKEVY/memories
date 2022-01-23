import axios from 'axios';
import {API_URL} from './httpService';


export function addAccount ( data ){
    return axios.post (`${API_URL}/accounts`, data);
}


const service = {
    addAccount
}

export default service;

