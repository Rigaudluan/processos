import axios from 'axios';

export const linkApi = 'http://676d8cd5ad58.ngrok.io'

export const api = axios.create({
    baseURL: linkApi
});