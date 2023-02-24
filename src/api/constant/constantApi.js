import axios from "axios";

export const BASE_URL = 'http://localhost:3002/';
export const LOGIN_URL = '/auth/login';

export const INSTANCE = axios.create({
    baseURL : BASE_URL,
    headers : {
        Authorization:`${localStorage.getItem('accessToken')}`
    }

})