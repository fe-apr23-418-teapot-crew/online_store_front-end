import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../consts/api';
import { Product } from '../../types/Product';

export const ProductPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [productDetails, setProductDetails] = useState<Product | null>(null);

  const { productId } = useParams();

  useEffect(() => {
    fetch(`${API_URL}products/${productId}`)
      .then((response) => response.json())
      .then(setProductDetails)
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]);
  
  return (
    <h1>Product Page</h1>
  );
};