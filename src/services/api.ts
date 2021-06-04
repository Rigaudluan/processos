import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://bca2d33137cc.ngrok.io'
});