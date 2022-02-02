import axios from 'axios';
import {API_URL} from './httpService';


export function addLocation( data ){
    console.log('postdata', data);
    return axios.post (`${API_URL}/locations`, data);
}

export function getLocations(){
    const a = axios.get (`${API_URL}/locations`).then(res=>res.data);
    return a;
    
   }



const locationService = {
    addLocation,
    getLocations
}

export default locationService;
