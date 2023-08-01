import React from 'react';
import Grid from '@mui/material/Grid';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.scss';

const products = [
  {
    'id': 1,
    'category': 'phones',
    'itemId': 'apple-iphone-7-32gb-black',
    'name': 'Apple iPhone 7 32GB Black',
    'fullPrice': 400,
    'price': 375,
    'screen': '4.7\' IPS',
    'capacity': '32GB',
    'color': 'black',
    'ram': '2GB',
    'year': 2016,
    'image': 'img/phones/apple-iphone-7/black/00.webp'
  },
];

export const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      <Grid 
        container 
        className="product-list__grid" 
        alignItems="center"
        spacing={2}
      >
        <Grid className="product-list__item" item xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={products[0]} />
        </Grid>
        <Grid className="product-list__item" item xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={products[0]} />
        </Grid>
        <Grid className="product-list__item" item xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={products[0]} />
        </Grid>
        <Grid className="product-list__item" item xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={products[0]} />
        </Grid>
      </Grid>
    </div>
  );
};