import React, { FC, useEffect, useState } from 'react';
import { API_URL } from '../../../consts/api';

interface Props {
  productId: number | null;
}

export const ProductDetails: FC<Props> = ({ productId }) => {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}products/${productId}`)
      .then((response) => response.json())
      .then(setProductDetails)
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  const { name, capacity, color, screen, ram } = productDetails;

  return (
    <div>
      <h2>{`${name} ${capacity} ${color}`}</h2>
      <p>Screen: {screen}</p>
      <p>Capacity: {capacity}</p>
      <p>RAM: {ram}</p>
    </div>
  );
};
