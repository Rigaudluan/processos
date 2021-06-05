import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://082da5e4fba9.ngrok.io'
});