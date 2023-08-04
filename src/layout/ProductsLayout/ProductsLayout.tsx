import React, { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
// import { useQuery } from 'react-query';
// import { fetchProducts } from '../../api/products';
// import CircularProgress from '@mui/material/CircularProgress';
// import { ApiResponse } from '../../types/APIResponse';
import { ProductList } from '../../components/ProductList/ProductList';
import { Sort } from '../../components/Sort/Sort';
import { useSearchParams } from 'react-router-dom';
import { API_URL } from '../../consts/api';
import { Product } from '../../types/Product';
// import { Pagination } from '../../components/Pagination/Pagination';

interface ContentLayoutProps {
  path: string;
  pathAPI: string;
  title: string;
  localStorageItem?: string;
}

export const ProductsLayout: React.FC<ContentLayoutProps> = ({
  path,
  // pathAPI,
  title,
}) => {
  const [locationHistory] = useState([path, 'iphone 10 Pro Max']);
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const sortBy = searchParams.get('sortBy') || 'discount';
  const limit = searchParams.get('limit') || '16';

  // const { data, isLoading, error } = useQuery<ApiResponse>(
  //   pathAPI,
  //   fetchProducts,
  // );

  // if (isLoading) {
  //   return <CircularProgress />;
  // }

  // if (error) {
  //   return <div>Error: {error.toString()}</div>;
  // }

  const fetchProductsMethod = (endpoint: string, sortVal: string, limitVal: string) => {
    fetch(`${API_URL}${endpoint}?limit=${limitVal}&sortBy=${sortVal}`)
      .then(response => response.json())
      .then(data => setProducts(data.rows));
  };

  useEffect(() => {
    fetchProductsMethod('phones', sortBy, limit);
  }, [sortBy, limit]);

  const productCount = products.length;

  const changeSortBy = (sortValue: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sortBy', sortValue);
    setSearchParams(params);
  };

  const changeLimit = (limitValue: string) => {
    const params = new URLSearchParams(searchParams);
    console.log(params);

    params.set('limit', limitValue);

    setSearchParams(params);
  };

  return (
    <div className="products">
      <div className="products__location-history">
        <HomeIcon className="products__home-icon" />

        <ul className="products__location-history-list">
          {locationHistory.map((location) => (
            <li key={location} className="products__location-history-item">
              {`> ${location}`}
            </li>
          ))}
        </ul>
      </div>

      <h1 className="products__title">{title}</h1>

      <h6 className="products__count">
        {productCount} + {'models'}
      </h6>

      <div className="products__section">
        <Sort
          sortBy={sortBy}
          limit={limit}
          changeSortBy={changeSortBy}
          changeLimit={changeLimit}
        />

        {products.length && <ProductList products={products} />}
      </div>

    </div>
  );
};
