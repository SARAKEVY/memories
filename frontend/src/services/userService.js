import axios from 'axios';
import {API_URL} from './httpService';
import jwtDecode from 'jwt-decode';

export function getCurrentUser(){
    try{
        const jwt = localStorage.getItem("token");
        return jwtDecode(jwt);
    }
    catch(ex){
        return null
    }
}



export function addUser ( data ){
    console.log('postdata', data);
    return axios.post (`${API_URL}/users`, data);
}

export function addWithGoogle ( data ){
    console.log('postdata', data);
    return axios.post (`${API_URL}/users/google`, data);
}

export async function login (data) {
    const newData = await axios.post (`${API_URL}/auth`, data);
    console.log(newData);
    localStorage.setItem("token",newData.data.token);
    
}


export async function getUserAccounts ( userId){
    console.log("userid", userId);
    return axios.get(`${API_URL}/users/${userId}`);
}

const loginService = {
    addUser,
    addWithGoogle,
    login,
    getCurrentUser,
    getUserAccounts
}

export default loginService;
