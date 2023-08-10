import axios from 'axios';
import { API_URL } from '../consts/api';
import { ProductsData } from '../types/ProductsData';
import { DetailedProduct } from '../types/DetailedProduct';
import { Product } from '../types/Product';
import { User } from '../types/User';

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

export const getProductByItemId = async (itemId: string) => {
  const response = await axios.get<Product>(`${API_URL}products/${itemId}`);

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
    `${API_URL}${category}/${itemId}`,
  );

  return response.data;
};


export const getCountOfCategory = async () => {
  const requests = [
    axios.get<ProductsData>(`${API_URL}phones`),
    axios.get<ProductsData>(`${API_URL}tablets`),
    axios.get<ProductsData>(`${API_URL}accessories`),
  ];

  const responses = await Promise.all(requests);

  const counts = responses.map((response) => response.data.count);

  return counts;
};

export const getActivation = async (activationToken: string) => {
  const response = await axios.get<User>(
    `${API_URL}activation/${activationToken}`,
  );

  return response.data;
};
