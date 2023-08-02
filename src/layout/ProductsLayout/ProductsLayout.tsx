import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
<<<<<<< HEAD
import { ProductCard } from '../../components/ProductCard';
import { useQuery } from 'react-query';
import { fetchProducts } from '../../api/products';
import CircularProgress from '@mui/material/CircularProgress';
import { ApiResponse } from '../../types/APIResponse';
=======
import { Product } from '../../types/Product';
import { useQuery } from 'react-query';
import { fetchProducts } from '../../api/products';
import CircularProgress from '@mui/material/CircularProgress';
import { Pagination } from '../../components/Pagination/Pagination';
import { ProductCard } from '../../components/ProductCard';
>>>>>>> a7d6747f4a0bdbeb15f5bf552aa4b98a364f2f51

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
<<<<<<< HEAD
  const { data, isLoading, error } = useQuery<ApiResponse>(
    pathAPI,
    fetchProducts,
  );
=======
  const { data, isLoading, error } = useQuery<Product[]>(pathAPI, fetchProducts);
  const [itemsOnPage, setItemsOnPage] = useState<string>('16');

  const handleDisplayedQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsOnPage(event.target.value);
  };
>>>>>>> a7d6747f4a0bdbeb15f5bf552aa4b98a364f2f51

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

<<<<<<< HEAD
  const productFromServer = data?.rows;
  const productCount = productFromServer?.length;

=======
>>>>>>> a7d6747f4a0bdbeb15f5bf552aa4b98a364f2f51
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

<<<<<<< HEAD
        <select name="pagination" className="products__select">
          <option value="16">16</option>
=======
        <select
          name="pagination"
          className="products__select"
          onChange={handleDisplayedQuantity}
        >
          <option value="16" selected>
          16
          </option>
>>>>>>> a7d6747f4a0bdbeb15f5bf552aa4b98a364f2f51
          <option value="32">32</option>
          <option value="64">64</option>
          <option value="all">All</option>
        </select>
      </div>

<<<<<<< HEAD
      <ul className="products__gadgets">
        {productFromServer?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
=======
      {itemsOnPage !== 'all'
        ? data && <Pagination pages={+itemsOnPage} products={data} />
        : <ul className="products__gadgets">
          {data?.map((gadget) => (
            <ProductCard key={gadget.id} product={gadget} />
          ))}
        </ul>
      }
>>>>>>> a7d6747f4a0bdbeb15f5bf552aa4b98a364f2f51
    </div>
  );
};
