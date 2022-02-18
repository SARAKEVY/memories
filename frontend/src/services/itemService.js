import axios from 'axios';
import {API_URL} from './httpService';


export function addItem ( data ) {
    console.log('itemService',data);
    return axios.post(`${API_URL}/items`,data);
}

export function getItems(){
    const a = axios.get(`${API_URL}/items`).then(res=>res.data)
    return a;
}

const itemService = {
    addItem,
    getItems,

}

export default itemService;

