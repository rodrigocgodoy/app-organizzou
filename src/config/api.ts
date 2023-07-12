import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.organizzou.com.br',
  headers: {
    'Content-Type': 'application/json', 
    "Access-Control-Allow-Origin": "*",
  }
});
