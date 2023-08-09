import React from 'react';
import { ProductList } from '../../components/Product/ProductList/ProductList';
import { Sort } from '../../components/Sort/Sort';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '../../components/Pagination/Pagination';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { getAllProductsByCategory } from '../../api/products';
import { useQuery } from 'react-query';
import { Loader } from '../../components/Loader';

interface ProductsLayoutProps {
  category: string;
  title?: string;
  children: React.ReactNode;
}

export const ProductsLayout: React.FC<ProductsLayoutProps> = ({
  category,
  title,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || 'discount';
  const limit = searchParams.get('limit') || '16';
  const offset = searchParams.get('offset') || '0';
  const query = searchParams.get('query') || '';

  const { data, isLoading } = useQuery(
    ['products', category, sortBy, offset, limit, query],
    () => getAllProductsByCategory(category, sortBy, offset, limit, query),
  );

  const products = data?.rows || [];
  const productsCount = data?.count || 0;
  const isProductsEmpty = productsCount > 0;

  const updateSearchParams = (params: Record<string, string>) => {
    const newSearchParams = new URLSearchParams(searchParams);

    for (const [key, value] of Object.entries(params)) {
      newSearchParams.set(key, value);
    }

    setSearchParams(newSearchParams);
  };

  const changeSortBy = (sortValue: string) => {
    updateSearchParams({ sortBy: sortValue });
  };

  const changeOffset = (offsetValue: string) => {
    updateSearchParams({ offset: offsetValue });
  };

  const changeLimit = (limitValue: string) => {
    updateSearchParams({ limit: limitValue });
  };

  const changeQuery = (newQuery: string) => {
    updateSearchParams({ query: newQuery });
  };

  return (
    <div className="products">
      <Breadcrumbs path={category} />

      <h1 className="products__title">{title || category}</h1>

      <h6 className="products__count">
        {isProductsEmpty ? `${productsCount} models` : ''}
      </h6>

      <div className="products__filter-fields">
        <Sort
          query={query}
          sortBy={sortBy}
          limit={limit}
          changeSortBy={changeSortBy}
          changeLimit={changeLimit}
          changeQuery={changeQuery}
        />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ProductList products={products} />

          <Pagination
            productsOnPage={+limit}
            productsNumber={productsCount}
            changeOffset={changeOffset}
          />
        </>
      )}
    </div>
  );
};
