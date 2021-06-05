import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://47acf03f7224.ngrok.io'
});