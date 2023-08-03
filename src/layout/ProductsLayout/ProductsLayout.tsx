import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { useQuery } from 'react-query';
import { fetchProducts } from '../../api/products';
import CircularProgress from '@mui/material/CircularProgress';
import { ApiResponse } from '../../types/APIResponse';
import { ProductList } from '../../components/ProductList/ProductList';
// import { Pagination } from '../../components/Pagination/Pagination';

interface ContentLayoutProps {
  path: string;
  pathAPI: string;
  title: string;
  localStorageItem?: string;
}

export const ProductsLayout: React.FC<ContentLayoutProps> = ({
  path,
  pathAPI,
  title,
}) => {
  const [locationHistory] = useState([path, 'iphone 10 Pro Max']);
  const { data, isLoading, error } = useQuery<ApiResponse>(
    pathAPI,
    fetchProducts,
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  const productsFromServer = data?.rows;
  const productCount = productsFromServer?.length;

  const filteredProducts = productsFromServer?.filter(
    (product) => product.category === path,
  );

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

      <div className="products__filter-fields">
        <select name="sort-by" className="products__select">
          <option value="by-date">By date</option>
          <option value="by-name">By name</option>
          <option value="by-price">By price</option>
        </select>

        <select name="pagination" className="products__select">
          <option value="16" selected>
            16
          </option>
          <option value="32">32</option>
          <option value="64">64</option>
          <option value="all">All</option>
        </select>
      </div>

      {filteredProducts && <ProductList products={filteredProducts} />}
    </div>
  );
};
