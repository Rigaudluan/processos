import axios from 'axios';

export const linkApi = 'http://9911bbba2b2e.ngrok.io'

export const api = axios.create({
    baseURL: linkApi
});