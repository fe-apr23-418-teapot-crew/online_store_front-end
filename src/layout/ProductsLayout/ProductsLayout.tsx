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
import { Pagination } from '../../components/Pagination/Pagination';

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
  localStorageItem,
}) => {
  const [locationHistory] = useState([path, 'iphone 10 Pro Max']);
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [productsCount, setProductsCount] = useState<number>(0);
  const sortBy = searchParams.get('sortBy') || 'discount';
  const limit = searchParams.get('limit') || '16';
  const offset = searchParams.get('offset') || '0';

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

  const fetchProductsMethod = (endpoint: string, sortVal: string, offsetVal: string, limitVal: string) => {
    fetch(`${API_URL}${endpoint}?limit=${limitVal}&offset=${offsetVal}&sortBy=${sortVal}`)
      .then(response => response.json())
      .then(data => setProducts(data.rows));
  };

  const getProductCount = (endpoint: string) => {
    fetch(`${API_URL}${endpoint}`)
      .then(response => response.json())
      .then(data => setProductsCount(data.count));
  };
  console.log(productsCount);

  useEffect(() => {
    fetchProductsMethod(path, sortBy, offset, limit);
    getProductCount(path);
  }, [path, sortBy, offset, limit]);

  const changeSortBy = (sortValue: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sortBy', sortValue);
    setSearchParams(params);
  };

  const changeOffset = (offsetValue: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('offset', offsetValue);
    setSearchParams(params);
  };

  const changeLimit = (limitValue: string) => {
    const params = new URLSearchParams(searchParams);
    console.log(params);

    params.set('limit', limitValue);

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
        {productsCount} + {'models'}
      </h6>

      <div className="products__filter-fields">
        <select name="sort-by" className="products__select">
          <option value="by-date">By date</option>
          <option value="by-name">By name</option>
          <option value="by-price">By price</option>
        </select>

        {products.length && <ProductList products={products} />}
        <Pagination
          productsOnPage={+limit}
          productsNumber={productsCount}
          changeOffset={changeOffset}
        />
      </div>

    </div>
  );
};
