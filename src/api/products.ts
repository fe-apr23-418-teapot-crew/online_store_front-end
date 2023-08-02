import axios from 'axios';
import { ApiResponse } from '../types/APIResponse';

export const fetchProducts = async () => {
  const response = await axios.get<ApiResponse>(
    'https://four18-teapot-crew-dev.onrender.com/products',
  );

  return response.data;
};
