import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { store } from '../store';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(config => {
  const { token } = store.getState().auth;

  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});

export default api;
