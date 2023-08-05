import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../../consts/api';
import { DetailedProduct } from '../../types/DetailedProduct';
import { ProductImageCarousel } from '../ProductImageCarousel/ProductImageCarousel';


interface FetchProductProps<T> {
  url: string
  setFunc: (v: T) => void
  errorText: string
}

const fetchProduct = async <T extends object>(
  { url, setFunc, errorText }: FetchProductProps<T>
) => {
  fetch(url)
    .then((response) => response.json())
    .then(setFunc)
    .catch((error) => {
      console.error(errorText, error);
    });
};

export const ProductPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [productDetails, setProductDetails] = useState<DetailedProduct | null>(
    null,
  );

  const { pathname } = useLocation();

  const normalizedPathName = pathname.slice(1);

  console.log(`${API_URL}${normalizedPathName}`);

  useEffect(() => {
    fetch(`${API_URL}${normalizedPathName}`)
      .then((response) => response.json())
      .then(setProduct)
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [pathname]);

  console.log(productDetails);

  return (
    <>
      <h1>Product Page</h1>
      {productDetails && <ProductImageCarousel product={productDetails} />}
    </>
  );
};
