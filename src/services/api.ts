import axios from 'axios';

export const linkApi = 'http://4160e678c3b2.ngrok.io'

export const api = axios.create({
    baseURL: linkApi
});