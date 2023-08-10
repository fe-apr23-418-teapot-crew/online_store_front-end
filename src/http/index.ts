import axios from 'axios';
import { API_URL } from '../consts/api';

export function createClient() {
  return axios.create({
    // baseURL: process.env.REACT_APP_API_URL,
    baseURL: API_URL,
    withCredentials: true,
  });
}
