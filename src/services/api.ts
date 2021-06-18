import axios from 'axios';

export const linkApi = 'http://f180e9d0952a.ngrok.io'

export const api = axios.create({
    baseURL: linkApi
});