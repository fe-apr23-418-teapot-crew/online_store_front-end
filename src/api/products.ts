import axios from 'axios';
import { API_URL } from '../consts/api';
import { ProductsData } from '../types/ProductsData';
import { DetailedProduct } from '../types/DetailedProduct';
import { Product } from '../types/Product';

export const getAllProducts = async () => {
  const response = await axios.get<ProductsData>(`${API_URL}products`);

  return response.data;
};

export const getSelectedProducts = async (category: string) => {
  const response = await axios.get<ProductsData>(
    `${API_URL}products/${category}`,
  );

  return response.data;
};

export const getProductById = async (productId: number) => {
  const response = await axios.get<Product>(`${API_URL}products/${productId}`);

  return response.data;
};

export const getAllProductsByCategory = async (
  category: string,
  sort: string,
  offset: string,
  limit: string,
  query: string,
) => {
  const response = await axios.get<ProductsData>(
    `${API_URL}${category}?limit=${limit}&offset=${offset}&sortBy=${sort}&name=${query}`,
  );
  return response.data;
};

export const getDetailedProductByItemId = async (
  category: string,
  itemId: string,
) => {
  const response = await axios.get<DetailedProduct>(
    `${API_URL}/${category}/${itemId}`,
  );

  return response.data;
};

export const getCountOfCategory = async () => {
  const response = await axios.get<ProductsData>(`${API_URL}products`);

  return response.data;
};
