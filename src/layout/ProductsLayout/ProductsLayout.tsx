import React, { useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { ProductList } from '../../components/ProductList/ProductList';
import { ProductsContext } from '../../contexts/Products';
import { getStoredItems } from '../../helpers/localStorage/getStoredItems';
import { LiteProduct } from '../../types/LiteProduct';
import { LocationHistory } from '../../components/LocationHistory';
//import { Product } from '../../types/Product';
// import { Pagination } from '../../components/Pagination/Pagination';

interface ContentLayoutProps {
  path: string;
  pathAPI: string;
  title: string;
  localStorageItem?: string;
}

export const ProductsLayout: React.FC<ContentLayoutProps> = ({
  path,
  title,
  localStorageItem,
}) => {
  const { data, isLoading, error } = useContext(ProductsContext);

  let visibleProducts;

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  const productsFromServer = data?.rows;
  const productCount = productsFromServer?.length;

  if (localStorageItem === 'favs') {
    const favsIds = getStoredItems('favs').map(
      (favItem: LiteProduct) => favItem.id,
    );

    const filteredProducts = productsFromServer?.filter((product) =>
      favsIds.includes(product.id),
    );

    visibleProducts = filteredProducts;
  } else {
    const filteredProducts = productsFromServer?.filter(
      (product) => product.category === path,
    );

    visibleProducts = filteredProducts;
  }

  return (
    <div className="products">
      <LocationHistory path={path} />

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
          <option value="16">16</option>
          <option value="32">32</option>
          <option value="64">64</option>
          <option value="all">All</option>
        </select>
      </div>

      {visibleProducts && <ProductList products={visibleProducts} />}
    </div>
  );
};
