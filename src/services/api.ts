import axios from 'axios';

export const linkApi = 'http://9bd92761d222.ngrok.io'

export const api = axios.create({
    baseURL: linkApi
});