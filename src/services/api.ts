import axios from 'axios';

export const linkApi = 'http://0e93e0c260a8.ngrok.io'

export const api = axios.create({
    baseURL: linkApi
});