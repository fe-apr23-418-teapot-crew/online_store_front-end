import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { ProductCard } from '../../components/ProductCard';
import { useQuery } from 'react-query';
import { fetchProducts } from '../../api/products';
import CircularProgress from '@mui/material/CircularProgress';
import { Product } from '../../types/Product';
import { ApiResponse } from '../../types/APIResponse';
// import { Pagination } from '../../components/Pagination/Pagination';

interface ContentLayoutProps {
  path: string;
  pathAPI: string;
  title: string;
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
  //const itemsOnPage = 16;

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  const productFromServer = data?.rows;
  const productCount = productFromServer?.length;

  const handleProductCardClick = (productId: number) => {
    setSelectedProductId(productId);
  };

  console.log(selectedProductId);

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

        <select
          name="pagination"
          className="products__select"
          // onChange={handleDisplayedQuantity}
        >
          <option value="16" selected>
            16
          </option>
          <option value="32">32</option>
          <option value="64">64</option>
          <option value="all">All</option>
        </select>
      </div>

      <ul className="products__gadgets">
        {productFromServer?.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleProductCardClick={handleProductCardClick}
          />
        ))}
      </ul>
    </div>
  );
};

// <Pagination pages={+itemsOnPage} products={productFromServer} />
