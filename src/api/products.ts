import axios from 'axios';
import { API_URL } from '../consts/api';
import { APIResponse } from '../types/APIResponse';
import { Product } from '../types/Product';

export const getAllProducts = async () => {
  const response = await axios.get<APIResponse>(`${API_URL}products`);

  return response.data;
};

export const getProductById = async (productId: number) => {
  const response = await axios.get<Product>(`${API_URL}products/${productId}`);

  return response.data;
};

export const getAllProductsByCategory = async (category: string) => {
  const response = await axios.get<APIResponse>(`${API_URL}/${category}`);

  return response.data;
};

export const getDetailedProductByItemId = async (
  category: string,
  itemId: string,
) => {
  const response = await axios.get<APIResponse>(
    `${API_URL}/${category}/${itemId}`,
  );

  return response.data;
};
