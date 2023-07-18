import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.0.102:8000',
  // baseURL: 'https://api.organizzou.com.br',
  headers: {
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin': '*',
  }
});
