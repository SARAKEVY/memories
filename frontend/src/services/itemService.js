import axios from 'axios';
import {API_URL} from './httpService';


export function addItem ( data ) {
    return axios.post (`${API_URL}/items`, data);
}


const itemService = {
    addItem
}

export default itemService;

