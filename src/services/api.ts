import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://b81eb7f2d141.ngrok.io'
});