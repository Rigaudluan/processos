import axios from 'axios';

export const linkApi = 'http://fed91f746b3d.ngrok.io'

export const api = axios.create({
    baseURL: linkApi
});