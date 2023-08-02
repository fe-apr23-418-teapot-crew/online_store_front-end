import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { ProductCard } from '../../components/ProductCard';
import { Product } from '../../types/Product';
import { useQuery } from 'react-query';
import { fetchProducts } from '../../api/products';
import CircularProgress from '@mui/material/CircularProgress';

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
  const { data, isLoading, error } = useQuery<Product[]>(
    pathAPI,
    fetchProducts,
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  const handleProductCardClick = (productId: number) => {
    setSelectedProductId(productId);
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
        {data?.length} + {'models'}
      </h6>

      <div className="products__filter-fields">
        <select name="sort-by" className="products__select">
          <option value="by-date">By date</option>
          <option value="by-name">By name</option>
          <option value="by-price">By price</option>
        </select>

        <select name="pagination" className="products__select">
          <option value="16">16</option>
          <option value="32">32</option>
          <option value="64">64</option>
          <option value="all">All</option>
        </select>
      </div>

      <ul className="products__gadgets">
        {data?.map((product) => (
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
