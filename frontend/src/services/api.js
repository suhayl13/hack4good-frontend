import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-api.com/api',
});

export default api;
