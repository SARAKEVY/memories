import axios from 'axios';
import {API_URL} from './httpService';


export function addDetail( data ){
    console.log('postdata', data);
    return axios.post (`${API_URL}/details`, data);
}

export function getDetails(){
    const a = axios.get (`${API_URL}/details`).then(res=>res.data);
    return a;
    
   }



const detailService = {
    addDetail,
    getDetails
}

export default detailService;
