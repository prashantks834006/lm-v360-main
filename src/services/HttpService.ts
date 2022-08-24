import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://demo0871324.mockable.io/',
});

export default request;
