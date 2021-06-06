import axios from 'axios';

export const linkApi = 'http://b2221523b12d.ngrok.io'

export const api = axios.create({
    baseURL: linkApi
});