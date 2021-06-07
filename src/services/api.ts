import axios from 'axios';

export const linkApi = 'http://eec4ab6f1e75.ngrok.io'

export const api = axios.create({
    baseURL: linkApi
});