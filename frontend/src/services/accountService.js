import axios from 'axios';
import {API_URL} from './httpService';
import jwtDecode from 'jwt-decode';


/* get details of user */
 export function getCurrentAccount(){
    try{
        const jwt = localStorage.getItem("accountToken");
        return jwtDecode(jwt);
    }
    catch(ex){
        return null
    }
} 

/* create account */

export function addAccount ( data ) {
    return axios.post (`${API_URL}/accounts`, data);
}

/* get accountToken from login */

export async function accountLogin (data) {
    const newData = await axios.post (`${API_URL}/accountAuth`, data);
    console.log(newData);
    localStorage.setItem("accountToken",newData.data.token);
    
}

/* get account list name */

export async function getAccountsName(id){
    return axios.get(`${API_URL}/account/${id}`)
}


/* join to account */
export async function joinAccount(id){
    const newAccount = await axios.post(`${API_URL}/accountAuth/auth`, id);
    console.log(newAccount);
   localStorage.setItem("accountToken",newAccount.data.token);
     
}

const service = {
    addAccount,
    accountLogin,
    getCurrentAccount,
    joinAccount,
    getAccountsName
 
}

export default service;

