import axios from 'axios';
import {API_URL} from './httpService';


export function addLocation( data ){
    console.log('postdata', data);
    return axios.post (`${API_URL}/locations`, data);
}

export function getLocations(){
  
    return axios.get (`${API_URL}/locations`);
}



const locationService = {
    addLocation
}

export default locationService;
