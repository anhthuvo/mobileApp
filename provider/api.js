import axios from 'axios';

export const API_URL = 'https://shoes-shop-app.herokuapp.com/api';

export const shopApi = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })