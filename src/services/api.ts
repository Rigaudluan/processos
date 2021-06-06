import axios from 'axios';

export const linkApi = 'http://950565df623f.ngrok.io'

export const api = axios.create({
    baseURL: linkApi
});