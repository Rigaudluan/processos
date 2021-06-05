import axios from 'axios';

export const linkApi = 'http://47acf03f7224.ngrok.io'

export const api = axios.create({
    baseURL: linkApi
});