import axios from 'axios';

export const linkApi = 'hhttp://9d86f2545b6c.ngrok.io'

export const api = axios.create({
    baseURL: linkApi
});