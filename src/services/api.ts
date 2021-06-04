import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://45b87c488bab.ngrok.io'
});