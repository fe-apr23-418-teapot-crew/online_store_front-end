import axios from 'axios';
import { APIResponse } from '../types/APIResponse';

export const fetchProducts = async () => {
  const response = await axios.get<APIResponse>(
    'https://four18-teapot-crew-dev.onrender.com/products',
  );

  return response.data;
};

// export const fetchProductById = async (productIds: number[]) => {
//   try {
//     const productPromises = productIds.map(async (id) => {
//       const response = await axios.get<Product[]>(
//         `https://four18-teapot-crew-dev.onrender.com/products/${id}`,
//       );
//       return response.data;
//     });

//     const products: APIResponse = await Promise.all(productPromises);

//     return products.rows;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return { count: 0, rows: [] };
//   }
// };
