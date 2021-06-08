import axios from 'axios';

export const linkApi = 'http://9e9e793b8200.ngrok.io'

export const api = axios.create({
    baseURL: linkApi
});