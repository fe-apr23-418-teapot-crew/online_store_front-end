import React, { useEffect, useState } from 'react';
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
import { LocationHistory } from '../../components/LocationHistory';

interface ProductsLayoutProps {
  path: string;
  pathAPI: string;
  title: string;
  localStorageItem?: string;
}

export const ProductsLayout: React.FC<ProductsLayoutProps> = ({
  path,
  // pathAPI,
  title,
}) => {
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

  const fetchProductsMethod = (
    endpoint: string,
    sortVal: string,
    offsetVal: string,
    limitVal: string,
  ) => {
    fetch(
      `${API_URL}${endpoint}?limit=${limitVal}&offset=${offsetVal}&sortBy=${sortVal}`,
    )
      .then((response) => response.json())
      .then((data) => setProducts(data.rows));
  };

  const getProductCount = (endpoint: string) => {
    fetch(`${API_URL}${endpoint}`)
      .then((response) => response.json())
      .then((data) => setProductsCount(data.count));
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
    params.set('limit', limitValue);
    setSearchParams(params);
  };

  // console.log(limit);
  // console.log(sortBy);

  return (
    <div className="products">
      <LocationHistory path={path} />

      <h1 className="products__title">{title}</h1>

      <h6 className="products__count">
        {productsCount} + {'models'}
      </h6>

      <div className="products__filter-fields">
        <Sort
          sortBy={sortBy}
          limit={limit}
          changeSortBy={changeSortBy}
          changeLimit={changeLimit}
        />

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
