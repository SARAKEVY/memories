import axios from 'axios';
import {API_URL} from './httpService';
import jwtDecode from 'jwt-decode';

 export function getCurrentAccount(){
    try{
        const jwt = localStorage.getItem("accountToken");
        return jwtDecode(jwt);
    }
    catch(ex){
        return null
    }
} 

export function addAccount ( data ) {
    return axios.post (`${API_URL}/accounts`, data);
}

export async function accountLogin (data) {
    const newData = await axios.post (`${API_URL}/accountAuth`, data);
    console.log(newData);
    localStorage.setItem("accountToken",newData.data.token);
    
}



const service = {
    addAccount,
    accountLogin,
    getCurrentAccount
 
}

export default service;

