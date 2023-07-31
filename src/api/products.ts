import axios from 'axios';
import { Product } from '../types/Product';

export const fetchProducts = async() => {
  const response = await axios.get<Product[]>('https://four18-teapot-crew-dev.onrender.com/products');
    
  return response.data;
};
