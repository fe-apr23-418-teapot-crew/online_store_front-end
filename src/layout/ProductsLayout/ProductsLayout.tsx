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
  const query = searchParams.getAll('query') || '';

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
    query: string[],
  ) => {
    fetch(
      `${API_URL}${endpoint}?limit=${limitVal}&offset=${offsetVal}&sortBy=${sortVal}&name=${query}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.rows);
        setProductsCount(data.count);
      });
  };

  // const getProductCount = (endpoint: string) => {
  //   fetch(`${API_URL}${endpoint}?limit=${limit}&offset=${offset}&sortBy=${sortBy}&name=${query}`)
  //     .then((response) => response.json())
  //     .then((data) => setProductsCount(data.count));
  // };
  console.log(query);

  useEffect(() => {
    fetchProductsMethod(path, sortBy, offset, limit, query);
    // getProductCount(path);
  }, [path, sortBy, offset, limit, query]);

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

  const changeQuery = (query: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('query', query);
    setSearchParams(params);
  };

  // const filteredProducts = products.filter(product => {
  //   const loweredQuery = query.join(' ').toLowerCase().trim();
  //   const normalizedProductName = product.name.toLowerCase();
    
  //   return normalizedProductName.includes(loweredQuery);
  // });

  // console.log(filteredProducts);

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
          query={query}
          changeSortBy={changeSortBy}
          changeLimit={changeLimit}
          changeQuery={changeQuery}
        />
      </div>

      {products.length && <ProductList products={products} />}
      <Pagination
        productsOnPage={+limit}
        productsNumber={productsCount}
        changeOffset={changeOffset}
      />
    </div>
  );
};
