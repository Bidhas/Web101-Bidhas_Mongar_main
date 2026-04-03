import axios from 'axios';

//Define base url for our api 
const API_BASE_URL = 'http://localhost:800/api'; //Adjust port to yours

//Creat main APi instance 
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

//Request interceptor for adding authorization 
api.interceptors.request.use()