import axios from 'axios';

export const linkApi = 'http://86180378b6e5.ngrok.io'

export const api = axios.create({
    baseURL: linkApi
});