import React from 'react';
import Grid from '@mui/material/Grid';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';
import { Product } from '../../../types/Product';

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      <Grid
        container
        className="product-list__grid"
        alignItems="center"
        spacing={2}
      >
        {products.map((product) => (
          <Grid
            key={product.id}
            className="product-list__item"
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
