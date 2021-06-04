import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://6c76831dc754.ngrok.io'
});