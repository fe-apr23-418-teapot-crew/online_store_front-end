import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Product } from '../../types/Product';
import { useQuery } from 'react-query';
import { fetchProducts } from '../../api/products';
import CircularProgress from '@mui/material/CircularProgress';
import { Pagination } from '../../components/Pagination/Pagination';
import { ProductCard } from '../../components/ProductCard';

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
  const { data, isLoading, error } = useQuery<Product[]>(pathAPI, fetchProducts);
  const [itemsOnPage, setItemsOnPage] = useState<string>('16');

  const handleDisplayedQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsOnPage(event.target.value);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  return (
    <div className="products">
      <div className="products__location-history">
        <HomeIcon className="products__home-icon"/>

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
          <option value="by-date" selected>
          By date
          </option>
          <option value="by-name">By name</option>
          <option value="by-price">By price</option>
        </select>

        <select
          name="pagination"
          className="products__select"
          onChange={handleDisplayedQuantity}
        >
          <option value="16" selected>
          16
          </option>
          <option value="32">32</option>
          <option value="64">64</option>
          <option value="all">All</option>
        </select>
      </div>

      {itemsOnPage !== 'all'
        ? data && <Pagination pages={+itemsOnPage} products={data} />
        : <ul className="products__gadgets">
          {data?.map((gadget) => (
            <ProductCard key={gadget.id} product={gadget} />
          ))}
        </ul>
      }
    </div>
  );

};
