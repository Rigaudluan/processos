import axios from 'axios';

export const linkApi = 'http://1398071eec4b.ngrok.io'

export const api = axios.create({
    baseURL: linkApi
});