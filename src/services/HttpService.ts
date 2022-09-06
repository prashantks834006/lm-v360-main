import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://v360-core-actions.spica.dev.ecommerce.pdx.atieva.com/api',
});

export default request;
